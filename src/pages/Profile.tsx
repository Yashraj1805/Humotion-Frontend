import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

import { ACCENT } from '@/lib/tokens';

const Profile: React.FC = () => {
  const { isLoggedIn, user, logout } = useAuth();
  if (!isLoggedIn) return <Navigate to="/login" replace />;

  const initials = (user?.name || 'U').split(' ').map((p: string) => p[0]).join('').slice(0, 2).toUpperCase();

  const sessions = [
    { id: '01', when: 'today · 09:14', what: 'humo // voice journaling',  state: 'completed' },
    { id: '02', when: 'today · 11:02', what: 'mos // config update',       state: 'completed' },
    { id: '03', when: 'yesterday',     what: 'humo // memory graph sync',  state: 'completed' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white bg-grid pt-28 pb-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="hidden md:block md:col-span-2 mono text-[11px] uppercase tracking-[0.22em] opacity-50">
            <div>§ user</div>
            <div className="mt-1">profile</div>
          </div>
          <div className="col-span-12 md:col-span-10 flex flex-col md:flex-row md:items-end gap-8">
            <div className="flex items-center gap-6">
              <div
                className="display text-5xl text-black w-24 h-24 flex items-center justify-center"
                style={{ background: ACCENT }}
              >
                {initials}
              </div>
              <div>
                <div className="mono text-[10px] uppercase tracking-[0.22em] opacity-60 mb-2">// account</div>
                <h1 className="display text-4xl md:text-5xl tracking-tight">{user?.name || 'user'}</h1>
                <div className="mono text-[11px] uppercase tracking-[0.22em] text-white/60 mt-2">{user?.email || '—'}</div>
              </div>
            </div>

            <div className="md:ml-auto flex flex-wrap gap-2">
              <Link
                to="/settings"
                className="mono text-[11px] uppercase tracking-[0.22em] px-4 py-3 border border-white/25 hover:border-white text-white/80 hover:text-white transition-colors"
              >
                settings →
              </Link>
              <button
                onClick={logout}
                className="mono text-[11px] uppercase tracking-[0.22em] px-4 py-3 text-black"
                style={{ background: ACCENT }}
              >
                ▶ logout
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Stats */}
          <div className="col-span-12 md:col-span-4">
            <div className="border border-white/15">
              <div className="px-4 py-2 mono text-[10px] uppercase tracking-[0.22em] opacity-60 border-b border-white/10">
                // stats
              </div>
              {[
                { k: '01', label: 'humo sessions',  value: '24', unit: 'lifetime' },
                { k: '02', label: 'mos workspaces', value: '2',  unit: 'active' },
                { k: '03', label: 'tokens used',    value: '18k', unit: 'this month' },
                { k: '04', label: 'plan',           value: 'free', unit: 'early access' },
              ].map((s) => (
                <div key={s.k} className="px-4 py-4 flex items-baseline justify-between border-b border-white/10 last:border-0">
                  <div className="mono text-[10px] uppercase tracking-[0.22em] opacity-50">[{s.k}] {s.label}</div>
                  <div className="text-right">
                    <span className="display text-2xl" style={{ color: ACCENT }}>{s.value}</span>
                    <span className="mono text-[10px] uppercase tracking-[0.22em] opacity-50 ml-2">{s.unit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent activity */}
          <div className="col-span-12 md:col-span-8">
            <div className="mono text-[10px] uppercase tracking-[0.22em] opacity-50 mb-4 pb-2 border-b border-white/10">
              // recent activity
            </div>
            <div className="border border-white/10">
              {sessions.map((s) => (
                <div key={s.id} className="grid grid-cols-12 gap-4 px-4 py-4 border-b border-white/10 last:border-0 group hover:bg-white/[0.025] transition-colors">
                  <div className="col-span-2 md:col-span-1 mono text-[11px] uppercase tracking-[0.22em] opacity-50">[{s.id}]</div>
                  <div className="col-span-10 md:col-span-4 mono text-[11px] uppercase tracking-[0.22em] text-white/60">{s.when}</div>
                  <div className="col-span-12 md:col-span-5 text-sm text-white">{s.what}</div>
                  <div className="col-span-12 md:col-span-2 md:text-right">
                    <span className="mono text-[10px] uppercase tracking-[0.22em] px-2 py-1 border" style={{ color: ACCENT, borderColor: ACCENT }}>
                      ● {s.state}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/humo"
                className="mono text-[11px] uppercase tracking-[0.22em] px-5 py-3 border border-white/25 hover:border-white text-white/80 hover:text-white transition-colors"
              >
                continue humo →
              </Link>
              <Link
                to="/mos"
                className="mono text-[11px] uppercase tracking-[0.22em] px-5 py-3 border border-white/25 hover:border-white text-white/80 hover:text-white transition-colors"
              >
                open mos →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
