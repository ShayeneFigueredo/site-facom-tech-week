import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'O evento é aberto para estudantes de outras faculdades e profissionais externos?',
      a: 'Sim! A FACOM Tech Week é 100% aberta para estudantes da UFU e de outras instituições, além de profissionais, entusiastas e pesquisadores de tecnologia.',
    },
    {
      q: 'Como funciona a emissão dos certificados de horas complementares?',
      a: 'A presença nas palestras e workshops será registrada no credenciamento. Ao final do evento, os certificados oficiais de 40 horas complementares emitidos pela UFU serão disponibilizados por e-mail.',
    },
    {
      q: 'Qual é a data e o local do evento?',
      a: 'A FACOM Tech Week acontecerá de 21 a 24 de Outubro de 2026, no Campus Santa Mônica da Universidade Federal de Uberlândia (UFU).',
    },
    {
      q: 'Preciso levar meu próprio notebook para os workshops práticos?',
      a: 'Recomendamos trazer seu próprio notebook, mas os laboratórios da FACOM / UFU também estarão preparados com o ambiente e ferramentas configurados para os participantes.',
    },
    {
      q: 'Haverá transmissão online das palestras do auditório principal?',
      a: 'Sim, as palestras principais serão transmitidas ao vivo no canal oficial da FACOM UFU no YouTube para os inscritos que desejarem acompanhar remotamente.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      style={{
        padding: '6rem 0',
        position: 'relative',
        background:
          'radial-gradient(circle at 75% 25%, rgba(0, 112, 243, 0.16) 0%, transparent 45%), radial-gradient(circle at 25% 75%, rgba(121, 40, 202, 0.16) 0%, transparent 45%), #040715',
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

      <div className="container" style={{ maxWidth: '850px', position: 'relative', zIndex: 10 }}>
        <div className="section-title-wrap">
          <span className="badge-tag">TIRE SUAS DÚVIDAS</span>
          <h2 style={{ textTransform: 'uppercase' }}>
            Perguntas <span style={{ color: '#00d2ff' }}>Frequentes</span>
          </h2>
          <p>
            Encontre respostas rápidas para as principais dúvidas sobre inscrições, presença, workshops e certificados.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-card"
                style={{
                  overflow: 'hidden',
                  borderRadius: '1rem',
                  border: isOpen
                    ? '1px solid rgba(139, 92, 246, 0.5)'
                    : '1px solid rgba(139, 92, 246, 0.18)',
                }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    background: 'transparent',
                    border: 'none',
                    color: '#ffffff',
                    textAlign: 'left',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  <span style={{ color: isOpen ? '#60a5fa' : '#ffffff' }}>{faq.q}</span>
                  <div
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      color: isOpen ? '#60a5fa' : 'var(--text-muted)',
                      flexShrink: 0,
                    }}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 1.5rem 1.25rem 1.5rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                      borderTop: '1px solid rgba(59, 130, 246, 0.15)',
                      paddingTop: '1rem',
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
