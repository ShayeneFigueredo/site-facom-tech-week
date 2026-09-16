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
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: isScrolled
          ? 'rgba(6, 8, 20, 0.92)'
          : 'rgba(6, 8, 20, 0.6)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: isScrolled
          ? '1px solid rgba(139, 92, 246, 0.15)'
          : '1px solid transparent',
        boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.6)' : 'none',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '76px',
        }}
      >
        {/* Brand / Logo */}
        <a
          href="#inicio"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
          }}
        >
          <img
            src="/logo-tw.png"
            alt="FACOM Tech Week"
            style={{
              height: '46px',
              width: 'auto',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </a>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'none',
            gap: '1.75rem',
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
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#60a5fa')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1rem',
          }}
          className="desktop-actions"
        >
          <a
            href="#ingressos"
            className="btn-primary"
            style={{
              padding: '0.65rem 1.6rem',
              fontSize: '0.9rem',
              borderRadius: '9999px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            <span>Inscreva-se</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir Menu"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(139, 92, 246, 0.2)',
            borderRadius: '0.5rem',
            padding: '0.5rem',
            color: '#ffffff',
            cursor: 'pointer',
          }}
          className="mobile-menu-btn"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(6, 8, 20, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(139, 92, 246, 0.2)',
            padding: '1.5rem',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '1.05rem',
                  fontWeight: 500,
                  padding: '0.5rem 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#ingressos"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary"
              style={{
                marginTop: '0.5rem',
                width: '100%',
                padding: '0.85rem',
                borderRadius: '0.75rem',
                textDecoration: 'none',
                display: 'inline-flex',
                justifyContent: 'center',
              }}
            >
              <span>Garantir Minha Vaga</span>
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
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
      `}</style>
    </header>
  );
}
