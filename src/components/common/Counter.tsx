import React, { useEffect, useRef, useState } from 'react';

interface CounterProps {
  to: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

const parse = (s: string): { num: number; prefix: string; suffix: string } => {
  const m = s.match(/^([^\d.-]*)(-?\d+(?:\.\d+)?)(.*)$/);
  if (!m) return { num: NaN, prefix: '', suffix: s };
  return { num: parseFloat(m[2]), prefix: m[1], suffix: m[3] };
};

const Counter: React.FC<CounterProps> = ({ to, duration = 1200, className, style }) => {
  const { num, prefix, suffix } = parse(to);
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (isNaN(num)) return;
    if (!ref.current) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setValue(num * eased);
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [num, duration]);

  if (isNaN(num)) {
    return (
      <span ref={ref} className={className} style={style}>
        {to}
      </span>
    );
  }

  const isInt = Number.isInteger(num);
  const display = isInt ? Math.round(value).toString() : value.toFixed(1);

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
};

export default Counter;
