import React, { useState, useRef } from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import MascotDuo from './MascotDuo.jsx';
import ParticleBackground from './ParticleBackground.jsx';
import PartnersBar from './PartnersBar.jsx';

export default function HeroBanner({ onOpenModal }) {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -2000, y: -2000 });
  const [mascotHovered, setMascotHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -2000, y: -2000 });
    setMascotHovered(false);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      id="inicio"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '110px',
        paddingBottom: '40px',
        overflow: 'hidden',
        background: '#0A0F1A',
        userSelect: 'none',
      }}
    >
      {/* 3D Elevated Antigravity Particle Background with Interactive Mouse Lift */}
      <ParticleBackground />

      {/* Volumetric Soft Aura Glow */}
      <div
        style={{
          position: 'absolute',
          top: '25%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(820px, 90vw)',
          height: 'min(500px, 55vh)',
          background:
            'radial-gradient(circle at 50% 50%, rgba(0, 210, 255, 0.28) 0%, rgba(147, 51, 234, 0.22) 42%, rgba(5, 8, 22, 0) 78%)',
          filter: 'blur(110px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Main Container */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '1280px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '2.5rem',
        }}
      >
        {/* ===================================================================
            HEADER HUB: LOGO DA FACOM MONUMENTAL
            =================================================================== */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginTop: '1rem',
            marginBottom: '0.5rem',
          }}
        >
          {/* Central FACOM TECHWEEK Logo */}
          <div
            style={{
              position: 'relative',
              zIndex: 5,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src="/logo-banner.png"
              alt="FACOM TECHWEEK 2026"
              style={{
                width: '100%',
                maxWidth: '480px',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
                filter:
                  'drop-shadow(0 0 50px rgba(0, 210, 255, 0.5)) drop-shadow(0 0 90px rgba(147, 51, 234, 0.4)) drop-shadow(0 20px 40px rgba(0,0,0,0.95))',
                transition: 'transform 0.4s ease',
              }}
              className="monumental-apex-logo"
            />
          </div>
        </div>

        {/* MENSAGEM & INFORMAÇÕES ESSENCIAIS */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.25rem',
            maxWidth: '780px',
          }}
        >
          {/* Status Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.45rem 1.15rem',
              borderRadius: '9999px',
              background: 'rgba(0, 210, 255, 0.1)',
              border: '1px solid rgba(0, 210, 255, 0.35)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 0 20px rgba(0, 210, 255, 0.2)',
            }}
          >
            <Zap size={14} color="#00d2ff" />
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              FACOM TECHWEEK // NÚCLEO DE INOVAÇÃO 2026
            </span>
          </div>

          {/* Slogan e Datas Principais */}
          <h2
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
              fontWeight: 700,
              color: '#f1f5f9',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              margin: 0,
              lineHeight: 1.5,
              opacity: 0.95,
            }}
          >
            DE 21 A 24 DE OUTUBRO DE 2026 • CAMPUS SANTA MÔNICA • FACOM / UFU
          </h2>

          <p
            style={{
              fontSize: 'clamp(0.9rem, 1.2vw, 1.02rem)',
              color: '#94a3b8',
              margin: 0,
              lineHeight: 1.6,
              maxWidth: '640px',
            }}
          >
            Conectando mentes brilhantes através de palestras, minicursos, workshops, hackathon, recrutamento e networking na maior semana de tecnologia da UFU.
          </p>

          {/* Botões de Ação CTAs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.25rem',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: '0.75rem',
            }}
          >
            <button
              onClick={onOpenModal}
              style={{
                background: '#ffffff',
                color: '#060d24',
                fontSize: '1.05rem',
                fontWeight: 800,
                padding: '1rem 2.6rem',
                borderRadius: '0.75rem',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 10px 35px rgba(0, 210, 255, 0.35), 0 0 25px rgba(255, 255, 255, 0.3)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                fontFamily: 'var(--font-heading)',
              }}
              className="monumental-btn-primary"
            >
              <span>Garantir Ingresso</span>
              <ArrowRight size={18} />
            </button>

            <a
              href="#programacao"
              style={{
                background: 'rgba(14, 22, 52, 0.75)',
                color: '#ffffff',
                fontSize: '1.05rem',
                fontWeight: 600,
                padding: '1rem 2.3rem',
                borderRadius: '0.75rem',
                border: '1px solid rgba(0, 210, 255, 0.3)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-heading)',
              }}
              className="monumental-btn-secondary"
            >
              <span>Ver Programação</span>
            </a>
          </div>
        </div>

        {/* ===================================================================
            OS BONECOS (MASCOTES TEKO & WEEKA): INTERAÇÃO DE PISCAR
            =================================================================== */}
        <div
          onMouseEnter={() => setMascotHovered(true)}
          onMouseLeave={() => setMascotHovered(false)}
          onMouseMove={() => !mascotHovered && setMascotHovered(true)}
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '0.5rem',
            width: '100%',
            maxWidth: '460px',
            cursor: 'pointer',
          }}
          className="monumental-mascot-base"
        >
          <div
            style={{
              width: '100%',
              maxWidth: '440px',
              filter: 'drop-shadow(0 15px 35px rgba(0, 0, 0, 0.8))',
              transform: mascotHovered ? 'scale(1.04) translateY(-4px)' : 'scale(1) translateY(0)',
              transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              animation: 'monumentalMascotIdle 6s ease-in-out infinite',
            }}
          >
            <MascotDuo isHovered={mascotHovered} />
          </div>
        </div>

        {/* ===================================================================
            PATROCINADORES NO MESMO FUNDO CONTÍNUO (SEM DIVISÃO DE ÁREAS)
            =================================================================== */}
        <PartnersBar />
      </div>

      <style>{`
        @keyframes monumentalMascotIdle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .monumental-btn-primary:hover {
          background: #ffffff !important;
          color: #060d24 !important;
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 14px 40px rgba(0, 210, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.45) !important;
        }

        .monumental-btn-secondary:hover {
          background: rgba(22, 34, 72, 0.9) !important;
          border-color: rgba(0, 210, 255, 0.7) !important;
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 12px 35px rgba(0, 210, 255, 0.3) !important;
        }

        @media (max-width: 768px) {
          .monumental-apex-logo {
            max-width: 340px !important;
          }
          .monumental-mascot-base {
            max-width: 360px !important;
          }
        }
      `}</style>
    </section>
  );
}
