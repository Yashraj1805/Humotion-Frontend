import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

import { ACCENT } from '@/lib/tokens';

const Settings: React.FC = () => {
  const { isLoggedIn, user } = useAuth();
  const [tab, setTab] = useState<'account' | 'notifications' | 'privacy' | 'tokens'>('account');

  if (!isLoggedIn) return <Navigate to="/login" replace />;

  const tabs = [
    { id: 'account',       label: 'account' },
    { id: 'notifications', label: 'notifications' },
    { id: 'privacy',       label: 'privacy' },
    { id: 'tokens',        label: 'api tokens' },
  ] as const;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white bg-grid pt-28 pb-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="hidden md:block md:col-span-2 mono text-[11px] uppercase tracking-[0.22em] opacity-50">
            <div>§ user</div>
            <div className="mt-1">settings</div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h1 className="display text-5xl md:text-7xl tracking-tight">
              settings<span style={{ color: ACCENT }}>.</span>
            </h1>
            <p className="mt-4 mono text-[11px] uppercase tracking-[0.22em] text-white/60">
              signed in as · {user?.email || '—'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar nav */}
          <aside className="col-span-12 md:col-span-3">
            <div className="border border-white/10">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`w-full text-left px-4 py-3 mono text-[11px] uppercase tracking-[0.22em] border-b border-white/10 last:border-0 transition-colors ${
                    tab === t.id ? 'bg-white/5 text-white' : 'text-white/60 hover:text-white hover:bg-white/[0.025]'
                  }`}
                >
                  <span className="opacity-50 mr-2">[{tabs.findIndex((x) => x.id === t.id) + 1}]</span>
                  {t.label}
                  {tab === t.id && <span style={{ color: ACCENT }} className="float-right">●</span>}
                </button>
              ))}
            </div>
          </aside>

          {/* Panel */}
          <div className="col-span-12 md:col-span-9">
            <div className="border border-white/15">
              <div className="px-5 py-3 mono text-[10px] uppercase tracking-[0.22em] opacity-60 border-b border-white/10">
                // {tab}
              </div>
              <div className="p-6 md:p-8 space-y-6">
                {tab === 'account' && (
                  <>
                    <FormRow label="display name" value={user?.name || ''} />
                    <FormRow label="email" value={user?.email || ''} type="email" />
                    <FormRow label="password" value="" type="password" placeholder="leave blank to keep current" />
                  </>
                )}
                {tab === 'notifications' && (
                  <>
                    <Toggle label="product updates"            desc="Major launches and feature announcements." />
                    <Toggle label="weekly digest"              desc="Summary of your humo + mos activity." defaultOn />
                    <Toggle label="security alerts"            desc="Login from new devices, password changes." defaultOn />
                  </>
                )}
                {tab === 'privacy' && (
                  <>
                    <Toggle label="store voice journals"      desc="Required for memory graph. Off = fresh start every session." defaultOn />
                    <Toggle label="anonymized analytics"      desc="Helps us improve detection accuracy. No content shared." defaultOn />
                    <Toggle label="train on my data"          desc="Opt-in to contribute to model improvements." />
                  </>
                )}
                {tab === 'tokens' && (
                  <>
                    <div>
                      <div className="mono text-[10px] uppercase tracking-[0.22em] opacity-60 mb-2">// active token</div>
                      <div className="font-mono text-sm bg-black/40 border border-white/10 px-4 py-3 select-all">
                        sk_live_•••••••••••••••••••••••3a91
                      </div>
                    </div>
                    <button
                      className="mono text-[11px] uppercase tracking-[0.22em] px-5 py-3 text-black"
                      style={{ background: ACCENT }}
                    >
                      ▶ generate new token
                    </button>
                  </>
                )}

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <Link to="/profile" className="mono text-[11px] uppercase tracking-[0.22em] text-white/60 hover:text-white link-draw">
                    ← back to profile
                  </Link>
                  <button
                    className="mono text-[11px] uppercase tracking-[0.22em] px-5 py-3 text-black"
                    style={{ background: ACCENT }}
                  >
                    ▶ save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FormRow: React.FC<{ label: string; value: string; type?: string; placeholder?: string }> = ({ label, value, type = 'text', placeholder }) => (
  <div>
    <label className="mono text-[10px] uppercase tracking-[0.22em] opacity-60 mb-2 block">// {label}</label>
    <input
      type={type}
      defaultValue={value}
      placeholder={placeholder}
      className="w-full bg-transparent border border-white/15 focus:border-[var(--mos-accent,#d4ff00)] outline-none px-4 py-3 text-white placeholder-white/30 transition-colors"
    />
  </div>
);

const Toggle: React.FC<{ label: string; desc: string; defaultOn?: boolean }> = ({ label, desc, defaultOn }) => {
  const [on, setOn] = useState(!!defaultOn);
  return (
    <div className="flex items-start justify-between gap-4 py-3 border-b border-white/5 last:border-0">
      <div className="flex-1">
        <div className="mono text-[11px] uppercase tracking-[0.22em] mb-1">{label}</div>
        <div className="text-sm text-white/60">{desc}</div>
      </div>
      <button
        onClick={() => setOn((v) => !v)}
        className={`relative w-12 h-6 border transition-colors ${on ? '' : 'border-white/25'}`}
        style={on ? { background: ACCENT, borderColor: ACCENT } : {}}
      >
        <span
          className={`absolute top-0.5 w-4 h-4 transition-all ${on ? 'left-7 bg-black' : 'left-0.5 bg-white/70'}`}
        />
      </button>
    </div>
  );
};

export default Settings;
