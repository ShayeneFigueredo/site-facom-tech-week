import React, { useState, useEffect } from 'react';
import {
  BrainCircuit,
  ShieldCheck,
  Layout,
  Cloud,
  Database,
  Gamepad2,
  Cpu,
  Sparkles,
} from 'lucide-react';

export default function TracksSection() {
  const wordsList = [
    'TRILHAS',
    'PALESTRAS',
    'MINICURSOS',
    'WORKSHOPS',
    'HACKATHON',
    'RECRUTAMENTO',
    'MÚSICA',
    'BRINDES',
    'NETWORKING',
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [clockProgress, setClockProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const roundDuration = 3000; // 3 seconds per clock round
    const intervalTime = 30; // 30ms updates for 60fps clock hand sweep
    const step = intervalTime / roundDuration;

    const timer = setInterval(() => {
      setClockProgress((prev) => {
        if (prev + step >= 1) {
          setIsFading(true);
          setTimeout(() => {
            setCurrentWordIndex((oldIdx) => (oldIdx + 1) % wordsList.length);
            setIsFading(false);
          }, 180);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [wordsList.length]);

  const currentWord = wordsList[currentWordIndex];

  const getFontSize = (word) => {
    if (word.length > 10) return 'clamp(1.05rem, 1.7vw, 1.45rem)';
    if (word.length > 8) return 'clamp(1.25rem, 2.1vw, 1.75rem)';
    return 'clamp(1.5rem, 2.6vw, 2.2rem)';
  };

  const tracksList = [
    {
      id: 'ia',
      title: 'Inteligência Artificial & LLMs',
      icon: <BrainCircuit size={26} />,
      color: '#00d2ff',
    },
    {
      id: 'cyber',
      title: 'Cybersegurança',
      icon: <ShieldCheck size={26} />,
      color: '#38bdf8',
    },
    {
      id: 'frontend',
      title: 'Front-end & Design',
      icon: <Layout size={26} />,
      color: '#60a5fa',
    },
    {
      id: 'cloud',
      title: 'Cloud Computing & DevOps',
      icon: <Cloud size={26} />,
      color: '#c084fc',
    },
    {
      id: 'dados',
      title: 'Engenharia de Dados & Big Data',
      icon: <Database size={26} />,
      color: '#a855f7',
    },
    {
      id: 'games',
      title: 'Games & Computação Gráfica',
      icon: <Gamepad2 size={26} />,
      color: '#00d2ff',
    },
    {
      id: 'software',
      title: 'Engenharia de Software',
      icon: <Cpu size={26} />,
      color: '#9333ea',
    },
  ];

  // Repeat the items so the infinite scroll animation is seamless without gaps
  const row1Tracks = [...tracksList, ...tracksList, ...tracksList];
  const row2Tracks = [...tracksList.slice().reverse(), ...tracksList.slice().reverse(), ...tracksList.slice().reverse()];

  return (
    <section
      id="trilhas"
      style={{
        padding: '5.5rem 0 6.5rem 0',
        position: 'relative',
        background:
          'radial-gradient(circle at 15% 30%, rgba(0, 112, 243, 0.18) 0%, transparent 45%), radial-gradient(circle at 85% 70%, rgba(121, 40, 202, 0.18) 0%, transparent 45%), #050816',
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

      {/* Main Track Marquee Stage Container with Center Circle */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'visible',
          padding: '4.5rem 0',
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem',
          zIndex: 5,
        }}
        className="marquee-track-stage"
      >
        {/* Top Row: Moves to the RIGHT */}
        <div className="marquee-wrapper">
          <div className="marquee-track marquee-row-right">
            {row1Tracks.map((track, idx) => (
              <div
                key={`top-${idx}`}
                className="track-pill-item"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  padding: '0.9rem 1.75rem',
                  borderRadius: '9999px',
                  background: 'rgba(14, 22, 52, 0.65)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.15)',
                  marginRight: '2rem',
                  flexShrink: 0,
                  whiteSpace: 'nowrap',
                }}
              >
                <div
                  style={{
                    color: track.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {track.icon}
                </div>
                <span
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    fontFamily: 'var(--font-heading)',
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase',
                  }}
                >
                  {track.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row: Moves to the LEFT */}
        <div className="marquee-wrapper">
          <div className="marquee-track marquee-row-left">
            {row2Tracks.map((track, idx) => (
              <div
                key={`bottom-${idx}`}
                className="track-pill-item"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  padding: '0.9rem 1.75rem',
                  borderRadius: '9999px',
                  background: 'rgba(24, 12, 58, 0.65)',
                  border: '1px solid rgba(192, 132, 252, 0.25)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.15)',
                  marginRight: '2rem',
                  flexShrink: 0,
                  whiteSpace: 'nowrap',
                }}
              >
                <div
                  style={{
                    color: track.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {track.icon}
                </div>
                <span
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    fontFamily: 'var(--font-heading)',
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase',
                  }}
                >
                  {track.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Central Frosted-Glass Circle with Clock Sweep Radar & Dynamic Word */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'clamp(200px, 22vw, 260px)',
            height: 'clamp(200px, 22vw, 260px)',
            borderRadius: '50%',
            background: 'rgba(10, 15, 38, 0.78)',
            border: '2px solid rgba(0, 210, 255, 0.35)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '1.5rem',
            boxShadow:
              '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 45px rgba(0, 210, 255, 0.25), inset 0 1px 3px rgba(255, 255, 255, 0.35)',
            zIndex: 15,
            pointerEvents: 'none',
          }}
          className="center-lens-circle"
        >
          {/* SVG Clock Sweep Ring & Hand Tip Dot */}
          <svg
            viewBox="0 0 100 100"
            style={{
              position: 'absolute',
              inset: '-4px',
              width: 'calc(100% + 8px)',
              height: 'calc(100% + 8px)',
              transform: 'rotate(-90deg)',
              overflow: 'visible',
            }}
          >
            <defs>
              <linearGradient id="clockSweepGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00f0ff" />
                <stop offset="50%" stopColor="#c084fc" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>

            {/* Background Track Circle */}
            <circle
              cx="50"
              cy="50"
              r="47"
              fill="none"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="2.5"
            />

            {/* Clock Sweep Progress Arc */}
            <circle
              cx="50"
              cy="50"
              r="47"
              fill="none"
              stroke="url(#clockSweepGradient)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray={295.3}
              strokeDashoffset={295.3 * (1 - clockProgress)}
              style={{
                filter: 'drop-shadow(0 0 6px #00d2ff) drop-shadow(0 0 12px #c084fc)',
              }}
            />

            {/* Clock Hand Tip Glowing Dot */}
            {clockProgress > 0.01 && (
              <circle
                cx={50 + 47 * Math.cos((clockProgress * 360 * Math.PI) / 180)}
                cy={50 + 47 * Math.sin((clockProgress * 360 * Math.PI) / 180)}
                r="3.2"
                fill="#ffffff"
                style={{
                  filter: 'drop-shadow(0 0 8px #00f0ff) drop-shadow(0 0 14px #ffffff)',
                }}
              />
            )}
          </svg>

          {/* Center Title: Dynamic Cycling Word */}
          <h3
            style={{
              fontSize: getFontSize(currentWord),
              fontWeight: 900,
              color: '#ffffff',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              lineHeight: 1.1,
              margin: 0,
              opacity: isFading ? 0 : 1,
              transform: isFading ? 'scale(0.85)' : 'scale(1)',
              transition: 'opacity 0.18s ease, transform 0.18s ease',
              textShadow: '0 0 20px rgba(0, 210, 255, 0.6), 0 0 35px rgba(192, 132, 252, 0.4)',
            }}
          >
            {currentWord}
          </h3>
        </div>
      </div>

      <style>{`
        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
          display: flex;
        }
        .marquee-track {
          display: flex;
          flex-shrink: 0;
          width: max-content;
        }
        .marquee-row-right {
          animation: scrollRight 40s linear infinite;
        }
        .marquee-row-left {
          animation: scrollLeft 40s linear infinite;
        }
        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        @keyframes scrollLeft {
          0% {
            transform: translateX(0%);
          }
        100% {
            transform: translateX(-50%);
          }
        }
        .track-pill-item:hover {
          border-color: rgba(0, 210, 255, 0.8) !important;
          box-shadow: 0 10px 30px rgba(0, 210, 255, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.4) !important;
        }
        @media (max-width: 768px) {
          .track-pill-item {
            padding: 0.65rem 1.15rem !important;
            font-size: 0.85rem !important;
            margin-right: 1.25rem !important;
          }
          .marquee-track-stage {
            padding: 3rem 0 !important;
            gap: 1.75rem !important;
          }
          .center-lens-circle {
            width: 175px !important;
            height: 175px !important;
            padding: 1rem !important;
          }
          .center-lens-circle h3 {
            font-size: 1.4rem !important;
            letter-spacing: 0.1em !important;
          }
        }
      `}</style>
    </section>
  );
}
