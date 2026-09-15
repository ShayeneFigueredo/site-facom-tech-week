import React from 'react';
import { Trophy, Code2, Users, Flame, CheckCircle, ArrowRight } from 'lucide-react';

export default function HackathonSection({ onOpenModal }) {
  const prizes = [
    { place: '1º Lugar', prize: 'R$ 5.000', perk: '+ Troféu, Mentoria Exclusiva e Vaga Direta em Processo Seletivo', color: '#00f0ff' },
    { place: '2º Lugar', prize: 'R$ 3.000', perk: '+ Medalhas, Acesso a Cursos Especializados e Brindes', color: '#3b82f6' },
    { place: '3º Lugar', prize: 'R$ 2.000', perk: '+ Medalhas e Kits Exclusivos FACOM Tech Week', color: '#8b5cf6' },
  ];

  return (
    <section
      id="hackathon"
      style={{
        padding: '6rem 0',
        position: 'relative',
        background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.12) 0%, #060913 70%)',
      }}
    >
      <div className="container">
        <div
          className="glass-panel"
          style={{
            padding: '3.5rem 2.5rem',
            borderRadius: '1.75rem',
            border: '1px solid rgba(139, 92, 246, 0.35)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 40px rgba(139, 92, 246, 0.15)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Neon Glow accents */}
          <div
            style={{
              position: 'absolute',
              top: '-100px',
              right: '-100px',
              width: '300px',
              height: '300px',
              background: 'rgba(0, 240, 255, 0.2)',
              filter: 'blur(80px)',
              borderRadius: '50%',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 0.9fr',
              gap: '3rem',
              alignItems: 'center',
            }}
            className="hackathon-grid"
          >
            {/* Left Description */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span className="badge-tag" style={{ borderColor: 'rgba(139, 92, 246, 0.5)', color: 'var(--neon-purple)' }}>
                  <Flame size={14} color="#d946ef" />
                  DESAFIO DE CÓDIGO & INOVAÇÃO
                </span>
              </div>

              <h2
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  marginBottom: '1rem',
                  lineHeight: 1.2,
                }}
              >
                HACKATHON FACOM 48H: <br />
                <span className="gradient-text-cyan">Construa o Futuro em Código</span>
              </h2>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1.05rem',
                  lineHeight: 1.6,
                  marginBottom: '1.75rem',
                }}
              >
                48 horas ininterruptas de ideação, prototipação e programação. Forme seu time
                de até 5 pessoas, solucione problemas reais de impacto social e concorra a mais
                de <strong>R$ 10.000 em dinheiro</strong> e oportunidades com nossos parceiros.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#ffffff', fontSize: '0.95rem' }}>
                  <CheckCircle size={18} color="var(--neon-cyan)" />
                  <span>Mentorias com especialistas técnicos e executivos do setor</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#ffffff', fontSize: '0.95rem' }}>
                  <CheckCircle size={18} color="var(--neon-cyan)" />
                  <span>Infraestrutura dedicada com internet de alta velocidade e alimentação</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#ffffff', fontSize: '0.95rem' }}>
                  <CheckCircle size={18} color="var(--neon-cyan)" />
                  <span>Workshops preparatórios e suporte de APIs das patrocinadoras</span>
                </div>
              </div>

              <button
                onClick={onOpenModal}
                className="btn-primary"
                style={{
                  padding: '0.9rem 2.2rem',
                  fontSize: '1.05rem',
                }}
              >
                <span>Inscrever Meu Time no Hackathon</span>
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Right Prizes Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '0.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <Trophy size={20} color="var(--neon-cyan)" />
                <span>Premiações do Hackathon</span>
              </div>

              {prizes.map((p, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(15, 23, 42, 0.7)',
                    border: `1px solid ${p.color}40`,
                    borderRadius: '1rem',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: `0 8px 20px -5px ${p.color}25`,
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = p.color;
                    e.currentTarget.style.transform = 'translateX(6px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${p.color}40`;
                    e.currentTarget.style.transform = 'translateX(0px)';
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: p.color, textTransform: 'uppercase' }}>
                      {p.place}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                      {p.perk}
                    </div>
                  </div>

                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.6rem',
                      fontWeight: 800,
                      color: '#ffffff',
                      textShadow: `0 0 15px ${p.color}`,
                    }}
                  >
                    {p.prize}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hackathon-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
