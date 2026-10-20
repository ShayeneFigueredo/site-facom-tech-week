import React from 'react';
import {
  Smartphone,
  ExternalLink,
  Mail,
  Calendar,
  Sparkles,
  CheckCircle2,
  BookOpen,
  Ticket,
  ArrowRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export default function AppSection() {
  const appUrl = 'https://techweek.dacompufu.com.br';

  const features = [
    {
      icon: <BookOpen size={20} color="#00d2ff" />,
      title: 'Inscrição em Palestras & Minicursos',
      description:
        'As oficinas práticas e laboratórios possuem capacidade limitada. Garanta seu lugar com antecedência para não perder nenhuma atividade.',
    },
    {
      icon: <Calendar size={20} color="#38bdf8" />,
      title: 'Grade Pessoal & Cronograma',
      description:
        'Monte seu itinerário personalizado para a semana, acompanhe os horários, salas e receba avisos em tempo real.',
    },
    {
      icon: <CheckCircle2 size={20} color="#a855f7" />,
      title: 'Presença & Certificados Oficiais',
      description:
        'Validação ágil de presença pelo próprio aplicativo para a emissão de certificados de horas complementares pela FACOM / UFU.',
    },
  ];

  return (
    <section
      id="aplicativo"
      style={{
        padding: '6.5rem 0',
        position: 'relative',
        background:
          'radial-gradient(circle at 18% 25%, rgba(0, 112, 243, 0.18) 0%, transparent 45%), radial-gradient(circle at 82% 75%, rgba(147, 51, 234, 0.18) 0%, transparent 45%), #040715',
        overflow: 'hidden',
      }}
    >
      {/* Anchor for backward compatibility if palestrantes was linked */}
      <span id="palestrantes" style={{ position: 'absolute', top: 0, left: 0, opacity: 0, pointerEvents: 'none' }} />

      {/* Background Matrix Grid */}
      <div
        className="bg-grid-pattern"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.35,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="app-section-grid">
          {/* Left Column: Information & Actions */}
          <div className="app-content-col">
            {/* Badge Tag */}
            <div style={{ marginBottom: '1rem' }}>
              <span className="badge-tag">
                <Smartphone size={13} style={{ marginRight: '6px' }} />
                PLATAFORMA OFICIAL DO CONGRESSISTA
              </span>
            </div>

            {/* Section Title */}
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                fontWeight: 900,
                color: '#ffffff',
                fontFamily: 'var(--font-heading)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                lineHeight: 1.15,
                margin: '0 0 1rem 0',
              }}
            >
              APLICATIVO <span className="gradient-text-tw">TECHWEEK</span>
            </h2>

            {/* Lead description */}
            <p
              style={{
                fontSize: '1.02rem',
                color: '#cbd5e1',
                lineHeight: 1.6,
                marginBottom: '1.75rem',
                maxWidth: '560px',
              }}
            >
              O hub central da sua jornada na FACOM TechWeek. Uma plataforma pensada especialmente
              para você organizar seus dias, escolher seus minicursos e aproveitar ao máximo cada momento do evento.
            </p>

            {/* Highlighted Sympla Email Access Notice */}
            <div className="sympla-access-card">
              <div className="sympla-card-glow" />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.6rem' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(0, 210, 255, 0.15)',
                      border: '1px solid rgba(0, 210, 255, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={16} color="#00d2ff" />
                  </div>
                  <div>
                    <span
                      style={{
                        display: 'inline-block',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#00d2ff',
                        background: 'rgba(0, 210, 255, 0.12)',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '4px',
                      }}
                    >
                      Acesso Obrigatório
                    </span>
                    <h3
                      style={{
                        fontSize: '0.98rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        margin: 0,
                        textTransform: 'none',
                        letterSpacing: 'normal',
                      }}
                    >
                      Use o mesmo e-mail do seu ingresso Sympla
                    </h3>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: '0.88rem',
                    color: '#94a3b8',
                    lineHeight: 1.5,
                    margin: '0 0 0.85rem 0',
                  }}
                >
                  Para liberar o acesso e realizar sua inscrição nas palestras e minicursos, faça login no aplicativo
                  utilizando <strong style={{ color: '#38bdf8' }}>exatamente o mesmo e-mail</strong> cadastrado na compra do seu ingresso no Sympla.
                </p>

                <div className="sympla-tags-row">
                  <span className="sympla-badge-pill">
                    <CheckCircle2 size={12} color="#38bdf8" />
                    Validação automática
                  </span>
                  <span className="sympla-badge-pill">
                    <Ticket size={12} color="#c084fc" />
                    Vínculo direto com seu ingresso
                  </span>
                  <span className="sympla-badge-pill">
                    <Zap size={12} color="#facc15" />
                    Vagas imediatas
                  </span>
                </div>
              </div>
            </div>

            {/* Feature Points */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.2rem' }}>
              {features.map((feature, idx) => (
                <div key={idx} className="app-feature-row">
                  <div className="app-feature-icon-wrap">{feature.icon}</div>
                  <div>
                    <h4
                      style={{
                        fontSize: '0.92rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        marginBottom: '0.2rem',
                        textTransform: 'none',
                        letterSpacing: 'normal',
                      }}
                    >
                      {feature.title}
                    </h4>
                    <p
                      style={{
                        fontSize: '0.82rem',
                        color: '#94a3b8',
                        lineHeight: 1.45,
                        margin: 0,
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="app-cta-container">
              <a
                href={appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary app-main-button"
              >
                <Sparkles size={18} />
                <span>Acessar Aplicativo TechWeek</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Right Column: Realistic Smartphone Mockup */}
          <div className="app-mockup-col">
            <div className="phone-mockup-wrapper">
              {/* Atmospheric Glow behind the phone */}
              <div className="phone-ambient-glow" />

              {/* Floating Badge Top Right */}
              <div className="phone-floating-chip chip-top">
                <span className="pulse-green-dot" />
                <span>Inscrições Abertas</span>
              </div>

              {/* Floating Badge Bottom Left */}
              <div className="phone-floating-chip chip-bottom">
                <Smartphone size={14} color="#00d2ff" />
                <span>Web App Oficial • PWA</span>
              </div>

              {/* Phone Chassis */}
              <div className="phone-frame">
                {/* Physical side button notches */}
                <div className="phone-button phone-button-vol-up" />
                <div className="phone-button phone-button-vol-down" />
                <div className="phone-button phone-button-power" />

                {/* Inner Screen */}
                <div className="phone-screen">
                  {/* Dynamic Island Pill Notch */}
                  <div className="phone-island">
                    <div className="phone-camera-lens" />
                  </div>

                  {/* App Screen Capture */}
                  <img
                    src="/tela-app.PNG"
                    alt="Interface do Aplicativo TechWeek"
                    className="phone-screen-img"
                    loading="lazy"
                  />

                  {/* Glass Glare Overlay */}
                  <div className="phone-glare" />

                  {/* Home Swipe Indicator */}
                  <div className="phone-home-bar" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .app-section-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 3.5rem;
          align-items: center;
        }

        .sympla-access-card {
          position: relative;
          background: rgba(11, 20, 48, 0.7);
          border: 1px solid rgba(56, 189, 248, 0.35);
          border-radius: 1.15rem;
          padding: 1.35rem 1.45rem;
          margin-bottom: 2rem;
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow: 0 10px 30px -10px rgba(0, 112, 243, 0.25);
          overflow: hidden;
        }

        .sympla-card-glow {
          position: absolute;
          top: -30px;
          right: -30px;
          width: 140px;
          height: 140px;
          background: radial-gradient(circle, rgba(0, 210, 255, 0.25) 0%, transparent 70%);
          pointer-events: none;
        }

        .sympla-tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .sympla-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 9999px;
          padding: 0.25rem 0.65rem;
          font-size: 0.74rem;
          font-weight: 500;
          color: #e2e8f0;
        }

        .app-feature-row {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
        }

        .app-feature-icon-wrap {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(56, 189, 248, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .app-cta-container {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          align-items: flex-start;
        }

        .app-main-button {
          padding: 0.9rem 2rem !important;
          font-size: 0.98rem !important;
          border-radius: 0.75rem !important;
          gap: 0.65rem !important;
          box-shadow: 0 8px 25px rgba(0, 112, 243, 0.45) !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }

        .app-main-button:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 12px 35px rgba(0, 153, 255, 0.6) !important;
        }

        .app-platform-hint {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: #94a3b8;
        }

        .live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 8px #22c55e;
          flex-shrink: 0;
        }

        /* Mockup Styles */
        .app-mockup-col {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .phone-mockup-wrapper {
          position: relative;
          display: inline-block;
          animation: floatPhone 6s ease-in-out infinite;
        }

        .phone-ambient-glow {
          position: absolute;
          inset: -40px;
          background: radial-gradient(circle at 50% 50%, rgba(0, 153, 255, 0.28) 0%, rgba(147, 51, 234, 0.2) 45%, transparent 70%);
          filter: blur(40px);
          z-index: 1;
          pointer-events: none;
          animation: pulseGlow 5s ease-in-out infinite;
        }

        .phone-frame {
          position: relative;
          z-index: 5;
          width: clamp(275px, 28vw, 315px);
          aspect-ratio: 1284 / 2778;
          background: linear-gradient(145deg, #2a334e 0%, #0d1326 50%, #1a2238 100%);
          border-radius: 46px;
          padding: 9px;
          box-sizing: border-box;
          box-shadow:
            0 0 0 1px rgba(255, 255, 255, 0.14),
            0 0 0 3px rgba(15, 23, 42, 0.9),
            0 25px 60px -15px rgba(0, 112, 243, 0.5),
            0 0 70px rgba(121, 40, 202, 0.3);
        }

        /* Side physical button accents */
        .phone-button {
          position: absolute;
          background: #334155;
          z-index: 4;
        }
        .phone-button-vol-up {
          left: -3px;
          top: 100px;
          width: 3px;
          height: 38px;
          border-radius: 3px 0 0 3px;
        }
        .phone-button-vol-down {
          left: -3px;
          top: 148px;
          width: 3px;
          height: 38px;
          border-radius: 3px 0 0 3px;
        }
        .phone-button-power {
          right: -3px;
          top: 125px;
          width: 3px;
          height: 52px;
          border-radius: 0 3px 3px 0;
        }

        .phone-screen {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 38px;
          overflow: hidden;
          background: #000000;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
        }

        .phone-island {
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 84px;
          height: 22px;
          background: #000000;
          border-radius: 16px;
          z-index: 15;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 0 9px;
          box-shadow: 0 0 2px rgba(255, 255, 255, 0.15);
        }

        .phone-camera-lens {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #091326;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .phone-screen-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .phone-glare {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.13) 0%, rgba(255, 255, 255, 0.02) 36%, transparent 60%);
          pointer-events: none;
          z-index: 10;
        }

        .phone-home-bar {
          position: absolute;
          bottom: 7px;
          left: 50%;
          transform: translateX(-50%);
          width: 105px;
          height: 4px;
          background: rgba(255, 255, 255, 0.55);
          border-radius: 4px;
          z-index: 15;
        }

        /* Floating chips around mockup */
        .phone-floating-chip {
          position: absolute;
          z-index: 20;
          background: rgba(10, 18, 44, 0.88);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(56, 189, 248, 0.35);
          border-radius: 9999px;
          padding: 0.45rem 0.95rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.78rem;
          font-weight: 600;
          color: #ffffff;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 153, 255, 0.2);
          white-space: nowrap;
          pointer-events: none;
        }

        .chip-top {
          top: 8%;
          right: -25px;
        }

        .chip-bottom {
          bottom: 8%;
          left: -30px;
        }

        .pulse-green-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 8px #22c55e;
          animation: pulseDot 2s infinite;
        }

        @keyframes floatPhone {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.45;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.06);
          }
        }

        @keyframes pulseDot {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.4);
            opacity: 0.7;
          }
        }

        /* Responsive Breakpoints */
        @media (max-width: 960px) {
          #aplicativo {
            padding: 4.5rem 0 !important;
          }
          .app-section-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }
          .app-content-col {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .sympla-access-card {
            text-align: left;
            width: 100%;
            box-sizing: border-box;
          }
          .app-feature-row {
            text-align: left;
          }
          .app-cta-container {
            align-items: center;
            width: 100%;
          }
          .app-main-button {
            width: 100%;
            max-width: 380px;
            box-sizing: border-box;
          }
          .chip-top {
            right: 0;
          }
          .chip-bottom {
            left: 0;
          }
        }

        @media (max-width: 540px) {
          .phone-frame {
            width: 260px;
          }
          .chip-top {
            top: 2%;
            right: -10px;
            font-size: 0.72rem;
            padding: 0.35rem 0.75rem;
          }
          .chip-bottom {
            bottom: 2%;
            left: -10px;
            font-size: 0.72rem;
            padding: 0.35rem 0.75rem;
          }
          .sympla-tags-row {
            justify-content: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
