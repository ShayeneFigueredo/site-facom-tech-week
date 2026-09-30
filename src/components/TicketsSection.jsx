import React, { useState, useEffect } from 'react';
import { Terminal, ExternalLink, ShieldCheck, Sparkles, ArrowLeft, Zap, Shirt, ShoppingBag } from 'lucide-react';

export default function TicketsSection({
  onOpenModal,
  symplaUrl = 'https://www.sympla.com.br/evento/facom-techweek/3599637',
}) {
  // Profiles configuration
  const profiles = [
    {
      id: 'facom',
      label: 'Aluno FACOM (UFU)',
      displayTitle: 'Ingresso Aluno FACOM: R$ 40,00*',
      price: 40,
      priceFormatted: 'R$ 40,00*',
      motivationalText: 'O valor do seu ingresso é subsidiado pela faculdade. Aproveite!',
      accentColor: '#00d2ff',
    },
    {
      id: 'ufu_prof',
      label: 'Aluno UFU (outros cursos) ou Professor',
      displayTitle: 'Ingresso Acadêmico: R$ 50,00*',
      price: 50,
      priceFormatted: 'R$ 50,00*',
      motivationalText: 'Incentivamos a participação de toda a comunidade acadêmica por isso subsidiamos parte do seu ingresso. Bem-vindo!',
      accentColor: '#38bdf8',
    },
    {
      id: 'comunidade',
      label: 'Comunidade',
      displayTitle: 'Ingresso Comunidade: R$ 60,00*',
      price: 60,
      priceFormatted: 'R$ 60,00*',
      motivationalText: 'Sua participação apoia e fortalece a cena de tecnologia local. Obrigado!',
      accentColor: '#c084fc',
    },
  ];

  const benefits = [
    'Acesso a todas as palestras e workshops.',
    'Oportunidades de networking com empresas e palestrantes.',
    'Certificado de participação digital (SIEX/UFU - 40h).',
    'Kit de Boas-Vindas do Evento.',
  ];

  // Selected Profile state
  const [selectedProfileId, setSelectedProfileId] = useState(null);
  const [glitchPriceText, setGlitchPriceText] = useState('');

  const selectedProfile = profiles.find((p) => p.id === selectedProfileId);

  // Price Glitch / Terminal Ticker effect when profile is selected (~450ms smooth ticker)
  useEffect(() => {
    if (!selectedProfile) {
      setGlitchPriceText('');
      return;
    }

    let frame = 0;
    const maxFrames = 18;
    const targetPrice = selectedProfile.price;

    const ticker = setInterval(() => {
      frame++;
      if (frame >= maxFrames) {
        setGlitchPriceText(`R$ ${targetPrice},00*`);
        clearInterval(ticker);
      } else {
        const randomNum = Math.floor(Math.random() * 70) + 20;
        setGlitchPriceText(`R$ ${randomNum},00*`);
      }
    }, 25);

    return () => clearInterval(ticker);
  }, [selectedProfileId]);

  const handleCheckout = () => {
    if (symplaUrl) {
      window.open(symplaUrl, '_blank', 'noopener,noreferrer');
    }
  };

  // Helper to render title with small superscript asterisk
  const renderFormattedTitle = (titleText) => {
    if (!titleText) return null;
    if (titleText.endsWith('*')) {
      const base = titleText.slice(0, -1);
      return (
        <>
          {base}
          <span style={{ fontSize: '0.55em', verticalAlign: 'super', opacity: 0.85, marginLeft: '2px' }}>
            *
          </span>
        </>
      );
    }
    return titleText;
  };

  return (
    <section
      id="ingressos"
      style={{
        padding: '6.5rem 0',
        position: 'relative',
        background:
          'radial-gradient(circle at 20% 30%, rgba(0, 210, 255, 0.18) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.22) 0%, transparent 50%), #050816',
        borderTop: '1px solid rgba(168, 85, 247, 0.35)',
        borderBottom: '1px solid rgba(168, 85, 247, 0.35)',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '100%',
      }}
    >
      {/* Background Matrix Grid */}
      <div
        className="bg-grid-pattern"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.45,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1180px' }}>
        {/* Terminal Section Header */}
        <div className="section-title-wrap" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span
            className="badge-tag"
            style={{
              background: 'rgba(0, 210, 255, 0.12)',
              borderColor: '#00d2ff',
              color: '#00d2ff',
              marginBottom: '1rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.08em',
            }}
          >
            <Terminal size={14} color="#00d2ff" />
            SYS_TERMINAL // INGRESSOS_2026
          </span>
          <h2 style={{ textTransform: 'uppercase', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 800 }}>
            Interface de Entrada <span style={{ color: '#00d2ff' }}>FACOM TechWeek</span>
          </h2>
        </div>

        {/* Floating Glassmorphic Terminal HUD Container with Neon Divider */}
        <div
          style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: '1fr 1.08fr',
            borderRadius: '1.75rem',
            overflow: 'hidden',
            border: '1px solid rgba(0, 210, 255, 0.3)',
            boxShadow:
              '0 30px 70px -15px rgba(0, 0, 0, 0.95), 0 0 50px rgba(0, 210, 255, 0.18), inset 0 1px 1px rgba(255, 255, 255, 0.25)',
          }}
          className="cyber-terminal-container"
        >
          {/* Vertical Pulsing Neon Energy Line Divider */}
          <div
            style={{
              position: 'absolute',
              top: '5%',
              bottom: '5%',
              left: 'calc(48.08% - 0.5px)',
              width: '1px',
              background: 'linear-gradient(180deg, transparent, #00d2ff, #c084fc, transparent)',
              boxShadow: '0 0 12px #00d2ff, 0 0 20px #c084fc',
              zIndex: 12,
              animation: 'neonPulse 2.5s ease-in-out infinite',
              pointerEvents: 'none',
            }}
            className="hud-energy-divider"
          />

          {/* COLUNA ESQUERDA: Painel de Status (HUD - O Valor) */}
          <div
            style={{
              background: 'rgba(10, 16, 38, 0.65)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              padding: '2.8rem 2.4rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
            }}
            className="hud-status-panel"
          >
            <div>
              {/* HUD Header Status */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  paddingBottom: '0.85rem',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    fontFamily: 'var(--font-heading)',
                    margin: 0,
                  }}
                >
                  Seu Acesso Completo
                </h3>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: '#10b981',
                    background: 'rgba(16, 185, 129, 0.12)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    padding: '0.2rem 0.55rem',
                    borderRadius: '0.4rem',
                    letterSpacing: '0.06em',
                  }}
                >
                  [STATUS: VERIFIED]
                </span>
              </div>

              <p style={{ color: '#cbd5e1', fontSize: '0.96rem', marginBottom: '1.75rem', lineHeight: 1.5 }}>
                Sua inscrição na FACOM TechWeek garante:
              </p>

              {/* Checklist com SVG minimalista */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem', marginBottom: '2.2rem' }}>
                {benefits.map((benefitText, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.85rem',
                      color: '#f1f5f9',
                      fontSize: '0.96rem',
                      lineHeight: 1.45,
                    }}
                  >
                    <div
                      style={{
                        width: '22px',
                        height: '22px',
                        borderRadius: '50%',
                        background: 'rgba(0, 210, 255, 0.12)',
                        border: '1px solid rgba(0, 210, 255, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '1px',
                        boxShadow: '0 0 10px rgba(0, 210, 255, 0.2)',
                      }}
                    >
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                        <path
                          d="M1 5L4.5 8.5L11 1.5"
                          stroke="#00d2ff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="svg-draw-check"
                          style={{
                            strokeDasharray: 20,
                            strokeDashoffset: 0,
                            animation: `drawCheck 0.6s ease forwards ${idx * 0.15}s`,
                          }}
                        />
                      </svg>
                    </div>

                    <span>{benefitText}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: Painel Interativo (Terminal Flow) */}
          <div
            style={{
              background: 'rgba(12, 18, 44, 0.78)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              padding: '2.8rem 2.4rem',
              position: 'relative',
            }}
            className="hud-interactive-panel"
          >
            {/* Header do Painel Interativo */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.5rem',
                borderBottom: '1px solid rgba(0, 210, 255, 0.2)',
                paddingBottom: '0.85rem',
              }}
            >
              <h3
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  fontFamily: 'var(--font-heading)',
                  margin: 0,
                }}
              >
                Faça sua Inscrição
              </h3>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: selectedProfileId ? '#00d2ff' : '#94a3b8',
                }}
              >
                {selectedProfileId ? '[PASSO 2/2: PREÇO]' : '[PASSO 1/2: PERFIL]'}
              </span>
            </div>

            {/* PASSO 1: Quem é você? */}
            {!selectedProfileId ? (
              <div className="step-1-interactive">
                <h4
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#c084fc',
                    fontFamily: 'var(--font-heading)',
                    marginBottom: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  Passo 1: Quem é você?
                </h4>

                {/* Radio Options */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.95rem' }}>
                  {profiles.map((profile) => (
                    <label
                      key={profile.id}
                      onClick={() => setSelectedProfileId(profile.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1.15rem 1.35rem',
                        borderRadius: '1.1rem',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(192, 132, 252, 0.35)',
                        cursor: 'pointer',
                        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                      className="cyber-radio-card"
                    >
                      <input
                        type="radio"
                        name="perfil_ingresso"
                        value={profile.id}
                        onChange={() => setSelectedProfileId(profile.id)}
                        style={{ display: 'none' }}
                      />

                      {/* Custom Radio Indicator */}
                      <div
                        style={{
                          width: '22px',
                          height: '22px',
                          borderRadius: '50%',
                          border: '2px solid #c084fc',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          position: 'relative',
                          boxShadow: '0 0 10px rgba(192, 132, 252, 0.3)',
                        }}
                      >
                        <div
                          style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            background: '#c084fc',
                            boxShadow: '0 0 12px #c084fc',
                            transform: 'scale(0)',
                            transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                          }}
                          className="radio-expanding-dot"
                        />
                      </div>

                      <span
                        style={{
                          fontSize: '1.05rem',
                          fontWeight: 700,
                          color: '#e2e8f0',
                          fontFamily: 'var(--font-heading)',
                          transition: 'color 0.2s ease, text-shadow 0.2s ease',
                        }}
                        className="radio-label-text"
                      >
                        {profile.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ) : (
              /* PASSO 2: Revelação Coreografada com Preço */
              <div
                className="step-2-revealed-terminal"
                style={{
                  animation: 'terminalFadeSlide 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                }}
              >
                {/* Perfil Selecionado com Botão de Setinha de Voltar */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1.15rem',
                    borderRadius: '0.85rem',
                    background: 'rgba(0, 210, 255, 0.08)',
                    border: '1px solid rgba(0, 210, 255, 0.4)',
                    marginBottom: '1.75rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span style={{ color: '#00d2ff', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                      [PERFIL]:
                    </span>
                    <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.98rem', fontFamily: 'var(--font-heading)' }}>
                      {selectedProfile.label}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedProfileId(null)}
                    style={{
                      background: 'rgba(192, 132, 252, 0.12)',
                      border: '1px solid rgba(192, 132, 252, 0.35)',
                      borderRadius: '0.55rem',
                      color: '#c084fc',
                      padding: '0.35rem 0.65rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      transition: 'all 0.2s ease',
                    }}
                    className="btn-back-arrow"
                    title="Voltar para escolha de perfil"
                  >
                    <ArrowLeft size={14} color="#c084fc" />
                  </button>
                </div>

                <h4
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#00d2ff',
                    fontFamily: 'var(--font-heading)',
                    marginBottom: '0.85rem',
                  }}
                >
                  Passo 2: Confirme sua Inscrição
                </h4>

                <p
                  style={{
                    color: '#cbd5e1',
                    fontSize: '0.95rem',
                    margin: '0 0 1.25rem 0',
                    fontStyle: 'italic',
                    lineHeight: 1.5,
                  }}
                >
                  <em>{selectedProfile.motivationalText}</em>
                </p>

                {/* Revelação do Preço */}
                <div
                  style={{
                    background: 'rgba(6, 10, 26, 0.85)',
                    border: '1px solid rgba(0, 210, 255, 0.35)',
                    borderRadius: '1.1rem',
                    padding: '1.25rem 1.5rem',
                    marginBottom: '2rem',
                    boxShadow: '0 0 25px rgba(0, 210, 255, 0.15)',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#00d2ff',
                      display: 'block',
                      marginBottom: '0.35rem',
                      letterSpacing: '0.06em',
                    }}
                  >
                    // VALOR_CONFIRMADO:
                  </span>

                  <h2
                    style={{
                      fontSize: 'clamp(1.6rem, 2.4vw, 2.2rem)',
                      fontWeight: 900,
                      color: '#ffffff',
                      fontFamily: 'var(--font-mono)',
                      margin: 0,
                      textShadow: '0 0 20px rgba(0, 210, 255, 0.6)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {renderFormattedTitle(glitchPriceText || selectedProfile.displayTitle)}
                  </h2>
                </div>

                {/* Botão Principal com Efeito "Power Up" */}
                <button
                  onClick={handleCheckout}
                  className="btn-powerup-cta"
                  style={{
                    width: '100%',
                    padding: '1.15rem 2rem',
                    borderRadius: '1rem',
                    fontSize: '1.05rem',
                    fontWeight: 900,
                    letterSpacing: '0.04em',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    background: 'transparent',
                    border: '2px solid #00d2ff',
                    color: '#00d2ff',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    marginBottom: '1.25rem',
                    boxShadow: '0 0 15px rgba(0, 210, 255, 0.2)',
                  }}
                >
                  <span>GARANTIR INGRESSO NO SYMPLA</span>
                  <ExternalLink size={20} />
                </button>

                <p
                  style={{
                    fontSize: '0.82rem',
                    color: '#94a3b8',
                    margin: 0,
                    textAlign: 'center',
                    lineHeight: 1.5,
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  <em>
                    *Pode haver taxas da plataforma de pagamento.
                    <br />
                    Você será redirecionado para finalizar a compra de forma segura no Sympla.
                  </em>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* ============================================================== */}
        {/* BANNER ESPECIAL: CAMISETA OFICIAL (OCULTO TEMPORARIAMENTE)     */}
        {/* ============================================================== */}
        {/* 
        <div
          className="tshirt-sympla-card"
          style={{
            marginTop: '2.5rem',
            background: 'rgba(9, 14, 33, 0.65)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '1.25rem',
            padding: '1.5rem 2rem',
            boxShadow: '0 15px 35px -10px rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flex: 1 }} className="tshirt-info-wrap">
            <div
              className="tshirt-photo-frame"
              style={{
                width: '100px',
                height: '100px',
                minWidth: '100px',
                borderRadius: '0.85rem',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.35rem',
                overflow: 'hidden',
                flexShrink: 0,
              }}
            >
              <img
                src="/Camisa.png"
                alt="Camiseta Oficial FACOM TechWeek 2026"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  transition: 'transform 0.3s ease',
                  filter: 'drop-shadow(0 4px 10px rgba(0, 0, 0, 0.5))',
                }}
                className="tshirt-img-preview"
              />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    color: '#38bdf8',
                    background: 'rgba(56, 189, 248, 0.08)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '0.3rem',
                  }}
                >
                  👕 MANTO OFICIAL // SYMPLA
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: '#fbbf24',
                    background: 'rgba(251, 191, 36, 0.08)',
                    border: '1px solid rgba(251, 191, 36, 0.2)',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '0.3rem',
                  }}
                >
                  EDIÇÃO LIMITADA
                </span>
              </div>

              <h4
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  fontFamily: 'var(--font-heading)',
                  margin: '0 0 0.3rem 0',
                }}
              >
                Camiseta Oficial FACOM TechWeek 2026
              </h4>

              <p
                style={{
                  color: '#94a3b8',
                  fontSize: '0.88rem',
                  margin: 0,
                  lineHeight: 1.5,
                  maxWidth: '580px',
                }}
              >
                Disponível para compra direta no Sympla — adquira junto ao seu ingresso ou de forma avulsa para garantir o manto da edição.
              </p>
            </div>
          </div>

          <a
            href={symplaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tshirt-sympla"
            style={{
              padding: '0.75rem 1.4rem',
              borderRadius: '0.65rem',
              fontSize: '0.86rem',
              fontWeight: 700,
              fontFamily: 'var(--font-heading)',
              letterSpacing: '0.03em',
              background: 'rgba(255, 255, 255, 0.06)',
              color: '#ffffff',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.55rem',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              transition: 'all 0.25s ease',
              flexShrink: 0,
            }}
          >
            <ShoppingBag size={16} color="#38bdf8" />
            <span>COMPRAR NO SYMPLA</span>
            <ExternalLink size={14} color="#94a3b8" />
          </a>
        </div>
        */}
      </div>

      <style>{`
        @keyframes neonPulse {
          0%, 100% {
            opacity: 0.6;
            box-shadow: 0 0 8px #00d2ff, 0 0 15px #c084fc;
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 16px #00d2ff, 0 0 30px #c084fc;
          }
        }

        @keyframes drawCheck {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes terminalFadeSlide {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .cyber-radio-card:hover {
          border-color: #c084fc !important;
          background: rgba(192, 132, 252, 0.08) !important;
          box-shadow: 0 0 20px rgba(192, 132, 252, 0.25) !important;
        }

        .cyber-radio-card:hover .radio-label-text {
          color: #ffffff !important;
          text-shadow: 0 0 10px rgba(192, 132, 252, 0.6) !important;
        }

        .cyber-radio-card:hover .radio-expanding-dot {
          transform: scale(0.6) !important;
        }

        .btn-back-arrow:hover {
          background: rgba(192, 132, 252, 0.25) !important;
          border-color: #c084fc !important;
          transform: translateX(-2px);
        }

        .btn-powerup-cta:hover {
          background: linear-gradient(135deg, rgba(0, 210, 255, 0.25) 0%, rgba(5, 8, 22, 0.95) 100%) !important;
          color: #ffffff !important;
          border-color: #00d2ff !important;
          text-shadow: 0 0 12px #00d2ff !important;
          box-shadow: 0 0 35px rgba(0, 210, 255, 0.65), inset 0 1px 1px rgba(255, 255, 255, 0.4) !important;
          transform: translateY(-2px);
        }

        .tshirt-photo-frame:hover .tshirt-img-preview {
          transform: scale(1.06);
        }

        .btn-tshirt-sympla:hover {
          background: rgba(56, 189, 248, 0.15) !important;
          border-color: #38bdf8 !important;
          color: #ffffff !important;
          transform: translateY(-2px);
          box-shadow: 0 0 15px rgba(56, 189, 248, 0.25) !important;
        }

        @media (max-width: 992px) {
          .cyber-terminal-container {
            grid-template-columns: 1fr !important;
          }
          .hud-energy-divider {
            display: none !important;
          }
          .hud-status-panel, .hud-interactive-panel {
            padding: 2rem 1.5rem !important;
          }
          .tshirt-sympla-card {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 1.5rem 1.35rem !important;
            gap: 1.25rem !important;
          }
          .btn-tshirt-sympla {
            width: 100% !important;
            justify-content: center !important;
          }
        }

        @media (max-width: 640px) {
          #ingressos {
            padding: 3.5rem 0 !important;
          }
          .cyber-terminal-container {
            border-radius: 1.25rem !important;
          }
          .hud-status-panel, .hud-interactive-panel {
            padding: 1.5rem 1.15rem !important;
          }
          .tshirt-info-wrap {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 1rem !important;
          }
          .tshirt-photo-frame {
            width: 120px !important;
            height: 120px !important;
          }
          .cyber-radio-card {
            padding: 0.9rem 1rem !important;
            border-radius: 0.85rem !important;
            gap: 0.75rem !important;
          }
          .radio-label-text {
            font-size: 0.92rem !important;
          }
          .btn-powerup-cta {
            padding: 0.95rem 1.25rem !important;
            font-size: 0.92rem !important;
            letter-spacing: 0.03em !important;
          }
        }
      `}</style>
    </section>
  );
}
