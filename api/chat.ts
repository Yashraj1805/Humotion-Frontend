// Vercel serverless function — proxies chat requests to Gemini so the API key
// stays server-side and is never shipped in the public client bundle.
// Set GEMINI_API_KEY (NOT VITE_*) in Vercel → Project → Settings → Environment Variables.

const SYSTEM_PROMPT = `You are the AI assistant for HumotionAI (legal entity: Humos AI Pvt Ltd),
a technology company that ships configurable AI agents and MOS, an AI workforce operating system.
You can help users with information about:
- Products: MOS (multi-agent workforce OS) and Humo.ai (emotionally intelligent AI companion)
- Services: AI Consulting, AI Security, Custom Development, Process Automation, Cloud Services, Data Solutions, IT Infrastructure
- Contact: info@humotionai.com, support@humotionai.com, +91 7827075810, +91 6387805151
- Office: Sector 2C, Ghaziabad, Uttar Pradesh, India 201001
Keep responses concise, accurate, and professional.`;

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(503).json({ error: 'AI assistant is not configured on the server.' });
    return;
  }

  const raw = req.body && typeof req.body === 'object' ? req.body : {};
  const message = (typeof raw.message === 'string' ? raw.message : '').slice(0, 2000).trim();
  if (!message) {
    res.status(400).json({ error: 'A non-empty "message" field is required.' });
    return;
  }

  try {
    const upstream = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `${SYSTEM_PROMPT}\n\nUser question: ${message}` }] }],
          generationConfig: { temperature: 0.7, maxOutputTokens: 500 },
        }),
      },
    );

    if (!upstream.ok) {
      res.status(502).json({ error: 'The AI service is temporarily unavailable.' });
      return;
    }

    const data = await upstream.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't process that right now.";
    res.status(200).json({ reply });
  } catch {
    res.status(500).json({ error: 'Failed to reach the AI service.' });
  }
}
