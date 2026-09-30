import React from 'react';
import { Calendar, Clock, Sparkles, Code2, Users, Briefcase, Award } from 'lucide-react';

/* 
  Dados de programação preservados para quando a grade oficial for publicada:
  (scheduleData e days podem ser reativados a qualquer momento)
*/
export const PRESERVED_DAYS = [
  { dayNumber: 1, label: 'Dia 01 - 21/10', subtitle: 'Abertura & IA' },
  { dayNumber: 2, label: 'Dia 02 - 22/10', subtitle: 'Cyber & Cloud' },
  { dayNumber: 3, label: 'Dia 03 - 23/10', subtitle: 'Engenharia & Dados' },
  { dayNumber: 4, label: 'Dia 04 - 24/10', subtitle: 'Carreiras & Encerramento' },
];

export const PRESERVED_SCHEDULE_DATA = {
  1: [
    { time: '08:30 - 09:30', title: 'Credenciamento & Welcome Coffee FACOM UFU', speaker: 'Comissão Organizadora FACOM / UFU', location: 'Hall Principal - Bloco 1B', type: 'Recepção', tagColor: '#ffffff' },
    { time: '09:30 - 11:00', title: 'Keynote de Abertura: A Era dos Modelos de Raciocínio & Agentes IA', speaker: 'Dra. Helena Carvalho', location: 'Auditório 5R - Santa Mônica', type: 'Keynote', tagColor: '#00d2ff' },
    { time: '14:00 - 16:00', title: 'Workshop: Construindo Agentes Autônomos com Python e LLMs Locais', speaker: 'Prof. Lucas Menezes & Equipe IA FACOM', location: 'Lab de Informática 03', type: 'Workshop', tagColor: '#38bdf8' },
    { time: '16:30 - 18:00', title: 'Mesa Redonda: O Futuro da Computação & Desafios da IA na Indústria', speaker: 'Líderes de Engenharia', location: 'Auditório 5R - Santa Mônica', type: 'Painel', tagColor: '#00d2ff' },
  ],
  2: [
    { time: '09:00 - 10:30', title: 'Zero Trust na Prática: Defendendo Infraestruturas Críticas', speaker: 'Gabriel Santos', location: 'Auditório 5R', type: 'Palestra', tagColor: '#38bdf8' },
    { time: '11:00 - 12:30', title: 'Kubernetes Multi-Cluster & Resiliência em Alta Escala', speaker: 'Beatriz Almeida', location: 'Auditório 02', type: 'Palestra', tagColor: '#ffffff' },
    { time: '14:00 - 17:30', title: 'Hands-on: Testes de Invasão Ofensivos e Segurança em Aplicações Modernas', speaker: 'Matheus Costa', location: 'Lab de Cibersegurança 01', type: 'Workshop', tagColor: '#00d2ff' },
  ],
  3: [
    { time: '09:00 - 10:30', title: 'Arquitetura de Dados em Tempo Real com Kafka e Apache Flink', speaker: 'Rafael Vasconcelos', location: 'Auditório 5R', type: 'Palestra', tagColor: '#ffffff' },
    { time: '11:00 - 12:30', title: 'De Monólito a Microfrontends de Alta Performance', speaker: 'Juliana Rocha', location: 'Auditório 5R', type: 'Palestra', tagColor: '#38bdf8' },
    { time: '14:00 - 18:00', title: 'Workshop: Machine Learning Pipelines com PyTorch e MLflow', speaker: 'Carlos Eduardo', location: 'Lab de Informática 04', type: 'Workshop', tagColor: '#00d2ff' },
  ],
  4: [
    { time: '09:00 - 12:00', title: 'Workshop: Desenvolvimento de Games na Unreal Engine 5', speaker: 'Felipe Nogueira', location: 'Auditório 5R', type: 'Workshop', tagColor: '#38bdf8' },
    { time: '13:30 - 16:30', title: 'Feira de Carreiras & Sessões de Networking com Big Techs e Startups', speaker: 'Empresas Parceiras & Alunos UFU', location: 'Espaço Conexão FACOM / UFU', type: 'Networking', tagColor: '#ffffff' },
    { time: '17:00 - 19:00', title: 'Cerimônia Oficial de Encerramento & Premiação de Projetos', speaker: 'Diretoria FACOM UFU & Convidados', location: 'Auditório 5R', type: 'Encerramento', tagColor: '#00d2ff' },
  ],
};

