import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw } from 'lucide-react';

export default function StatsSection() {
  const sectionRef = useRef(null);
  const targetLetters = ['T', 'E', 'C', 'H', 'W', 'E', 'E', 'K'];

  // Scroll Progress (0 to 1)
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeKeyIndex, setActiveKeyIndex] = useState(-1);
  const [isFullyTyped, setIsFullyTyped] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track scroll position inside this scroll area
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const isMobileView = window.innerWidth <= 768;

      if (isMobileView) {
        // Mobile-only: Starts typing as soon as section enters viewport and finishes smoothly
        const entryPoint = windowHeight * 0.85;
        const current = entryPoint - rect.top;
        const travelDistance = Math.min(windowHeight * 0.40, 280);
        const progress = Math.min(Math.max(current / travelDistance, 0), 1);
        setScrollProgress(progress);
      } else {
        // Desktop (exact original restored calculation)
        const totalHeight = rect.height - windowHeight;
        if (totalHeight <= 0) return;

        const current = -rect.top;
        const progress = Math.min(Math.max(current / totalHeight, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Map scroll progress to typed letters count (0 to 8)
  useEffect(() => {
    if (autoPlay) return;

    if (isMobile) {
      // Mobile typing range
      if (scrollProgress <= 0.0) {
        setActiveKeyIndex(0);
        setIsFullyTyped(false);
      } else if (scrollProgress >= 0.85) {
        setActiveKeyIndex(7);
        setIsFullyTyped(true);
      } else {
        const step = 0.85 / targetLetters.length;
        const index = Math.floor(scrollProgress / step);
        setActiveKeyIndex(Math.min(Math.max(index, 0), 7));
        setIsFullyTyped(index >= 7);
      }
    } else {
      // Desktop (exact original typing range restored)
      const startProgress = 0.05;
      const endProgress = 0.65;

      if (scrollProgress < startProgress) {
        setActiveKeyIndex(-1);
        setIsFullyTyped(false);
      } else if (scrollProgress >= endProgress) {
        setActiveKeyIndex(7);
        setIsFullyTyped(true);
      } else {
        const step = (endProgress - startProgress) / targetLetters.length;
        const index = Math.floor((scrollProgress - startProgress) / step);
        setActiveKeyIndex(Math.min(Math.max(index, 0), 7));
        setIsFullyTyped(index >= 7);
      }
    }
  }, [scrollProgress, autoPlay, isMobile]);

  // Autoplay function
  const handleAutoPlay = () => {
    setAutoPlay(true);
    setActiveKeyIndex(0);
    setIsFullyTyped(false);

    let current = 0;
    const interval = setInterval(() => {
      setActiveKeyIndex(current);
      if (current >= targetLetters.length - 1) {
        setIsFullyTyped(true);
        clearInterval(interval);
        setTimeout(() => setAutoPlay(false), 800);
      } else {
        current++;
      }
    }, 260);
  };

  const handleReset = () => {
    setAutoPlay(false);
    setActiveKeyIndex(isMobile ? 0 : -1);
    setIsFullyTyped(false);
  };

  const [streamedTextLength, setStreamedTextLength] = useState(0);

  const fullStoryP1 =
    'A FACOM TechWeek é a tradicional semana acadêmica e científica da Faculdade de Computação (FACOM) da Universidade Federal de Uberlândia (UFU). O evento integra a comunidade acadêmica e profissional da área de Tecnologia da Informação em Uberlândia e região, promovendo palestras de ponta, minicursos práticos, mesas-redondas e mostras de tecnologia no Campus Santa Mônica.';

  const fullStoryP2 =
    'Realizada em conjunto com o Workshop de Teses e Dissertações em Ciência da Computação (WTDCC) pelo Programa de Pós-Graduação da UFU, a TechWeek conecta a excelência da pesquisa universitária às maiores empresas e aos desafios mais inovadores do mercado global.';

  const totalChars = fullStoryP1.length + fullStoryP2.length;

  // Smooth 2-second typewriter / streaming reveal of the story text when fully typed
  useEffect(() => {
    let animationFrame;
    if (isFullyTyped) {
      const startTime = performance.now();
      const duration = 2000; // 2 seconds smooth animation

      const animateText = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const charsToShow = Math.floor(progress * totalChars);
        setStreamedTextLength(charsToShow);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animateText);
        }
      };

      animationFrame = requestAnimationFrame(animateText);
    } else {
      setStreamedTextLength(0);
    }

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [isFullyTyped, totalChars]);

  // Keyboard Rows layout
  const row1 = ['ESC', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'DEL'];
  const row2 = ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', 'BACK'];
  const row3 = ['TAB', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'];
  const row4 = ['CAPS', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'ENTER'];
  const row5 = ['SHIFT', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'SHIFT'];
  const row6 = ['CTRL', 'WIN', 'ALT', 'SPACEBAR // FACOM UFU 2026', 'ALT', 'FN', 'CTRL'];

  const isKeyActive = (keyChar) => {
    if (activeKeyIndex < 0) return false;
    const activeTarget = targetLetters[activeKeyIndex];
    return keyChar.toUpperCase() === activeTarget;
  };

  // Exact original 3D perspective tilt on desktop, straight-on view on mobile
  const rotateX = isMobile ? (15 - scrollProgress * 6) : (28 - scrollProgress * 14);
  const rotateY = isMobile ? 0 : (-6 + scrollProgress * 6);
  const scale = 0.96 + scrollProgress * 0.05;

  const typedWord = activeKeyIndex >= 0 ? targetLetters.slice(0, activeKeyIndex + 1).join('') : '';

  // Dynamically growing numbers as user scrolls down: exact original desktop formula, mobile formula for fast completion
  const numberProgress = isMobile
    ? (isFullyTyped ? 1 : Math.min(Math.max(scrollProgress / 0.85, 0), 1))
    : (isFullyTyped ? 1 : Math.min(Math.max((scrollProgress - 0.05) / 0.65, 0), 1));

  const valParticipantes = Math.round(numberProgress * 450);
  const valTradicao = Math.round(numberProgress * 13);
  const valImersao = Math.round(numberProgress * 40);
  const valPalestras = Math.round(numberProgress * 15);

  // Compute sliced paragraphs for smooth typing
  const p1Visible = fullStoryP1.slice(0, Math.min(streamedTextLength, fullStoryP1.length));
  const p2Visible =
    streamedTextLength > fullStoryP1.length
      ? fullStoryP2.slice(0, streamedTextLength - fullStoryP1.length)
      : '';

  return (
    <div
      ref={sectionRef}
      id="sobre"
      style={{
        position: 'relative',
        minHeight: isMobile ? '135vh' : '260vh',
        background:
          'radial-gradient(circle at 75% 25%, rgba(139, 92, 246, 0.45) 0%, rgba(99, 32, 238, 0.35) 40%, rgba(30, 8, 66, 0.95) 100%), #1c063b',
        borderBottom: '1px solid rgba(168, 85, 247, 0.35)',
      }}
    >
      {/* Sticky Container pinning the interactive 3D keyboard, screen and stats */}
      <div
        className="stats-sticky-wrapper"
        style={{
          position: 'sticky',
          top: '70px',
          minHeight: 'calc(100vh - 70px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          padding: '1rem 0 2rem 0',
          overflow: 'visible',
          zIndex: 10,
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

        {/* Ambient Glows */}
        <div
          style={{
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '850px',
            height: '550px',
            background: 'radial-gradient(circle, rgba(121, 40, 202, 0.4) 0%, transparent 70%)',
            filter: 'blur(95px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '1150px' }}>
          {/* Top Keystroke Tracker & Controls */}
          <div className="stats-top-controls">
            {/* Letter Indicator Pills */}
            <div className="stats-pills-wrap">
              {targetLetters.map((letter, idx) => {
                const isDone = idx <= activeKeyIndex;
                const isCurrent = idx === activeKeyIndex;
                return (
                  <span
                    key={idx}
                    className={`stats-letter-pill ${isCurrent ? 'pill-current' : isDone ? 'pill-done' : ''}`}
                  >
                    {letter}
                  </span>
                );
              })}
            </div>

            {/* Actions group */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexShrink: 0 }}>
              <button
                onClick={handleAutoPlay}
                className="stats-auto-btn"
                title="Digitar automaticamente"
              >
                <Play size={12} fill="#c084fc" />
                <span>AUTO</span>
              </button>

              <button
                onClick={handleReset}
                className="stats-reset-btn"
                title="Reiniciar digitação"
              >
                <RotateCcw size={13} />
              </button>
            </div>
          </div>

          {/* Holographic Cyber Screen (Expands smoothly with scroll and gentle 2s letter stream) */}
          <div
            style={{
              background: 'linear-gradient(180deg, rgba(30, 8, 68, 0.96) 0%, rgba(16, 4, 38, 0.98) 100%)',
              border: isFullyTyped
                ? '1px solid rgba(0, 210, 255, 0.65)'
                : '1px solid rgba(168, 85, 247, 0.45)',
              borderRadius: '1.4rem',
              padding: isFullyTyped ? '1.8rem 2.2rem' : '1.15rem 1.6rem',
              boxShadow: isFullyTyped
                ? '0 25px 60px -15px rgba(0, 210, 255, 0.3), 0 0 45px rgba(121, 40, 202, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.2)'
                : '0 20px 45px -10px rgba(0, 0, 0, 0.85), 0 0 25px rgba(121, 40, 202, 0.25)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              transition: 'padding 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, box-shadow 0.4s ease',
              position: 'relative',
              marginBottom: '1rem',
              overflow: 'hidden',
            }}
            className="terminal-screen-expanded"
          >
            {/* Terminal Header Bar */}
            <div
              className="terminal-header-bar"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(168, 85, 247, 0.3)',
                paddingBottom: '0.65rem',
                marginBottom: '0.85rem',
                gap: '0.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', minWidth: 0 }}>
                <div style={{ display: 'flex', gap: '4px', flexShrink: 0 }}>
                  <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#ef4444' }} />
                  <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#f59e0b' }} />
                  <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#10b981' }} />
                </div>
                <span
                  className="terminal-title-text"
                  style={{
                    color: '#c084fc',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    marginLeft: '0.4rem',
                    letterSpacing: '0.04em',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  SOBRE_FACOM_TECHWEEK_2026.exe
                </span>
              </div>

              <div style={{ flexShrink: 0 }}>
                <span
                  className="terminal-status-text"
                  style={{
                    fontSize: '0.72rem',
                    color: isFullyTyped ? '#00d2ff' : '#a78bfa',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    letterSpacing: '0.03em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {isFullyTyped ? 'ACESSO TOTAL LIBERADO ✓' : 'DIGITANDO NO TECLADO 3D...'}
                </span>
              </div>
            </div>

            {/* Live Command Line Prompt */}
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.92rem, 1.8vw, 1.25rem)',
                color: '#ffffff',
                marginBottom: isFullyTyped ? '0.85rem' : '0.45rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                flexWrap: 'wrap',
              }}
            >
              <span style={{ color: '#00d2ff' }}>user@facom-ufu:~$</span>
              <span style={{ color: '#c084fc' }}>exec --sobre</span>
              <span
                style={{
                  color: '#ffffff',
                  fontWeight: 900,
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '0.12em',
                  textShadow: '0 0 15px rgba(0, 210, 255, 0.8)',
                }}
              >
                {typedWord}
              </span>
              <span className="blinking-cursor" style={{ color: '#00d2ff', fontWeight: 900 }}>
                _
              </span>
            </div>

            {/* Complete Story & Content with Smooth 2s Letter Stream */}
            <div
              style={{
                maxHeight: isFullyTyped ? '500px' : '0px',
                opacity: isFullyTyped ? 1 : 0,
                transition: 'max-height 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  borderTop: '1px solid rgba(0, 210, 255, 0.3)',
                  paddingTop: '1rem',
                }}
              >
                <h3
                  style={{
                    fontSize: 'clamp(1.15rem, 2vw, 1.55rem)',
                    fontWeight: 900,
                    color: '#ffffff',
                    fontFamily: 'var(--font-heading)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    marginBottom: '0.85rem',
                    lineHeight: 1.3,
                  }}
                >
                  INOVAÇÃO TECNOLÓGICA PARA UM{' '}
                  <span style={{ color: '#00d2ff', textShadow: '0 0 25px rgba(0, 210, 255, 0.6)' }}>
                    MUNDO CONECTADO
                  </span>
                </h3>

                <p
                  style={{
                    color: '#f1f5f9',
                    fontSize: '0.95rem',
                    lineHeight: 1.8,
                    marginBottom: '0.85rem',
                    minHeight: '2.5rem',
                  }}
                >
                  {p1Visible}
                  {streamedTextLength < fullStoryP1.length && isFullyTyped && (
                    <span style={{ color: '#00d2ff', fontWeight: 900 }}>▌</span>
                  )}
                </p>

                {streamedTextLength >= fullStoryP1.length && (
                  <p
                    style={{
                      color: '#cbd5e1',
                      fontSize: '0.92rem',
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {p2Visible}
                    {streamedTextLength < totalChars && isFullyTyped && (
                      <span style={{ color: '#00d2ff', fontWeight: 900 }}>▌</span>
                    )}
                  </p>
                )}
              </div>
            </div>

            {!isFullyTyped && (
              <p
                style={{
                  color: '#94a3b8',
                  fontSize: '0.88rem',
                  margin: 0,
                  fontFamily: 'var(--font-mono)',
                  lineHeight: 1.5,
                }}
              >
                &gt; Role a página para pressionar as teclas no teclado 3D abaixo e desbloquear o sobre da TechWeek...
              </p>
            )}
          </div>
        </div>

        {/* 3D Interactive Mechanical Cyber Keyboard */}
        <div
          style={{
            perspective: '1200px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'visible',
            paddingBottom: '0.5rem',
            margin: '0 auto',
          }}
          className="keyboard-3d-perspective-box"
        >
          <div
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
              transition: 'transform 0.15s ease-out',
              background: 'linear-gradient(145deg, #1a0638 0%, #0d0220 100%)',
              border: '2px solid rgba(168, 85, 247, 0.5)',
              borderRadius: '1.5rem',
              padding: '1.15rem 1.4rem',
              boxShadow:
                '0 30px 65px -15px rgba(0, 0, 0, 0.95), 0 0 50px rgba(121, 40, 202, 0.35), inset 0 2px 3px rgba(255, 255, 255, 0.25), inset 0 -6px 12px rgba(0, 0, 0, 0.85)',
              maxWidth: '920px',
              width: '95%',
              position: 'relative',
            }}
            className="keyboard-chassis"
          >
            {/* RGB Underglow LED Strip */}
            <div
              style={{
                position: 'absolute',
                inset: '-4px',
                borderRadius: '1.6rem',
                background: 'linear-gradient(90deg, #00d2ff, #7928ca, #9333ea, #0070f3)',
                opacity: 0.45,
                filter: 'blur(10px)',
                zIndex: -1,
              }}
            />

            {/* Keyboard Rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.42rem' }}>
              {/* Row 1 */}
              <div style={{ display: 'flex', gap: '0.35rem', justifyContent: 'space-between' }}>
                {row1.map((k, i) => (
                  <KeyCap key={i} label={k} isActive={isKeyActive(k)} size="sm" />
                ))}
              </div>

              {/* Row 2 */}
              <div style={{ display: 'flex', gap: '0.35rem', justifyContent: 'space-between' }}>
                {row2.map((k, i) => (
                  <KeyCap key={i} label={k} isActive={isKeyActive(k)} size={k === 'BACK' ? 'lg' : 'default'} />
                ))}
              </div>

              {/* Row 3 */}
              <div style={{ display: 'flex', gap: '0.35rem', justifyContent: 'space-between' }}>
                {row3.map((k, i) => (
                  <KeyCap
                    key={i}
                    label={k}
                    isActive={isKeyActive(k)}
                    isTargetKey={['T', 'E', 'W'].includes(k)}
                    size={k === 'TAB' ? 'lg' : 'default'}
                  />
                ))}
              </div>

              {/* Row 4 */}
              <div style={{ display: 'flex', gap: '0.35rem', justifyContent: 'space-between' }}>
                {row4.map((k, i) => (
                  <KeyCap
                    key={i}
                    label={k}
                    isActive={isKeyActive(k)}
                    isTargetKey={['H', 'K'].includes(k)}
                    size={['CAPS', 'ENTER'].includes(k) ? 'xl' : 'default'}
                  />
                ))}
              </div>

              {/* Row 5 */}
              <div style={{ display: 'flex', gap: '0.35rem', justifyContent: 'space-between' }}>
                {row5.map((k, i) => (
                  <KeyCap
                    key={i}
                    label={k}
                    isActive={isKeyActive(k)}
                    isTargetKey={k === 'C'}
                    size={k === 'SHIFT' ? 'xl' : 'default'}
                  />
                ))}
              </div>

              {/* Row 6 (Spacebar) */}
              <div style={{ display: 'flex', gap: '0.35rem', justifyContent: 'space-between' }}>
                {row6.map((k, i) => (
                  <KeyCap
                    key={i}
                    label={k}
                    isActive={isKeyActive(k)}
                    size={k.includes('SPACEBAR') ? 'spacebar' : 'default'}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row Below Keyboard: Numbers Growing with Scroll, NO enclosing card/box, Generous Spacing, Big Numbers & Small Purple Text */}
        <div
          className="container stats-below-keyboard-container"
          style={{
            width: '100%',
            maxWidth: '1150px',
            position: 'relative',
            zIndex: 10,
            marginTop: '2.5rem',
            marginBottom: '0.5rem',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.5rem',
              background: 'transparent',
              padding: '0.5rem 0',
            }}
            className="stats-below-keyboard-grid"
          >
            {/* Stat 1: 450+ PARTICIPANTES */}
            <div style={{ textAlign: 'center', padding: '0.5rem 0.5rem' }}>
              <span
                style={{
                  fontSize: 'clamp(2.5rem, 4.5vw, 4rem)',
                  fontWeight: 900,
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '0.02em',
                  color: '#ffffff',
                  display: 'block',
                  lineHeight: 1.1,
                  marginBottom: '0.55rem',
                }}
              >
                {valParticipantes}+
              </span>
              <span
                style={{
                  color: '#c084fc',
                  fontSize: 'clamp(0.72rem, 1vw, 0.84rem)',
                  fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  display: 'block',
                  lineHeight: 1.4,
                }}
              >
                PARTICIPANTES
              </span>
            </div>

            {/* Stat 2: 13+ ANOS / TRADIÇÃO FACOM */}
            <div style={{ textAlign: 'center', padding: '0.5rem 0.5rem' }} className="stat-sub-col">
              <span
                style={{
                  fontSize: 'clamp(2.5rem, 4.5vw, 4rem)',
                  fontWeight: 900,
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '0.02em',
                  color: '#ffffff',
                  display: 'block',
                  lineHeight: 1.1,
                  marginBottom: '0.55rem',
                }}
              >
                {valTradicao}+
              </span>
              <span
                style={{
                  color: '#c084fc',
                  fontSize: 'clamp(0.72rem, 1vw, 0.84rem)',
                  fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  display: 'block',
                  lineHeight: 1.4,
                }}
              >
                ANOS
                <br />
                TRADIÇÃO FACOM
              </span>
            </div>

            {/* Stat 3: 40 HORAS / IMERSÃO / CERTIFICADO */}
            <div style={{ textAlign: 'center', padding: '0.5rem 0.5rem' }} className="stat-sub-col">
              <span
                style={{
                  fontSize: 'clamp(2.5rem, 4.5vw, 4rem)',
                  fontWeight: 900,
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '0.02em',
                  color: '#ffffff',
                  display: 'block',
                  lineHeight: 1.1,
                  marginBottom: '0.55rem',
                }}
              >
                {valImersao}
              </span>
              <span
                style={{
                  color: '#c084fc',
                  fontSize: 'clamp(0.72rem, 1vw, 0.84rem)',
                  fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  display: 'block',
                  lineHeight: 1.4,
                }}
              >
                HORAS
                <br />
                IMERSÃO / CERTIFICADO
              </span>
            </div>

            {/* Stat 4: 15+ SESSÕES / PALESTRAS & WORKSHOPS */}
            <div style={{ textAlign: 'center', padding: '0.5rem 0.5rem' }} className="stat-sub-col">
              <span
                style={{
                  fontSize: 'clamp(2.5rem, 4.5vw, 4rem)',
                  fontWeight: 900,
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '0.02em',
                  color: '#ffffff',
                  display: 'block',
                  lineHeight: 1.1,
                  marginBottom: '0.55rem',
                }}
              >
                {valPalestras}+
              </span>
              <span
                style={{
                  color: '#c084fc',
                  fontSize: 'clamp(0.72rem, 1vw, 0.84rem)',
                  fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  display: 'block',
                  lineHeight: 1.4,
                }}
              >
                SESSÕES
                <br />
                PALESTRAS & WORKSHOPS
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .blinking-cursor {
          animation: blink 0.8s infinite;
        }

        .stats-top-controls {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin-bottom: 0.75rem;
          gap: 0.6rem;
          width: 100%;
          flex-wrap: nowrap;
        }

        .stats-pills-wrap {
          display: flex;
          gap: 0.35rem;
          background: rgba(15, 6, 36, 0.85);
          padding: 0.35rem 0.65rem;
          border-radius: 0.75rem;
          border: 1px solid rgba(168, 85, 247, 0.3);
          align-items: center;
          max-width: 100%;
          overflow-x: auto;
        }

        .stats-letter-pill {
          width: 26px;
          height: 26px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 900;
          font-family: var(--font-heading);
          background: rgba(255, 255, 255, 0.06);
          color: #64748b;
          border: 1px solid transparent;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .stats-letter-pill.pill-done {
          background: rgba(147, 51, 234, 0.45);
          color: #ffffff;
          border: 1px solid rgba(192, 132, 252, 0.4);
        }

        .stats-letter-pill.pill-current {
          background: linear-gradient(135deg, #00d2ff, #2563eb);
          color: #ffffff;
          border: 1px solid #00d2ff;
          box-shadow: 0 0 12px rgba(0, 210, 255, 0.8);
        }

        .stats-auto-btn {
          background: rgba(121, 40, 202, 0.3);
          border: 1px solid rgba(192, 132, 252, 0.5);
          color: #ffffff;
          padding: 0.4rem 0.8rem;
          border-radius: 0.6rem;
          font-size: 0.72rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-family: var(--font-heading);
          letter-spacing: 0.04em;
          white-space: nowrap;
        }

        .stats-reset-btn {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #cbd5e1;
          padding: 0.4rem 0.6rem;
          border-radius: 0.6rem;
          font-size: 0.72rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 992px) {
          .keyboard-chassis {
            transform: scale(0.82) !important;
            transform-origin: center top !important;
          }
          .stats-below-keyboard-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }
        }

        @media (max-width: 640px) {
          .stats-sticky-wrapper {
            top: 60px !important;
            min-height: calc(100vh - 60px) !important;
            padding: 0.6rem 0 1.5rem 0 !important;
          }
          .stats-top-controls {
            justify-content: space-between !important;
            margin-bottom: 0.55rem !important;
            gap: 0.35rem !important;
          }
          .stats-pills-wrap {
            padding: 0.25rem 0.4rem !important;
            gap: 0.2rem !important;
          }
          .stats-letter-pill {
            width: 20px !important;
            height: 20px !important;
            font-size: 0.65rem !important;
            border-radius: 4px !important;
          }
          .stats-auto-btn {
            padding: 0.32rem 0.55rem !important;
            font-size: 0.65rem !important;
          }
          .stats-reset-btn {
            padding: 0.32rem 0.45rem !important;
          }
          .terminal-title-text {
            font-size: 0.65rem !important;
            max-width: 140px;
          }
          .terminal-status-text {
            font-size: 0.62rem !important;
          }
          .terminal-screen-expanded {
            padding: 0.95rem 0.95rem !important;
            border-radius: 0.9rem !important;
            margin-bottom: 0.6rem !important;
          }
          .keyboard-chassis {
            width: 780px !important;
            min-width: 780px !important;
            max-width: 780px !important;
            box-sizing: border-box !important;
            transform: scale(0.48) !important;
            transform-origin: top center !important;
            margin: 0 auto !important;
          }
          .keyboard-3d-perspective-box {
            height: 175px !important;
            display: flex !important;
            justify-content: center !important;
            align-items: flex-start !important;
            overflow: hidden !important;
            padding-bottom: 0 !important;
            margin: 0 auto !important;
            width: 100% !important;
          }
          .stats-below-keyboard-container {
            margin-top: 0.75rem !important;
          }
          .stats-below-keyboard-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem 0.5rem !important;
          }
        }

        @media (max-width: 420px) {
          .stats-letter-pill {
            width: 18px !important;
            height: 18px !important;
            font-size: 0.6rem !important;
          }
          .terminal-title-text {
            max-width: 110px;
          }
          .keyboard-chassis {
            transform: scale(0.41) !important;
            transform-origin: top center !important;
            margin: 0 auto !important;
          }
          .keyboard-3d-perspective-box {
            height: 150px !important;
          }
        }

        @media (max-width: 360px) {
          .stats-letter-pill {
            width: 16px !important;
            height: 16px !important;
            font-size: 0.55rem !important;
          }
          .keyboard-chassis {
            transform: scale(0.36) !important;
            transform-origin: top center !important;
            margin: 0 auto !important;
          }
          .keyboard-3d-perspective-box {
            height: 135px !important;
          }
        }
      `}</style>
    </div>
  );
}

// 3D KeyCap Subcomponent
function KeyCap({ label, isActive, isTargetKey, size = 'default' }) {
  let flexGrow = 1;
  let minWidth = '32px';

  if (size === 'sm') {
    minWidth = '24px';
    flexGrow = 0.8;
  } else if (size === 'lg') {
    minWidth = '48px';
    flexGrow = 1.4;
  } else if (size === 'xl') {
    minWidth = '62px';
    flexGrow = 1.8;
  } else if (size === 'spacebar') {
    minWidth = '200px';
    flexGrow = 5;
  }

  return (
    <div
      style={{
        flex: `${flexGrow} 1 0`,
        minWidth: minWidth,
        height: '38px',
        borderRadius: '7px',
        background: isActive
          ? 'linear-gradient(180deg, #00d2ff 0%, #0070f3 100%)'
          : isTargetKey
          ? 'linear-gradient(180deg, #3c1372 0%, #1e0740 100%)'
          : 'linear-gradient(180deg, #250952 0%, #13032c 100%)',
        border: isActive
          ? '1px solid #ffffff'
          : isTargetKey
          ? '1px solid rgba(192, 132, 252, 0.75)'
          : '1px solid rgba(147, 51, 234, 0.28)',
        boxShadow: isActive
          ? '0 0 25px rgba(0, 210, 255, 0.95), inset 0 2px 4px rgba(255, 255, 255, 0.85), 0 1px 0 rgba(0, 0, 0, 0.9)'
          : isTargetKey
          ? '0 4px 12px rgba(121, 40, 202, 0.45), inset 0 1px 2px rgba(255, 255, 255, 0.2), 0 3px 0 #090114'
          : '0 3px 6px rgba(0, 0, 0, 0.65), inset 0 1px 1px rgba(255, 255, 255, 0.08), 0 3px 0 #06010e',
        transform: isActive ? 'translateY(3px) scale(0.96)' : 'translateY(0)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: isActive ? '#ffffff' : isTargetKey ? '#f3e8ff' : '#94a3b8',
        fontSize: size === 'spacebar' ? '0.65rem' : size === 'sm' ? '0.62rem' : '0.74rem',
        fontWeight: isTargetKey || isActive ? 900 : 600,
        fontFamily: 'var(--font-heading)',
        letterSpacing: '0.04em',
        userSelect: 'none',
        transition: 'all 0.1s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="keycap-3d"
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '40%',
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%)',
          borderRadius: '6px 6px 0 0',
          pointerEvents: 'none',
        }}
      />
      <span style={{ position: 'relative', zIndex: 2, textShadow: isActive ? '0 0 10px #ffffff' : 'none' }}>
        {label}
      </span>
    </div>
  );
}
