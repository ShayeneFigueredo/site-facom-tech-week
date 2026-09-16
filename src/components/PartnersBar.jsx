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
      logo: '/patrocinadores/logo-bayer.webp',
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
    <section
      id="patrocinadores"
      style={{
        position: 'relative',
        zIndex: 30,
        marginTop: '0px',
        paddingTop: '30px',
        paddingBottom: '3.5rem',
      }}
    >
      <div className="container">
        {/* Sponsor Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
            rowGap: '2rem',
          }}
          className="sponsors-grid"
        >
          {sponsors.map((sponsor, idx) => (
            <div
              key={idx}
              className="sponsor-card"
              style={{
                '--hover-border': sponsor.hoverBorderColor,
                '--hover-shadow': sponsor.hoverBoxShadow,
                '--hover-bg': sponsor.hoverBackground,
                padding: '2.4rem 1.5rem 1.6rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '1.35rem',
                background: 'rgba(14, 22, 48, 0.45)',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                boxShadow:
                  '0 20px 45px -12px rgba(0, 0, 0, 0.75), inset 0 1px 1px rgba(255, 255, 255, 0.25), inset 0 -1px 1px rgba(0, 0, 0, 0.4)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                position: 'relative',
                minHeight: '260px',
              }}
            >
              {/* Tipo de Patrocinador - Saltando para fora na parte superior */}
              <div
                style={{
                  position: 'absolute',
                  top: '-16px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.38rem 1.25rem',
                  borderRadius: '0.65rem',
                  background: 'rgba(9, 14, 34, 0.94)',
                  border: `1px solid ${sponsor.tierBorder}`,
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  boxShadow: `0 8px 22px -4px rgba(0, 0, 0, 0.75), inset 0 1px 1px rgba(255, 255, 255, 0.35), ${sponsor.tierGlow}`,
                  zIndex: 10,
                  whiteSpace: 'nowrap',
                }}
              >
                <span
                  style={{
                    color: sponsor.tierColor,
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    letterSpacing: '0.09em',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-heading)',
                    textShadow:
                      sponsor.tier === 'Prata'
                        ? '0 0 10px rgba(255, 255, 255, 0.7)'
                        : sponsor.tier === 'Diamante'
                        ? '0 0 10px rgba(0, 240, 255, 0.6)'
                        : '0 0 10px rgba(251, 191, 36, 0.6)',
                  }}
                >
                  {sponsor.tier}
                </span>
              </div>

              {/* Logo Directly in the Card */}
              <div
                style={{
                  height: '75px',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                }}
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  style={{
                    maxHeight: sponsor.logoHeight || '46px',
                    maxWidth: '85%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: sponsor.isWhite ? 'brightness(0) invert(1)' : 'drop-shadow(0 4px 10px rgba(0, 0, 0, 0.5))',
                    transition: 'transform 0.3s ease',
                  }}
                  className="sponsor-logo-img"
                />
              </div>

              {/* Sponsor Name & Explanatory Phrase */}
              <div style={{ marginTop: 'auto' }}>
                <h4
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    fontFamily: 'var(--font-heading)',
                    marginBottom: '0.35rem',
                  }}
                >
                  {sponsor.name}
                </h4>

                <p
                  style={{
                    color: '#94a3b8',
                    fontSize: '0.82rem',
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {sponsor.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .sponsor-card:hover {
          transform: translateY(-6px);
          background: var(--hover-bg, rgba(22, 34, 72, 0.65)) !important;
          border-color: var(--hover-border, rgba(0, 210, 255, 0.6)) !important;
          box-shadow: var(--hover-shadow, 0 22px 45px -10px rgba(0, 112, 243, 0.35)) !important;
        }
        .sponsor-card:hover .sponsor-logo-img {
          transform: scale(1.06);
        }
        @media (max-width: 992px) {
          .sponsors-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.25rem !important;
          }
        }
        @media (max-width: 576px) {
          .sponsors-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
