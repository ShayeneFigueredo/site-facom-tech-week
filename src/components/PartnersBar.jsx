import React from 'react';

export default function PartnersBar() {
  const sponsors = [
    {
      name: 'Kanastra',
      logo: '/patrocinadores/Kanastra-Logo-Edited.png',
      description: 'Infraestrutura tecnológica completa para o mercado financeiro.',
      isWhite: true,
      logoHeight: '34px',
      tier: 'Diamante',
      tierColor: '#00f0ff',
      tierBorder: 'rgba(0, 240, 255, 0.6)',
      tierGlow: '0 0 20px rgba(0, 240, 255, 0.35)',
      hoverBorderColor: 'rgba(0, 240, 255, 0.85)',
      hoverBoxShadow: '0 22px 45px -10px rgba(0, 240, 255, 0.4), 0 0 30px rgba(0, 240, 255, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.4)',
      hoverBackground: 'rgba(12, 30, 60, 0.75)',
    },
    {
      name: 'Bayer',
      logo: '/patrocinadores/LogoBayer.png',
      description: 'Líder global em biotecnologia, agro e inovação digital.',
      isWhite: false,
      logoHeight: '52px',
      tier: 'Ouro',
      tierColor: '#fbbf24',
      tierBorder: 'rgba(251, 191, 36, 0.6)',
      tierGlow: '0 0 20px rgba(251, 191, 36, 0.35)',
      hoverBorderColor: 'rgba(251, 191, 36, 0.85)',
      hoverBoxShadow: '0 22px 45px -10px rgba(251, 191, 36, 0.4), 0 0 30px rgba(251, 191, 36, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.4)',
      hoverBackground: 'rgba(42, 32, 16, 0.75)',
    },
    {
      name: 'Aimirim',
      logo: '/patrocinadores/aimirim-logo.png',
      description: 'Inteligência Artificial e automação avançada para a indústria.',
      isWhite: true,
      logoHeight: '38px',
      tier: 'Prata',
      tierColor: '#ffffff',
      tierBorder: 'rgba(241, 245, 249, 0.75)',
      tierGlow: '0 0 22px rgba(241, 245, 249, 0.5)',
      hoverBorderColor: 'rgba(241, 245, 249, 0.9)',
      hoverBoxShadow: '0 22px 45px -10px rgba(241, 245, 249, 0.45), 0 0 30px rgba(255, 255, 255, 0.35), inset 0 1px 2px rgba(255, 255, 255, 0.5)',
      hoverBackground: 'rgba(30, 41, 59, 0.8)',
    },
    {
      name: 'BIP Consulting',
      logo: '/patrocinadores/logo-bip-consulting-white.png',
      description: 'Consultoria global em transformação digital e estratégia tech.',
      isWhite: false,
      logoHeight: '42px',
      tier: 'Prata',
      tierColor: '#ffffff',
      tierBorder: 'rgba(241, 245, 249, 0.75)',
      tierGlow: '0 0 22px rgba(241, 245, 249, 0.5)',
      hoverBorderColor: 'rgba(241, 245, 249, 0.9)',
      hoverBoxShadow: '0 22px 45px -10px rgba(241, 245, 249, 0.45), 0 0 30px rgba(255, 255, 255, 0.35), inset 0 1px 2px rgba(255, 255, 255, 0.5)',
      hoverBackground: 'rgba(30, 41, 59, 0.8)',
    },
    {
      name: 'Hyperflow',
      logo: '/patrocinadores/hyperflow-logo-secundario.png',
      description: 'Plataforma avançada de automação inteligente e fluxos de IA.',
      isWhite: false,
      logoHeight: '44px',
      tier: 'Prata',
      tierColor: '#ffffff',
      tierBorder: 'rgba(241, 245, 249, 0.75)',
      tierGlow: '0 0 22px rgba(241, 245, 249, 0.5)',
      hoverBorderColor: 'rgba(241, 245, 249, 0.9)',
      hoverBoxShadow: '0 22px 45px -10px rgba(241, 245, 249, 0.45), 0 0 30px rgba(255, 255, 255, 0.35), inset 0 1px 2px rgba(255, 255, 255, 0.5)',
      hoverBackground: 'rgba(30, 41, 59, 0.8)',
    },
  ];

  return (
    <div
      id="patrocinadores"
      style={{
        width: '100%',
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '0.75rem 0.5rem 0.5rem 0.5rem',
        position: 'relative',
        zIndex: 20,
      }}
    >
      {/* Header Badge */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '1.25rem',
        }}
      >
        <div
          style={{
            height: '1px',
            width: '45px',
            background: 'linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.5))',
          }}
        />
        <span
          style={{
            color: '#38bdf8',
            fontFamily: 'var(--font-heading)',
            fontSize: '0.75rem',
            fontWeight: 800,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            textShadow: '0 0 12px rgba(56, 189, 248, 0.6)',
          }}
        >
          Patrocinadores Oficiais // FACOM Tech Week
        </span>
        <div
          style={{
            height: '1px',
            width: '45px',
            background: 'linear-gradient(90deg, rgba(56, 189, 248, 0.5), transparent)',
          }}
        />
      </div>

      {/* Grid de Cards dos Patrocinadores */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
          gap: '1rem',
          width: '100%',
          alignItems: 'stretch',
        }}
        className="sponsors-grid"
      >
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.name}
            className="sponsor-card-neo"
            style={{
              '--hover-border': sponsor.hoverBorderColor,
              '--hover-shadow': sponsor.hoverBoxShadow,
              '--hover-bg': sponsor.hoverBackground,
              '--tier-color': sponsor.tierColor,
              position: 'relative',
              background: 'rgba(9, 14, 34, 0.75)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderRadius: '1rem',
              padding: '1.25rem 1rem 1rem 1rem',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)',
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              overflow: 'hidden',
              cursor: 'default',
            }}
          >
            {/* Top Tier Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.2rem 0.65rem',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: `1px solid ${sponsor.tierBorder}`,
                boxShadow: sponsor.tierGlow,
                marginBottom: '1rem',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: sponsor.tierColor,
                  boxShadow: `0 0 8px ${sponsor.tierColor}`,
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  fontSize: '0.62rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                  color: sponsor.tierColor,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                {sponsor.tier}
              </span>
            </div>

            {/* Logo Area */}
            <div
              style={{
                height: '56px',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.75rem',
              }}
            >
              <img
                src={sponsor.logo}
                alt={`Logo ${sponsor.name}`}
                style={{
                  maxHeight: sponsor.logoHeight,
                  maxWidth: '85%',
                  objectFit: 'contain',
                  filter: sponsor.isWhite
                    ? 'brightness(0) invert(1) drop-shadow(0 0 10px rgba(255, 255, 255, 0.4))'
                    : 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.2))',
                  transition: 'transform 0.3s ease',
                }}
                className="sponsor-logo-img"
              />
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: '0.78rem',
                color: '#94a3b8',
                lineHeight: 1.45,
                margin: 0,
                fontWeight: 400,
              }}
            >
              {sponsor.description}
            </p>

            {/* Subtle Bottom Glow Line */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: '20%',
                right: '20%',
                height: '1px',
                background: `linear-gradient(90deg, transparent, ${sponsor.tierColor}, transparent)`,
                opacity: 0.4,
              }}
            />
          </div>
        ))}
      </div>

      <style>{`
        .sponsor-card-neo:hover {
          transform: translateY(-5px);
          border-color: var(--hover-border) !important;
          box-shadow: var(--hover-shadow) !important;
          background: var(--hover-bg) !important;
        }

        .sponsor-card-neo:hover .sponsor-logo-img {
          transform: scale(1.06);
        }

        @media (max-width: 992px) {
          .sponsors-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 0.85rem !important;
          }
        }

        @media (max-width: 768px) {
          .sponsors-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.75rem !important;
          }
        }

        @media (max-width: 576px) {
          .sponsors-grid {
            grid-template-columns: 1fr !important;
            max-width: 320px;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
}
