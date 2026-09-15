import React, { useState } from 'react';
import { Clock, MapPin, User } from 'lucide-react';

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState(1);

  const days = [
    { dayNumber: 1, label: 'Dia 01 - 21/10', subtitle: 'Abertura & IA' },
    { dayNumber: 2, label: 'Dia 02 - 22/10', subtitle: 'Cyber & Cloud' },
    { dayNumber: 3, label: 'Dia 03 - 23/10', subtitle: 'Engenharia & Dados' },
    { dayNumber: 4, label: 'Dia 04 - 24/10', subtitle: 'Carreiras & Encerramento' },
  ];

  const scheduleData = {
    1: [
      {
        time: '08:30 - 09:30',
        title: 'Credenciamento & Welcome Coffee FACOM UFU',
        speaker: 'Comissão Organizadora FACOM / UFU',
        location: 'Hall Principal - Bloco 1B',
        type: 'Recepção',
        tagColor: '#ffffff',
      },
      {
        time: '09:30 - 11:00',
        title: 'Keynote de Abertura: A Era dos Modelos de Raciocínio & Agentes IA',
        speaker: 'Dra. Helena Carvalho (Staff AI Researcher)',
        location: 'Auditório 5R - Santa Mônica',
        type: 'Keynote',
        tagColor: '#00d2ff',
      },
      {
        time: '14:00 - 16:00',
        title: 'Workshop: Construindo Agentes Autônomos com Python e LLMs Locais',
        speaker: 'Prof. Lucas Menezes & Equipe IA FACOM',
        location: 'Lab de Informática 03',
        type: 'Workshop',
        tagColor: '#38bdf8',
      },
      {
        time: '16:30 - 18:00',
        title: 'Mesa Redonda: O Futuro da Computação & Desafios da IA na Indústria',
        speaker: 'Líderes de Engenharia (Nubank, Mercado Livre, Stone)',
        location: 'Auditório 5R - Santa Mônica',
        type: 'Painel',
        tagColor: '#00d2ff',
      },
    ],
    2: [
      {
        time: '09:00 - 10:30',
        title: 'Zero Trust na Prática: Defendendo Infraestruturas Críticas',
        speaker: 'Gabriel Santos (Security Architect @ Cloudflare)',
        location: 'Auditório 5R',
        type: 'Palestra',
        tagColor: '#38bdf8',
      },
      {
        time: '11:00 - 12:30',
        title: 'Kubernetes Multi-Cluster & Resiliência em Alta Escala',
        speaker: 'Beatriz Almeida (Principal SRE @ AWS)',
        location: 'Auditório 02',
        type: 'Palestra',
        tagColor: '#ffffff',
      },
      {
        time: '14:00 - 17:30',
        title: 'Hands-on: Testes de Invasão Ofensivos e Segurança em Aplicações Modernas',
        speaker: 'Matheus Costa (Red Team Leader)',
        location: 'Lab de Cibersegurança 01',
        type: 'Workshop',
        tagColor: '#00d2ff',
      },
    ],
    3: [
      {
        time: '09:00 - 10:30',
        title: 'Arquitetura de Dados em Tempo Real com Kafka e Apache Flink',
        speaker: 'Rafael Vasconcelos (Staff Data Eng @ Uber)',
        location: 'Auditório 5R',
        type: 'Palestra',
        tagColor: '#ffffff',
      },
      {
        time: '11:00 - 12:30',
        title: 'De Monólito a Microfrontends de Alta Performance',
        speaker: 'Juliana Rocha (Tech Lead Frontend)',
        location: 'Auditório 5R',
        type: 'Palestra',
        tagColor: '#38bdf8',
      },
      {
        time: '14:00 - 18:00',
        title: 'Workshop: Machine Learning Pipelines com PyTorch e MLflow',
        speaker: 'Carlos Eduardo (Data Scientist)',
        location: 'Lab de Informática 04',
        type: 'Workshop',
        tagColor: '#00d2ff',
      },
    ],
    4: [
      {
        time: '09:00 - 12:00',
        title: 'Workshop: Desenvolvimento de Games na Unreal Engine 5',
        speaker: 'Felipe Nogueira (Graphics Programmer)',
        location: 'Auditório 5R',
        type: 'Workshop',
        tagColor: '#38bdf8',
      },
      {
        time: '13:30 - 16:30',
        title: 'Feira de Carreiras & Sessões de Networking com Big Techs e Startups',
        speaker: 'Empresas Parceiras & Alunos UFU',
        location: 'Espaço Conexão FACOM / UFU',
        type: 'Networking',
        tagColor: '#ffffff',
      },
      {
        time: '17:00 - 19:00',
        title: 'Cerimônia Oficial de Encerramento & Apresentação de Projetos Destaque',
        speaker: 'Diretoria FACOM UFU & Convidados Especiais',
        location: 'Auditório 5R',
        type: 'Encerramento',
        tagColor: '#00d2ff',
      },
    ],
  };

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
        {/* Title: Only 'Programação Completa' */}
        <div className="section-title-wrap" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 3.8vw, 2.85rem)',
              fontWeight: 900,
              color: '#ffffff',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            PROGRAMAÇÃO COMPLETA
          </h2>
          <p style={{ color: '#cbd5e1', marginTop: '0.75rem', fontSize: '0.98rem', opacity: 0.9 }}>
            4 dias intensivos de conteúdo de excelência na FACOM / UFU. Selecione o dia para conferir a grade.
          </p>
        </div>

        {/* Day selection tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.85rem',
            flexWrap: 'wrap',
            marginBottom: '3rem',
          }}
          className="schedule-tabs-row"
        >
          {days.map((day) => {
            const isActive = activeDay === day.dayNumber;
            return (
              <button
                key={day.dayNumber}
                onClick={() => setActiveDay(day.dayNumber)}
                style={{
                  backgroundColor: isActive
                    ? '#ffffff'
                    : 'rgba(5, 18, 56, 0.75)',
                  border: isActive
                    ? '2px solid #ffffff'
                    : '1px solid rgba(255, 255, 255, 0.2)',
                  padding: '0.9rem 1.6rem',
                  borderRadius: '0.85rem',
                  color: isActive ? '#031442' : '#ffffff',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  minWidth: '155px',
                  boxShadow: isActive ? '0 8px 30px rgba(0, 0, 0, 0.5)' : 'none',
                  transition: 'all 0.25s ease',
                }}
                className="schedule-tab-btn"
              >
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 900,
                    fontSize: '1rem',
                  }}
                >
                  {day.label}
                </span>
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    opacity: isActive ? 0.9 : 0.75,
                    marginTop: '2px',
                  }}
                >
                  {day.subtitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Timeline list */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {scheduleData[activeDay]?.map((item, index) => (
            <div
              key={index}
              className="glass-card schedule-card-item"
              style={{
                padding: '1.5rem 2rem',
                display: 'grid',
                gridTemplateColumns: '180px 1fr auto',
                alignItems: 'center',
                gap: '1.5rem',
                borderColor: 'rgba(56, 189, 248, 0.25)',
                background: 'rgba(6, 18, 52, 0.85)',
              }}
            >
              {/* Time */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#38bdf8',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                }}
                className="schedule-card-time"
              >
                <Clock size={16} />
                <span>{item.time}</span>
              </div>

              {/* Content */}
              <div className="schedule-card-content">
                <h4
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    marginBottom: '0.4rem',
                    color: '#ffffff',
                    lineHeight: 1.35,
                  }}
                >
                  {item.title}
                </h4>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: '1.25rem',
                    fontSize: '0.85rem',
                    color: '#cbd5e1',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <User size={14} color="#38bdf8" />
                    <span>{item.speaker}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <MapPin size={14} color="#60a5fa" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Tag */}
              <div className="schedule-card-badge">
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    background: 'rgba(0, 153, 255, 0.15)',
                    border: `1px solid ${item.tagColor}`,
                    color: item.tagColor,
                    letterSpacing: '0.05em',
                    display: 'inline-block',
                  }}
                >
                  {item.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .schedule-card-item {
            grid-template-columns: 1fr !important;
            gap: 0.85rem !important;
            padding: 1.25rem 1.25rem !important;
          }
          .schedule-card-badge {
            margin-top: 0.25rem;
          }
          .schedule-tab-btn {
            min-width: 135px !important;
            padding: 0.75rem 1rem !important;
          }
          .schedule-tab-btn span:first-child {
            font-size: 0.9rem !important;
          }
          .schedule-tabs-row {
            gap: 0.5rem !important;
            margin-bottom: 2rem !important;
          }
        }
        @media (max-width: 480px) {
          .schedule-tab-btn {
            width: calc(50% - 0.35rem) !important;
            min-width: unset !important;
          }
        }
      `}</style>
    </section>
  );
}