export default function ScheduleSection() {
  const previewHighlights = [
    {
      icon: <Sparkles size={24} color="#00d2ff" />,
      title: 'Keynotes & Palestras',
      description: 'Líderes de tecnologia e referências acadêmicas abordando IA, infraestrutura, segurança e dados.',
    },
    {
      icon: <Code2 size={24} color="#38bdf8" />,
      title: 'Workshops Práticos',
      description: 'Sessões hands-on nos laboratórios da FACOM/UFU com aplicação real de ferramentas do mercado.',
    },
    {
      icon: <Briefcase size={24} color="#60a5fa" />,
      title: 'Feira de Carreiras',
      description: 'Contato direto com empresas contratantes, oportunidades de estágio e troca de experiências.',
    },
    {
      icon: <Award size={24} color="#93c5fd" />,
      title: 'Hackathon & Desafios',
      description: 'Competições intensivas de resolução de problemas reais com mentorias e premiações.',
    },
  ];

  return (
    <section
      id="programacao"
      style={{
        padding: '6.5rem 0',
        position: 'relative',
        background:
          'radial-gradient(circle at 50% 25%, #082159 0%, #04143d 55%, #020b24 100%), #030e2c',
        overflow: 'hidden',
        borderTop: '1px solid rgba(0, 153, 255, 0.2)',
        borderBottom: '1px solid rgba(0, 153, 255, 0.2)',
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
        {/* Section Title */}
        <div className="section-title-wrap" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="badge-tag">
            <Clock size={13} style={{ marginRight: '4px' }} />
            GRADE DO EVENTO
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
            PROGRAMAÇÃO <span style={{ color: '#00d2ff' }}>COMPLETA</span>
          </h2>
          <p style={{ color: '#cbd5e1', marginTop: '0.75rem', fontSize: '0.98rem', opacity: 0.9 }}>
            4 dias intensivos de conteúdo de excelência e imersão tecnológica na FACOM / UFU.
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
            borderColor: 'rgba(56, 189, 248, 0.35)',
            background: 'linear-gradient(180deg, rgba(8, 28, 80, 0.85) 0%, rgba(4, 18, 55, 0.95) 100%)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 153, 255, 0.15)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Top subtle glow */}
          <div
            style={{
              position: 'absolute',
              top: '-60px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '320px',
              height: '120px',
              background: 'radial-gradient(circle, rgba(0, 210, 255, 0.35) 0%, transparent 70%)',
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
                background: 'rgba(0, 210, 255, 0.12)',
                border: '1px solid rgba(0, 210, 255, 0.45)',
                color: '#38bdf8',
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
                  background: '#00d2ff',
                  boxShadow: '0 0 10px #00d2ff',
                  display: 'inline-block',
                }}
              />
              EM BREVE
            </span>
          </div>

          {/* Central Icon */}
          <div
            style={{
              width: '80px',
              height: '80px',
              margin: '0 auto 1.5rem auto',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(0, 112, 243, 0.25) 0%, rgba(121, 40, 202, 0.25) 100%)',
              border: '1px solid rgba(56, 189, 248, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 25px rgba(0, 153, 255, 0.25)',
            }}
          >
            <Calendar size={38} color="#00d2ff" />
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
            Grade Oficial em Fase de Finalização
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
            Nossa comissão organizadora está alinhando os horários, salas e confirmações de palestrantes
            convidados e empresas parceiras. A grade horária completa de cada dia será divulgada em breve!
          </p>

          {/* Quick Date Highlights */}
          <div
            className="schedule-date-highlights"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#93c5fd', fontSize: '0.9rem', fontWeight: 600 }}>
              <Clock size={16} color="#38bdf8" />
              <span>21 a 24 de Outubro de 2026</span>
            </div>
            <div className="schedule-dot-divider" style={{ color: 'rgba(255, 255, 255, 0.3)' }}>•</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#93c5fd', fontSize: '0.9rem', fontWeight: 600 }}>
              <Users size={16} color="#38bdf8" />
              <span>Campus Santa Mônica - FACOM / UFU</span>
            </div>
          </div>
        </div>

        {/* Preview Pillars Grid */}
        <div
          className="preview-pillars-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {previewHighlights.map((item, idx) => (
            <div
              key={idx}
              className="glass-card pillar-card"
              style={{
                padding: '1.5rem',
                background: 'rgba(6, 18, 52, 0.65)',
                borderColor: 'rgba(56, 189, 248, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                borderRadius: '0.85rem',
              }}
            >
              <div style={{ marginBottom: '0.25rem' }}>{item.icon}</div>
              <h4
                style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  margin: 0,
                }}
              >
                {item.title}
              </h4>
              <p
                style={{
                  fontSize: '0.82rem',
                  color: '#94a3b8',
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #programacao {
            padding: 3.5rem 0 !important;
          }
          .glass-card {
            padding: 1.75rem 1.25rem !important;
          }
          .pillar-card {
            padding: 1.25rem !important;
          }
        }
        @media (max-width: 540px) {
          .schedule-dot-divider {
            display: none !important;
          }
          .schedule-date-highlights {
            flex-direction: column !important;
            gap: 0.65rem !important;
          }
          .preview-pillars-grid {
            grid-template-columns: 1fr !important;
            gap: 0.85rem !important;
          }
        }
      `}</style>
    </section>
  );
}

