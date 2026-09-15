import React from 'react';
import { Check } from 'lucide-react';

export default function TicketsSection({ onOpenModal }) {
  const tickets = [
    {
      name: 'Aluno FACOM / UFU',
      badge: 'POPULAR UFU',
      price: 'R$ 45,00',
      desc: 'Valor promocional exclusivo para alunos e discentes da FACOM / UFU.',
      features: [
        'Acesso irrestrito a todas as palestras e keynotes',
        'Certificado oficial UFU de 40 horas complementares',
        'Vagas garantidas em workshops práticos em laboratório',
        'Acesso à Feira de Carreiras e Networking com Empresas',
        'Kit de boas-vindas da FACOM Tech Week',
      ],
      isFeatured: true,
      btnText: 'Garantir Ingresso FACOM',
      accentColor: '#38bdf8',
    },
    {
      name: 'Alunos Outros Cursos UFU',
      badge: 'OUTROS CURSOS UFU',
      price: 'R$ 50,00',
      desc: 'Para estudantes de todas as outras graduações e cursos da UFU.',
      features: [
        'Acesso total a todas as palestras e auditórios',
        'Certificado oficial UFU de 40 horas complementares',
        'Participação nos workshops e minicursos práticos',
        'Acesso aos stands e networking com empresas parceiras',
        'Kit oficial do participante',
      ],
      isFeatured: false,
      btnText: 'Garantir Ingresso UFU',
      accentColor: '#00d2ff',
    },
    {
      name: 'Público Externo',
      badge: 'COMUNIDADE',
      price: 'R$ 60,00',
      desc: 'Para estudantes de outras faculdades, profissionais de tecnologia e comunidade.',
      features: [
        'Acesso irrestrito a todos os 4 dias de evento',
        'Certificado oficial de participação executiva (40h)',
        'Acesso livre aos workshops práticos e keynotes',
        'Conexão direta com talentos e empresas do ecossistema',
      ],
      isFeatured: false,
      btnText: 'Garantir Ingresso Externo',
      accentColor: '#c084fc',
    },
  ];

  return (
    <section
      id="ingressos"
      style={{
        padding: '6.5rem 0',
        position: 'relative',
        background:
          'radial-gradient(circle at 75% 25%, rgba(139, 92, 246, 0.45) 0%, rgba(99, 32, 238, 0.35) 40%, rgba(30, 8, 66, 0.95) 100%), #1c063b',
        borderTop: '1px solid rgba(168, 85, 247, 0.35)',
        borderBottom: '1px solid rgba(168, 85, 247, 0.35)',
        overflow: 'hidden',
      }}
    >
      {/* Background Matrix Grid */}
      <div
        className="bg-grid-pattern"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.4,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="section-title-wrap">
          <span className="badge-tag" style={{ background: 'rgba(192, 132, 252, 0.15)', borderColor: '#c084fc', color: '#ffffff' }}>
            INGRESSOS & INSCRIÇÕES
          </span>
          <h2 style={{ textTransform: 'uppercase' }}>
            Garanta Sua Presença na{' '}
            <span style={{ color: '#00d2ff' }}>FACOM Tech Week 2026</span>
          </h2>
          <p style={{ color: '#cbd5e1' }}>
            Vagas limitadas pela capacidade dos auditórios e laboratórios da UFU. Escolha seu passe e confirme sua inscrição.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch',
          }}
        >
          {tickets.map((t, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                borderRadius: '1.5rem',
                border: t.isFeatured
                  ? '2px solid #7c3aed'
                  : '1px solid rgba(139, 92, 246, 0.2)',
                boxShadow: t.isFeatured
                  ? '0 15px 40px -10px rgba(124, 58, 237, 0.4)'
                  : 'none',
                transform: t.isFeatured ? 'scale(1.03)' : 'none',
                zIndex: t.isFeatured ? 2 : 1,
              }}
            >
              {t.isFeatured && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#7c3aed',
                    border: '1px solid #a78bfa',
                    padding: '0.35rem 1.1rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    color: '#ffffff',
                    boxShadow: '0 4px 15px rgba(124, 58, 237, 0.5)',
                  }}
                >
                  {t.badge}
                </div>
              )}

              <div>
                <div
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.5rem',
                  }}
                >
                  {t.name}
                </div>

                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '1.5rem',
                    minHeight: '40px',
                  }}
                >
                  {t.desc}
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.4rem',
                    marginBottom: '2rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '2.5rem',
                      fontWeight: 800,
                      color: '#ffffff',
                    }}
                  >
                    {t.price}
                  </span>
                  {t.price !== 'GRATUITO' && (
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>/ evento completo</span>
                  )}
                </div>

                {/* Features list */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.9rem',
                    marginBottom: '2.5rem',
                  }}
                >
                  {t.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: `${t.accentColor}25`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: t.accentColor,
                          flexShrink: 0,
                          marginTop: '2px',
                        }}
                      >
                        <Check size={13} strokeWidth={3} />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenModal}
                className={t.isFeatured ? 'btn-primary' : 'btn-secondary'}
                style={{
                  width: '100%',
                  padding: '0.9rem',
                  borderRadius: '0.75rem',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                }}
              >
                <span>{t.btnText}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
