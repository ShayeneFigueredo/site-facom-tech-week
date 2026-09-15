import React from 'react';

export default function PartnersBar() {
  const sponsors = [
    {
      name: 'Kanastra',
      logo: '/patrocinadores/Kanastra-Logo-Edited.png',
      description: 'Infraestrutura tecnológica completa para o mercado financeiro.',
      isWhite: true,
      logoHeight: '34px',
    },
    {
      name: 'Bayer',
      logo: '/patrocinadores/logo-bayer.webp',
      description: 'Líder global em biotecnologia, agro e inovação digital.',
      isWhite: false,
      logoHeight: '52px',
    },
    {
      name: 'BIP Consulting',
      logo: '/patrocinadores/logo-bip-consulting-white.png',
      description: 'Consultoria global em transformação digital e estratégia tech.',
      isWhite: false,
      logoHeight: '42px',
    },
    {
      name: 'Hyperflow',
      logo: '/patrocinadores/hyperflow-logo-secundario.png',
      description: 'Plataforma avançada de automação inteligente e fluxos de IA.',
      isWhite: false,
      logoHeight: '44px',
    },
  ];

  return (
    <section
      id="patrocinadores"
      style={{
        position: 'relative',
        zIndex: 30,
        marginTop: '0px',
        paddingTop: '15px',
        paddingBottom: '3.5rem',
      }}
    >
      <div className="container">
        {/* Sponsor Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.25rem',
          }}
          className="sponsors-grid"
        >
          {sponsors.map((sponsor, idx) => (
            <div
              key={idx}
              className="sponsor-card"
              style={{
                padding: '1.85rem 1.5rem 1.6rem 1.5rem',
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
                minHeight: '225px',
              }}
            >
              {/* Logo Directly in the Card (No inner dark box) */}
              <div
                style={{
                  height: '80px',
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
          background: rgba(22, 34, 72, 0.65) !important;
          border-color: rgba(0, 210, 255, 0.6) !important;
          box-shadow: 0 22px 45px -10px rgba(0, 112, 243, 0.35), 0 0 25px rgba(121, 40, 202, 0.25), inset 0 1px 2px rgba(255, 255, 255, 0.4) !important;
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
