import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

import { ACCENT } from '@/lib/tokens';

const Register: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    if (!form.name || !form.email || !form.password) return setErr('all fields required.');
    if (form.password !== form.confirm) return setErr('passwords do not match.');
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    login({ name: form.name, email: form.email });
    setLoading(false);
    navigate('/profile');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white bg-grid pt-28 pb-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-6">
          <div className="hidden md:block md:col-span-2 mono text-[11px] uppercase tracking-[0.22em] opacity-50">
            <div>§ auth</div>
            <div className="mt-1">register</div>
          </div>

          <div className="col-span-12 md:col-span-5">
            <div
              className="inline-flex items-center gap-2 mono text-[10px] uppercase tracking-[0.22em] px-2 py-1 border mb-8"
              style={{ color: ACCENT, borderColor: ACCENT }}
            >
              <span className="inline-block w-1.5 h-1.5" style={{ background: ACCENT }} />
              new tenant
            </div>
            <h1 className="display text-6xl md:text-8xl tracking-tight">
              join<br />
              <span style={{ color: ACCENT }}>humotionai.</span>
            </h1>
            <p className="mt-8 text-base text-white/65 max-w-md">
              Get access to Humo.ai, the MOS workspace, and our experimental product line. Free during early access.
            </p>

            <ul className="mt-8 space-y-2 mono text-[11px] uppercase tracking-[0.18em] text-white/60">
              {['humo.ai voice journaling', 'mos config + leads', 'early-access updates', 'no credit card'].map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span style={{ color: ACCENT }}>▸</span> {p}
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="col-span-12 md:col-span-5"
          >
            <div className="border border-white/15 bg-black/40">
              <div className="flex items-center justify-between px-5 py-3 mono text-[10px] uppercase tracking-[0.22em] opacity-60 border-b border-white/10">
                <span>~/register</span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                </span>
              </div>
              <form onSubmit={submit} className="p-6 md:p-8 space-y-5">
                {[
                  { name: 'name',     type: 'text',     label: 'name',             placeholder: 'your name' },
                  { name: 'email',    type: 'email',    label: 'email',            placeholder: 'you@domain.com' },
                  { name: 'password', type: 'password', label: 'password',         placeholder: '••••••••' },
                  { name: 'confirm',  type: 'password', label: 'confirm password', placeholder: '••••••••' },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="mono text-[10px] uppercase tracking-[0.22em] opacity-60 mb-2 block">// {f.label}</label>
                    <input
                      name={f.name}
                      type={f.type}
                      value={(form as any)[f.name]}
                      onChange={handle}
                      placeholder={f.placeholder}
                      disabled={loading}
                      className="w-full bg-transparent border border-white/15 focus:border-[var(--mos-accent,#d4ff00)] outline-none px-4 py-3 text-white placeholder-white/30 transition-colors"
                    />
                  </div>
                ))}

                {err && (
                  <div className="px-4 py-3 mono text-[11px] uppercase tracking-[0.22em] border border-red-400/40 text-red-300">
                    ! {err}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 mono text-[11px] uppercase tracking-[0.22em] text-black disabled:opacity-60"
                  style={{ background: ACCENT }}
                >
                  {loading ? <>provisioning<span className="caret">_</span></> : '▶ create account'}
                </button>

                <div className="flex items-center justify-between mono text-[11px] uppercase tracking-[0.22em] pt-3 border-t border-white/10">
                  <Link to="/login" className="link-draw text-white/65 hover:text-white">
                    have an account? login →
                  </Link>
                  <Link to="/" className="link-draw text-white/40 hover:text-white">
                    ← back home
                  </Link>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Register;
