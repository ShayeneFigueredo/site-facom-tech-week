import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import MascotDuo from './MascotDuo.jsx';

export default function HeroBanner({ onOpenModal }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // Mouse position state for particle generation & subtle tilt
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000, normX: 0, normY: 0 });
  const [mascotTilt, setMascotTilt] = useState({ rotX: 0, rotY: 0 });
  const [mascotHovered, setMascotHovered] = useState(false);

  // Mouse move handler
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normX = (x / rect.width - 0.5) * 2;
    const normY = (y / rect.height - 0.5) * 2;

    setMousePos({ x, y, normX, normY });

    // Subtle 3D tilt for mascot base
    setMascotTilt({
      rotX: -normY * 5,
      rotY: normX * 6,
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -1000, y: -1000, normX: 0, normY: 0 });
    setMascotTilt({ rotX: 0, rotY: 0 });
    setMascotHovered(false);
  };

  // 1. Particle System: Atmospheric Dust + Refined Mouse Stardust Trail (2-3s decay)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrame;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // A) Background Ethereal Cosmic Dust Particles (Esparsas e lentas)
    const ambientParticlesCount = 45;
    const ambientParticles = [];

    for (let i = 0; i < ambientParticlesCount; i++) {
      ambientParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 2 + 0.5,
        radius: Math.random() * 1.8 + 0.6,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2 - 0.1,
        alpha: Math.random() * 0.35 + 0.1,
        color: i % 2 === 0 ? '#00d2ff' : '#c084fc',
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // B) Mouse Trail Particles Array (Rastro de Poeira Estelar com Decay de 2-3s)
    const trailParticles = [];
    let prevMouseX = -1000;
    let prevMouseY = -1000;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // ---------------------------------------------------------------------
      // 1. RENDER & UPDATE AMBIENT ETHEREAL DUST PARTICLES
      // ---------------------------------------------------------------------
      ambientParticles.forEach((p) => {
        // Proximity to mouse
        const dx = p.x - mousePos.x;
        const dy = p.y - mousePos.y;
        const distMouse = Math.hypot(dx, dy);
        const isNearMouse = distMouse < 110;
        const mouseProximityFactor = isNearMouse ? (110 - distMouse) / 110 : 0;

        // Slow down smoothly when in contact with mouse
        const speedMult = 1 - mouseProximityFactor * 0.75;
        p.x += p.vx * speedMult;
        p.y += p.vy * speedMult;
        p.pulsePhase += 0.015;

        // Wrap around screen boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Points expand in size and glow intensely when near mouse
        const baseRadius = p.radius + mouseProximityFactor * 3.5;
        const currentAlpha = Math.min(0.85, (p.alpha + Math.sin(p.pulsePhase) * 0.08) + mouseProximityFactor * 0.5);

        ctx.beginPath();
        ctx.arc(p.x, p.y, baseRadius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.05, currentAlpha);
        ctx.shadowColor = p.color;
        ctx.shadowBlur = baseRadius * (isNearMouse ? 5 : 3);
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      });

      // ---------------------------------------------------------------------
      // 2. SPAWN MOUSE STARDUST TRAIL PARTICLES (Maiores e mais lentos)
      // ---------------------------------------------------------------------
      if (mousePos.x > 0 && mousePos.y > 0) {
        const dist = Math.hypot(mousePos.x - prevMouseX, mousePos.y - prevMouseY);
        // Only spawn if mouse is actually moving
        if (dist > 3) {
          const spawnCount = Math.min(3, Math.floor(dist / 6) + 1);
          for (let i = 0; i < spawnCount; i++) {
            const isCyan = Math.random() > 0.45;
            trailParticles.push({
              x: mousePos.x + (Math.random() - 0.5) * 18,
              y: mousePos.y + (Math.random() - 0.5) * 18,
              vx: (Math.random() - 0.5) * 0.15, // Movimento bem lento
              vy: -0.06 - Math.random() * 0.12, // Deriva sutil e lenta para cima
              size: Math.random() * 3.2 + 3.8, // Pontos maiores (3.8px a 7.0px)
              life: 1.0,
              decayRate: 0.005 + Math.random() * 0.0035, // Decay mais lento (~3-4 segundos)
              color: isCyan ? '#00d2ff' : '#c084fc',
            });
          }
          prevMouseX = mousePos.x;
          prevMouseY = mousePos.y;
        }
      }

      // ---------------------------------------------------------------------
      // 3. RENDER & UPDATE MOUSE TRAIL STARDUST
      // ---------------------------------------------------------------------
      for (let i = trailParticles.length - 1; i >= 0; i--) {
        const tp = trailParticles[i];
        tp.x += tp.vx;
        tp.y += tp.vy;
        tp.life -= tp.decayRate;

        if (tp.life <= 0) {
          trailParticles.splice(i, 1);
          continue;
        }

        const alpha = Math.sin(tp.life * Math.PI * 0.5); // Fade out suave

        ctx.beginPath();
        ctx.arc(tp.x, tp.y, tp.size * tp.life, 0, Math.PI * 2);
        ctx.fillStyle = tp.color;
        ctx.globalAlpha = alpha;
        ctx.shadowColor = tp.color;
        ctx.shadowBlur = tp.life * 16;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      }

      animationFrame = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', handleResize);
    };
  }, [mousePos]);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      id="inicio"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '120px',
        paddingBottom: '80px',
        overflow: 'hidden',
        background: '#050816', // Deep Navy limpo (O Vazio Atmosférico)
      }}
    >
      {/* Canvas de Partículas Etéreas & Rastro de Poeira Estelar do Mouse */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 3,
        }}
      />

      {/* Volumetric Soft Bloom Aura behind the Apex Logo */}
      <div
        style={{
          position: 'absolute',
          top: '28%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(780px, 85vw)',
          height: 'min(480px, 50vh)',
          background:
            'radial-gradient(circle at 50% 50%, rgba(0, 210, 255, 0.28) 0%, rgba(147, 51, 234, 0.22) 40%, rgba(5, 8, 22, 0) 75%)',
          filter: 'blur(110px)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* Main Monumental Altar Vertical Container */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '920px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '2.5rem',
        }}
      >
        {/* 2.1 O ÁPICE: O LOGOTIPO COMO ARTEFATO DE LUZ (Volumetric Bloom) */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <img
            src="/logo-banner.png"
            alt="FACOM TECHWEEK 2026"
            style={{
              width: '100%',
              maxWidth: '560px',
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
              filter:
                'drop-shadow(0 0 45px rgba(0, 210, 255, 0.45)) drop-shadow(0 0 85px rgba(147, 51, 234, 0.35)) drop-shadow(0 20px 40px rgba(0,0,0,0.9))',
              transition: 'transform 0.5s ease, filter 0.5s ease',
            }}
            className="monumental-apex-logo"
          />
        </div>

        {/* 2.2 A MENSAGEM: AS INFORMAÇÕES ESSENCIAIS */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.25rem',
            maxWidth: '780px',
          }}
        >
          {/* Status Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.45rem 1.25rem',
              borderRadius: '9999px',
              background: 'rgba(0, 210, 255, 0.07)',
              border: '1px solid rgba(0, 210, 255, 0.28)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              boxShadow: '0 4px 20px rgba(0, 210, 255, 0.15)',
            }}
          >
            <Zap size={14} color="#00d2ff" />
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              FACOM TECHWEEK // NÚCLEO DE INOVAÇÃO 2026
            </span>
          </div>

          {/* Slogan e Datas Principais */}
          <h2
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
              fontWeight: 700,
              color: '#f1f5f9',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              margin: 0,
              lineHeight: 1.5,
              opacity: 0.95,
            }}
          >
            DE 21 A 24 DE OUTUBRO DE 2026 • CAMPUS SANTA MÔNICA • FACOM / UFU
          </h2>

          <p
            style={{
              fontSize: 'clamp(0.9rem, 1.2vw, 1.02rem)',
              color: '#94a3b8',
              margin: 0,
              lineHeight: 1.6,
              maxWidth: '640px',
            }}
          >
            Conectando mentes brilhantes através de palestras, minicursos, workshops, hackathon, recrutamento e networking na maior semana de tecnologia da UFU.
          </p>

          {/* Botões de Ação CTAs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.25rem',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: '0.75rem',
            }}
          >
            <button
              onClick={onOpenModal}
              style={{
                background: '#ffffff',
                color: '#060d24',
                fontSize: '1.05rem',
                fontWeight: 800,
                padding: '1rem 2.6rem',
                borderRadius: '0.75rem',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 10px 35px rgba(0, 210, 255, 0.35), 0 0 25px rgba(255, 255, 255, 0.3)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                fontFamily: 'var(--font-heading)',
              }}
              className="monumental-btn-primary"
            >
              <span>Garantir Ingresso</span>
              <ArrowRight size={18} />
            </button>

            <a
              href="#programacao"
              style={{
                background: 'rgba(14, 22, 52, 0.75)',
                color: '#ffffff',
                fontSize: '1.05rem',
                fontWeight: 600,
                padding: '1rem 2.3rem',
                borderRadius: '0.75rem',
                border: '1px solid rgba(0, 210, 255, 0.3)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-heading)',
              }}
              className="monumental-btn-secondary"
            >
              <span>Ver Programação</span>
            </a>
          </div>
        </div>

        {/* 3. A BASE: OS GUARDIÕES INTEGRADOS (Apenas os Mascotes Centralizados) */}
        <div
          onMouseEnter={() => setMascotHovered(true)}
          onMouseLeave={() => setMascotHovered(false)}
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '0.5rem',
            width: '100%',
            maxWidth: '460px',
            transform: `perspective(1000px) rotateX(${mascotTilt.rotX}deg) rotateY(${mascotTilt.rotY}deg)`,
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className="monumental-mascot-base"
        >
          {/* Mascotes Autênticos Teko & Weeka Centralizados na Base */}
          <div
            style={{
              width: '100%',
              maxWidth: '440px',
              filter: mascotHovered
                ? 'drop-shadow(0 0 35px #00d2ff) drop-shadow(0 0 45px #c084fc) drop-shadow(0 20px 40px rgba(0,0,0,0.85))'
                : 'drop-shadow(0 15px 35px rgba(0, 0, 0, 0.75)) drop-shadow(0 0 25px rgba(0, 210, 255, 0.22))',
              transform: mascotHovered ? 'scale(1.05) translateY(-6px)' : 'scale(1) translateY(0)',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              animation: 'monumentalMascotIdle 6s ease-in-out infinite',
            }}
          >
            <MascotDuo />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes monumentalMascotIdle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .monumental-btn-primary:hover {
          background: #ffffff !important;
          color: #060d24 !important;
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 14px 40px rgba(0, 210, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.45) !important;
        }

        .monumental-btn-secondary:hover {
          background: rgba(22, 34, 72, 0.9) !important;
          border-color: rgba(0, 210, 255, 0.7) !important;
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 12px 35px rgba(0, 210, 255, 0.3) !important;
        }

        @media (max-width: 768px) {
          .monumental-apex-logo {
            max-width: 380px !important;
          }
          .monumental-mascot-base {
            max-width: 380px !important;
          }
        }
      `}</style>
    </section>
  );
}
