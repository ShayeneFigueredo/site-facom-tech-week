import React from 'react';
import { Users, Sparkles, Mic, Cpu, ShieldCheck, Cloud, Terminal, Bell } from 'lucide-react';

/* 
  Dados de palestrantes preservados para quando os nomes oficiais forem confirmados:
  (podem ser reativados a qualquer momento)
*/
export const PRESERVED_SPEAKERS = [
  {
    name: 'Dra. Helena Carvalho',
    role: 'Staff AI Researcher @ DeepMind',
    topic: 'Agentes Autônomos & Raciocínio em LLMs',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    badge: 'KEYNOTE',
    color: '#38bdf8',
  },
  {
    name: 'Gabriel Santos',
    role: 'Principal Security Architect @ Cloudflare',
    topic: 'Defesa Ativa contra Ataques de Zero-Day',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    badge: 'CIBERSEGURANÇA',
    color: '#60a5fa',
  },
  {
    name: 'Beatriz Almeida',
    role: 'Senior SRE Manager @ AWS',
    topic: 'Arquiteturas Globais e Kubernetes em Escala',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    badge: 'CLOUD',
    color: '#93c5fd',
  },
  {
    name: 'Rafael Vasconcelos',
    role: 'Staff Data Engineer @ Uber',
    topic: 'Processamento de Streaming com Kafka & Flink',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    badge: 'BIG DATA',
    color: '#38bdf8',
  },
  {
    name: 'Juliana Rocha',
    role: 'Head of Engineering @ Fintech',
    topic: 'Escalabilidade de Frontend e Design Systems',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400',
    badge: 'FRONTEND',
    color: '#60a5fa',
  },
  {
    name: 'Lucas Martins',
    role: 'Staff ML Engineer @ OpenAI Community',
    topic: 'Fine-Tuning e RAG Avançado em Produção',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    badge: 'MACHINE LEARNING',
    color: '#93c5fd',
  },
];

