import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useIsMobile } from '../hooks/use-mobile';
import { useAuth } from '../contexts/AuthContext';

import { ACCENT } from '@/lib/tokens';

const navItems = [
  { name: 'index',     path: '/',          tag: '00' },
  { name: 'about',     path: '/about',     tag: '01' },
  { name: 'services',  path: '/services',  tag: '02' },
  { name: 'solutions', path: '/solutions', tag: '03' },
  { name: 'contact',   path: '/contact',   tag: '05' },
];

const products = [
  { name: 'humo.ai', path: '/humo', tagline: 'emotionally intelligent ai companion' },
  { name: 'mos',     path: '/mos',  tagline: 'multi-agent operating system', badge: 'NEW' },
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [time, setTime] = useState<string>(() => new Date().toISOString().slice(11, 19));
  const { isLoggedIn, user, logout } = useAuth();
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const t = setInterval(() => setTime(new Date().toISOString().slice(11, 19)), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    setOpen(false);
    setProductsOpen(false);
    setProfileOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    setProfileOpen(false);
    navigate('/');
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#0a0a0a]/85 backdrop-blur-md border-b border-white/10">
      {/* Status strip */}
      <div className="border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between text-[10px] mono uppercase tracking-[0.22em] opacity-60">
          <span>humotionai // ai workforce</span>
          <span className="hidden sm:flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5" style={{ background: ACCENT }} />
            online · {time} UTC
          </span>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <span
              className="inline-block w-2.5 h-2.5"
              style={{ background: ACCENT, boxShadow: '0 0 12px rgba(212,255,0,0.7)' }}
            />
            <span className="display text-xl tracking-tight text-white group-hover:text-[var(--mos-accent,#d4ff00)] transition-colors">
              humotionai<span style={{ color: ACCENT }}>.</span>
            </span>
          </Link>

          {/* Desktop nav */}
          {!isMobile && (
            <nav className="flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `group relative px-3 py-2 mono text-[11px] uppercase tracking-[0.22em] transition-colors ${
                      isActive ? 'text-white' : 'text-white/55 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className="flex items-center gap-2">
                      <span className="opacity-40">[{item.tag}]</span>
                      <span>{item.name}</span>
                      {isActive && (
                        <span
                          className="absolute left-3 right-3 -bottom-px h-px"
                          style={{ background: ACCENT }}
                        />
                      )}
                    </span>
                  )}
                </NavLink>
              ))}

              {/* Products dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button
                  className="group flex items-center gap-2 px-3 py-2 mono text-[11px] uppercase tracking-[0.22em] text-white/55 hover:text-white transition-colors"
                  onClick={() => setProductsOpen((v) => !v)}
                  aria-expanded={productsOpen}
                >
                  <span className="opacity-40">[04]</span>
                  <span>products</span>
                  <span style={{ color: ACCENT }}>▾</span>
                </button>
                <AnimatePresence>
                  {productsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.12 }}
                      className="absolute right-0 mt-1 w-80 bg-[#0a0a0a] border border-white/15"
                    >
                      <div className="px-4 py-2 mono text-[10px] uppercase tracking-[0.22em] opacity-40 border-b border-white/10">
                        // shipped + shipping
                      </div>
                      {products.map((p) => (
                        <Link
                          key={p.path}
                          to={p.path}
                          className="block px-4 py-4 border-b border-white/5 hover:bg-white/5 transition-colors group"
                          onClick={() => setProductsOpen(false)}
                        >
                          <div className="flex items-center justify-between">
                            <span className="display text-lg text-white group-hover:text-[var(--mos-accent,#d4ff00)] transition-colors">
                              {p.name}
                            </span>
                            {p.badge && (
                              <span
                                className="mono text-[9px] tracking-[0.22em] px-2 py-0.5 border"
                                style={{ color: ACCENT, borderColor: ACCENT }}
                              >
                                {p.badge}
                              </span>
                            )}
                          </div>
                          <div className="mono text-[11px] opacity-50 mt-1">{p.tagline}</div>
                        </Link>
                      ))}
                      <div className="px-4 py-3 mono text-[10px] uppercase tracking-[0.22em] opacity-50">
                        <Link to="/contact" className="link-draw">
                          → talk to a human
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="w-px h-5 bg-white/15 mx-3" />

              {/* CTA */}
              <Link
                to="/contact"
                className="mono text-[11px] uppercase tracking-[0.22em] px-3 py-2 text-black transition-transform hover:-translate-y-px"
                style={{ background: ACCENT }}
              >
                ▶ book demo
              </Link>

              {/* Auth */}
              {isLoggedIn ? (
                <div className="relative ml-1">
                  <button
                    onClick={() => setProfileOpen((v) => !v)}
                    className="flex items-center gap-2 px-3 py-2 mono text-[11px] uppercase tracking-[0.22em] text-white/70 hover:text-white"
                  >
                    <span
                      className="inline-flex items-center justify-center w-6 h-6 text-[10px] font-bold text-black"
                      style={{ background: ACCENT }}
                    >
                      {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                    </span>
                    {user?.name?.split(' ')[0] || 'user'}
                  </button>
                  <AnimatePresence>
                    {profileOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="absolute right-0 mt-1 w-48 bg-[#0a0a0a] border border-white/15 mono text-[11px] uppercase tracking-[0.22em]"
                      >
                        <Link to="/profile" className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 border-b border-white/5">
                          profile
                        </Link>
                        <Link to="/settings" className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 border-b border-white/5">
                          settings
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-3 text-white/70 hover:text-white hover:bg-white/5"
                        >
                          logout ↗
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="mono text-[11px] uppercase tracking-[0.22em] px-3 py-2 text-white/55 hover:text-white"
                >
                  login
                </Link>
              )}
            </nav>
          )}

          {/* Mobile toggle */}
          {isMobile && (
            <button
              onClick={() => setOpen((v) => !v)}
              className="mono text-[11px] uppercase tracking-[0.22em] text-white border border-white/20 px-3 py-1.5"
              aria-label="toggle menu"
            >
              {open ? '× close' : '≡ menu'}
            </button>
          )}
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobile && open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-[#0a0a0a]"
          >
            <div className="px-4 py-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `flex items-center justify-between py-3 mono text-sm uppercase tracking-[0.22em] border-b border-white/5 ${
                      isActive ? 'text-white' : 'text-white/60'
                    }`
                  }
                >
                  <span className="flex items-center gap-3">
                    <span className="opacity-40 text-xs">[{item.tag}]</span>
                    {item.name}
                  </span>
                  <span className="opacity-40">→</span>
                </NavLink>
              ))}

              <div className="pt-3 mono text-[10px] uppercase tracking-[0.22em] opacity-50">products</div>
              {products.map((p) => (
                <Link
                  key={p.path}
                  to={p.path}
                  className="flex items-center justify-between py-3 border-b border-white/5"
                >
                  <span className="display text-lg text-white">{p.name}</span>
                  {p.badge && (
                    <span
                      className="mono text-[9px] tracking-[0.22em] px-2 py-0.5 border"
                      style={{ color: ACCENT, borderColor: ACCENT }}
                    >
                      {p.badge}
                    </span>
                  )}
                </Link>
              ))}

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  to="/contact"
                  className="text-center mono text-[11px] uppercase tracking-[0.22em] px-4 py-3 text-black"
                  style={{ background: ACCENT }}
                >
                  ▶ book demo
                </Link>
                {!isLoggedIn && (
                  <Link
                    to="/login"
                    className="text-center mono text-[11px] uppercase tracking-[0.22em] px-4 py-3 border border-white/30 text-white"
                  >
                    login
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
