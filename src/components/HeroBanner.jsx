import React from 'react';
import MascotDuo from './MascotDuo.jsx';

export default function HeroBanner({ onOpenModal }) {
  return (
    <section
      id="inicio"
      style={{
        position: 'relative',
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '110px',
        paddingBottom: '60px',
        overflow: 'hidden',
        background:
          'radial-gradient(circle at 18% 35%, rgba(0, 112, 243, 0.22) 0%, transparent 48%), radial-gradient(circle at 82% 55%, rgba(121, 40, 202, 0.22) 0%, transparent 48%), #040714',
      }}
    >
      {/* Background Subtle Texture */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/bg-banner.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.38,
          zIndex: 1,
        }}
      />

      {/* Grid Pattern Texture */}
      <div
        className="bg-grid-pattern"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.45,
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Hero Content Container */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Logo Banner, Event Date below Logo, CTAs */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              alignItems: 'flex-start',
            }}
            className="hero-left"
          >
            {/* Logo Banner */}
            <div
              style={{
                width: '100%',
                maxWidth: '520px',
              }}
            >
              <img
                src="/logo-banner.png"
                alt="FACOM TECH WEEK"
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  height: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>

            {/* Event Date Text Directly Below Logo */}
            <p
              style={{
                fontSize: 'clamp(0.85rem, 1.4vw, 1.05rem)',
                fontWeight: 700,
                color: '#ffffff',
                fontFamily: 'var(--font-heading)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              DE 21 A 24 DE OUTUBRO DE 2026 • FACOM / UFU
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                paddingTop: '0.5rem',
              }}
            >
              {/* White button with dark blue text */}
              <button
                onClick={onOpenModal}
                style={{
                  background: '#ffffff',
                  color: '#060d24',
                  fontSize: '1rem',
                  fontWeight: 700,
                  padding: '0.9rem 2.2rem',
                  borderRadius: '0.65rem',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(255, 255, 255, 0.25)',
                  transition: 'all 0.25s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                className="hero-btn-white"
              >
                <span>Inscreva-se</span>
              </button>

              {/* Dark blue button with white text */}
              <a
                href="#programacao"
                style={{
                  background: '#0c183a',
                  color: '#ffffff',
                  fontSize: '1rem',
                  fontWeight: 600,
                  padding: '0.9rem 1.9rem',
                  borderRadius: '0.65rem',
                  border: '1px solid rgba(59, 130, 246, 0.35)',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                className="hero-btn-darkblue"
              >
                <span>Ver Programação</span>
              </a>
            </div>
          </div>

          {/* Right Column: Notebook Banner Image with Mascots Waving in front */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="hero-right"
          >
            <div
              style={{
                position: 'relative',
                zIndex: 5,
                width: '100%',
                maxWidth: '580px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {/* Notebook Banner */}
              <img
                src="/notebook-banner.png"
                alt="Notebook FACOM Tech Week"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />

              {/* Teko & Weeka Mascots Waving in Front (Corner Placement) */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-55px',
                  right: '-45px',
                  zIndex: 10,
                  width: '360px',
                }}
                className="mascots-wrapper"
              >
                <MascotDuo />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-btn-white:hover {
          background: #f1f5f9 !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 255, 255, 0.4) !important;
        }
        .hero-btn-darkblue:hover {
          background: #12224d !important;
          border-color: rgba(0, 210, 255, 0.6) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 210, 255, 0.2) !important;
        }
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 2.5rem !important;
          }
          .hero-left {
            align-items: center !important;
            text-align: center;
          }
          .mascots-wrapper {
            right: 50% !important;
            transform: translateX(50%) !important;
            width: 260px !important;
            bottom: -25px !important;
          }
        }
      `}</style>
    </section>
  );
}
