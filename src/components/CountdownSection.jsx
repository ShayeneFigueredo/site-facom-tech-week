import React, { useState, useEffect } from 'react';

export default function CountdownSection() {
  // Target Event Date: October 21, 2026, 08:30:00 BRT
  const targetDate = new Date('2026-10-21T08:30:00-03:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'DIAS', value: String(timeLeft.days).padStart(2, '0') },
    { label: 'HORAS', value: String(timeLeft.hours).padStart(2, '0') },
    { label: 'MINUTOS', value: String(timeLeft.minutes).padStart(2, '0') },
    { label: 'SEGUNDOS', value: String(timeLeft.seconds).padStart(2, '0') },
  ];

  return (
    <section
      id="countdown"
      style={{
        padding: '3.5rem 0 3rem 0',
        position: 'relative',
        background:
          'radial-gradient(circle at 75% 25%, rgba(139, 92, 246, 0.45) 0%, rgba(99, 32, 238, 0.35) 40%, rgba(30, 8, 66, 0.95) 100%), #1c063b',
        overflow: 'hidden',
        borderTop: '1px solid rgba(168, 85, 247, 0.3)',
        borderBottom: 'none',
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

      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        {/* Slogan Title */}
        <h2
          style={{
            fontSize: 'clamp(1.25rem, 2.8vw, 2.1rem)',
            fontWeight: 800,
            color: '#ffffff',
            fontFamily: 'var(--font-heading)',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
            lineHeight: 1.3,
          }}
        >
          O MAIOR EVENTO DE TECNOLOGIA DA HISTÓRIA DA UFU
        </h2>

        <p
          style={{
            color: '#94a3b8',
            fontSize: '0.95rem',
            marginBottom: '2.5rem',
            letterSpacing: '0.02em',
          }}
        >
          A contagem regressiva para a maior imersão de inovação e computação começou:
        </p>

        {/* Digital Countdown Timer Display */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(0.75rem, 2vw, 1.75rem)',
            flexWrap: 'wrap',
          }}
        >
          {timeUnits.map((unit, idx) => (
            <React.Fragment key={unit.label}>
              <div
                className="countdown-unit-card"
                style={{
                  background: 'linear-gradient(180deg, rgba(14, 25, 58, 0.95) 0%, rgba(8, 14, 34, 0.98) 100%)',
                  border: '1px solid rgba(0, 153, 255, 0.3)',
                  borderRadius: '1.25rem',
                  padding: '1.6rem 1.4rem 1.3rem 1.4rem',
                  minWidth: 'clamp(110px, 18vw, 155px)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  boxShadow:
                    '0 15px 35px -8px rgba(0, 0, 0, 0.75), 0 0 20px rgba(0, 112, 243, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Top Subtle Gradient Light Bar */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '15%',
                    right: '15%',
                    height: '2px',
                    background:
                      idx % 2 === 0
                        ? 'linear-gradient(90deg, transparent, #00d2ff, transparent)'
                        : 'linear-gradient(90deg, transparent, #c084fc, transparent)',
                  }}
                />

                {/* Digital Counter Value */}
                <span
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                    fontWeight: 900,
                    fontFamily: 'var(--font-heading)',
                    letterSpacing: '0.02em',
                    lineHeight: 1,
                    color: '#ffffff',
                    textShadow:
                      idx % 2 === 0
                        ? '0 0 25px rgba(0, 210, 255, 0.5)'
                        : '0 0 25px rgba(192, 132, 252, 0.5)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {unit.value}
                </span>

                {/* Label */}
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: idx % 2 === 0 ? '#38bdf8' : '#c084fc',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  {unit.label}
                </span>
              </div>

              {/* Colon separator between cards (except last) */}
              {idx < timeUnits.length - 1 && (
                <span
                  className="countdown-colon"
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: '#38bdf8',
                    opacity: 0.6,
                    fontFamily: 'var(--font-heading)',
                    marginBottom: '1rem',
                  }}
                >
                  :
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <style>{`
        .countdown-unit-card:hover {
          transform: translateY(-5px);
          border-color: rgba(0, 153, 255, 0.6) !important;
          box-shadow: 0 20px 45px -10px rgba(0, 112, 243, 0.35), 0 0 30px rgba(121, 40, 202, 0.25) !important;
        }
        @media (max-width: 640px) {
          .countdown-colon {
            display: none !important;
          }
          .countdown-unit-card {
            min-width: 70px !important;
            padding: 1rem 0.65rem 0.85rem 0.65rem !important;
            border-radius: 0.85rem !important;
            flex: 1 1 calc(50% - 0.75rem);
            max-width: 140px;
          }
          .countdown-unit-card span:first-of-type {
            font-size: 2.2rem !important;
          }
          .countdown-unit-card span:last-of-type {
            font-size: 0.68rem !important;
          }
        }
      `}</style>
    </section>
  );
}
