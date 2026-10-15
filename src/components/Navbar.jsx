import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onOpenModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Patrocinadores', href: '#patrocinadores' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Trilhas', href: '#trilhas' },
    { name: 'Programação', href: '#programacao' },
    { name: 'Palestrantes', href: '#palestrantes' },
    { name: 'Ingressos', href: '#ingressos' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: isScrolled
          ? 'rgba(6, 8, 20, 0.94)'
          : 'rgba(6, 8, 20, 0.75)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: isScrolled
          ? '1px solid rgba(139, 92, 246, 0.2)'
          : '1px solid rgba(255, 255, 255, 0.05)',
        boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.6)' : 'none',
      }}
    >
      <div
        className="container nav-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '76px',
          width: '100%',
          maxWidth: '1280px',
          boxSizing: 'border-box',
          position: 'relative',
        }}
      >
        {/* Brand / Logo */}
        <a
          href="#inicio"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            flexShrink: 1,
            minWidth: 0,
          }}
        >
          <img
            src="/logo-tw.png"
            alt="FACOM Tech Week"
            style={{
              height: '42px',
              maxWidth: '100%',
              width: 'auto',
              objectFit: 'contain',
              display: 'block',
            }}
            className="navbar-brand-logo"
          />
        </a>

        {/* Desktop Navigation (>= 1180px) */}
        <nav
          style={{
            display: 'none',
            gap: '1.4rem',
            alignItems: 'center',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '0.88rem',
                fontWeight: 500,
                transition: 'color 0.2s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#60a5fa')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons (>= 1180px) */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1rem',
            flexShrink: 0,
          }}
          className="desktop-actions"
        >
          <a
            href="https://www.sympla.com.br/evento/facom-techweek/3599637"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              padding: '0.65rem 1.4rem',
              fontSize: '0.88rem',
              borderRadius: '9999px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            <span>Inscreva-se</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button (< 1180px) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Fechar Menu' : 'Abrir Menu'}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(139, 92, 246, 0.35)',
            borderRadius: '0.6rem',
            padding: '0.55rem',
            color: '#ffffff',
            cursor: 'pointer',
            flexShrink: 0,
            zIndex: 105,
            marginLeft: 'auto',
          }}
          className="mobile-menu-btn"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          className="mobile-nav-dropdown"
          style={{
            background: 'rgba(6, 8, 20, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(139, 92, 246, 0.25)',
            padding: '1.25rem 1.25rem 1.75rem 1.25rem',
            maxHeight: 'calc(100vh - 68px)',
            overflowY: 'auto',
            overflowX: 'hidden',
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%', boxSizing: 'border-box' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  padding: '0.55rem 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxSizing: 'border-box',
                }}
              >
                <span>{link.name}</span>
                <span style={{ color: '#38bdf8', opacity: 0.5, fontSize: '0.8rem' }}>→</span>
              </a>
            ))}
            <a
              href="https://www.sympla.com.br/evento/facom-techweek/3599637"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary"
              style={{
                marginTop: '0.75rem',
                width: '100%',
                padding: '0.85rem',
                borderRadius: '0.75rem',
                textDecoration: 'none',
                display: 'inline-flex',
                justifyContent: 'center',
                fontSize: '0.95rem',
                fontWeight: 700,
                boxSizing: 'border-box',
              }}
            >
              <span>Garantir Minha Vaga</span>
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 1180px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 1179px) {
          header {
            width: 100% !important;
            max-width: 100% !important;
            left: 0 !important;
            right: 0 !important;
            box-sizing: border-box !important;
          }
          .desktop-nav {
            display: none !important;
          }
          .desktop-actions {
            display: none !important;
          }
          .nav-container {
            height: 68px !important;
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }
          .navbar-brand-logo {
            height: 36px !important;
            max-width: calc(100% - 60px) !important;
            object-fit: contain !important;
          }
          .mobile-menu-btn {
            display: inline-flex !important;
            flex-shrink: 0 !important;
          }
        }
        @media (max-width: 480px) {
          .nav-container {
            padding-left: 0.85rem !important;
            padding-right: 0.85rem !important;
          }
          .navbar-brand-logo {
            height: 32px !important;
          }
        }
      `}</style>
    </header>
  );
}