export default function SpeakersSection() {
  const teaserSlots = [
    {
      icon: <Cpu size={28} color="#00d2ff" />,
      area: 'Inteligência Artificial',
      hint: 'Keynote & Pesquisa em Modelos de Raciocínio',
      color: '#00d2ff',
    },
    {
      icon: <ShieldCheck size={28} color="#38bdf8" />,
      area: 'Cibersegurança',
      hint: 'Especialista em Red Team & Zero Trust',
      color: '#38bdf8',
    },
    {
      icon: <Cloud size={28} color="#60a5fa" />,
      area: 'Cloud & Alta Escala',
      hint: 'Liderança Técnica em Infraestrutura Crítica',
      color: '#60a5fa',
    },
    {
      icon: <Terminal size={28} color="#93c5fd" />,
      area: 'Engenharia de Software',
      hint: 'Staff Engineer & Arquitetura de Sistemas',
      color: '#93c5fd',
    },
  ];

  return (
    <section
      id="palestrantes"
      style={{
        padding: '6.5rem 0',
        position: 'relative',
        background:
          'radial-gradient(circle at 80% 20%, rgba(0, 112, 243, 0.16) 0%, transparent 45%), radial-gradient(circle at 20% 80%, rgba(121, 40, 202, 0.16) 0%, transparent 45%), #040715',
        overflow: 'hidden',
      }}
    >
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
        {/* Section Header */}
        <div className="section-title-wrap" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="badge-tag">
            <Users size={13} style={{ marginRight: '4px' }} />
            LINE-UP DE DESTAQUE
          </span>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 3.8vw, 2.85rem)',
              fontWeight: 900,
              color: '#ffffff',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginTop: '0.75rem',
              marginBottom: 0,
            }}
          >
            PALESTRANTES <span style={{ color: '#00d2ff' }}>CONVIDADOS</span>
          </h2>
          <p style={{ color: '#cbd5e1', marginTop: '0.75rem', fontSize: '0.98rem', opacity: 0.9 }}>
            Profissionais das maiores referências do setor de tecnologia e pesquisadores renomados.
          </p>
        </div>

        {/* Coming Soon Hero Card */}
        <div
          className="glass-card"
          style={{
            maxWidth: '920px',
            margin: '0 auto 3rem auto',
            padding: '3rem 2.5rem',
            textAlign: 'center',
            borderColor: 'rgba(147, 51, 234, 0.3)',
            background: 'linear-gradient(180deg, rgba(14, 18, 48, 0.9) 0%, rgba(8, 12, 32, 0.95) 100%)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(121, 40, 202, 0.15)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle top glow */}
          <div
            style={{
              position: 'absolute',
              top: '-60px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '320px',
              height: '120px',
              background: 'radial-gradient(circle, rgba(147, 51, 234, 0.35) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {/* Status Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.45rem 1.15rem',
                borderRadius: '9999px',
                background: 'rgba(147, 51, 234, 0.15)',
                border: '1px solid rgba(192, 132, 252, 0.45)',
                color: '#c084fc',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '0.82rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#c084fc',
                  boxShadow: '0 0 10px #c084fc',
                  display: 'inline-block',
                }}
              />
              ANÚNCIO EM BREVE
            </span>
          </div>

          {/* Central Icon */}
          <div
            style={{
              width: '80px',
              height: '80px',
              margin: '0 auto 1.5rem auto',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(121, 40, 202, 0.3) 0%, rgba(0, 112, 243, 0.3) 100%)',
              border: '1px solid rgba(192, 132, 252, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 25px rgba(147, 51, 234, 0.3)',
            }}
          >
            <Mic size={38} color="#c084fc" />
          </div>

          <h3
            style={{
              fontSize: 'clamp(1.4rem, 2.5vw, 1.95rem)',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '1rem',
              letterSpacing: '0.02em',
            }}
          >
            O Line-up Oficial Será Revelado em Breve
          </h3>

          <p
            style={{
              fontSize: '1rem',
              color: '#cbd5e1',
              maxWidth: '680px',
              margin: '0 auto 2rem auto',
              lineHeight: 1.7,
            }}
          >
            Estamos confirmando palestrantes das maiores empresas de tecnologia do Brasil e do mundo,
            além de professores e pesquisadores pioneiros da FACOM/UFU. Os nomes e tópicos serão divulgados
            gradualmente nos canais oficiais do evento.
          </p>

          <div
            className="speakers-notice-pill"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '0.65rem 1.25rem',
              borderRadius: '9999px',
              fontSize: '0.88rem',
              color: '#e2e8f0',
            }}
          >
            <Sparkles size={16} color="#c084fc" />
            <span>Fique atento às redes da <strong>FACOM Tech Week</strong> para os primeiros anúncios!</span>
          </div>
        </div>

        {/* Teaser Track Cards */}
        <div
          className="teaser-speakers-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {teaserSlots.map((slot, idx) => (
            <div
              key={idx}
              className="glass-card teaser-speaker-card"
              style={{
                padding: '1.75rem 1.5rem',
                background: 'rgba(8, 12, 32, 0.75)',
                borderColor: 'rgba(147, 51, 234, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: '1rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Silhouette / mystery indicator badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '0.75rem',
                  right: '0.75rem',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  padding: '0.2rem 0.55rem',
                  borderRadius: '9999px',
                  background: 'rgba(0, 0, 0, 0.4)',
                  border: `1px solid ${slot.color}`,
                  color: slot.color,
                  letterSpacing: '0.04em',
                }}
              >
                CONFIRMANDO
              </div>

              {/* Mystery Avatar Silhouette Circle */}
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(15, 23, 42, 0.9)',
                  border: `1px dashed ${slot.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  boxShadow: `0 0 15px rgba(0, 0, 0, 0.5)`,
                }}
              >
                {slot.icon}
              </div>

              <h4
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '0.4rem',
                }}
              >
                {slot.area}
              </h4>

              <p
                style={{
                  fontSize: '0.8rem',
                  color: '#94a3b8',
                  lineHeight: 1.45,
                  margin: 0,
                }}
              >
                {slot.hint}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #palestrantes {
            padding: 3.5rem 0 !important;
          }
          .glass-card {
            padding: 1.75rem 1.15rem !important;
          }
          .speakers-notice-pill {
            font-size: 0.78rem !important;
            padding: 0.5rem 0.95rem !important;
          }
        }
        @media (max-width: 540px) {
          .teaser-speakers-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.75rem !important;
          }
          .teaser-speaker-card {
            padding: 1.25rem 0.75rem !important;
          }
        }
        @media (max-width: 380px) {
          .teaser-speakers-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

