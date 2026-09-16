import React, { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Conductor mouse tracking with silky smooth damping (lerp)
    const mouse = {
      x: -2000,
      y: -2000,
      targetX: -2000,
      targetY: -2000,
      smoothX: -2000,
      smoothY: -2000,
      prevSmoothX: -2000,
      prevSmoothY: -2000,
      vx: 0,
      vy: 0,
      speed: 0,
      isInside: false,
    };

    // Camera 3D orientation & parallax - positioned higher to elevate the mesh
    const camera = {
      rotX: 0.28,
      rotY: 0,
      targetRotX: 0.28,
      targetRotY: 0,
      fov: 540,
      camY: -200,
      camZ: -260,
    };

    // Resize handling with devicePixelRatio for crisp Retina rendering
    const handleResize = () => {
      const parent = canvas.parentElement;
      width = parent ? parent.offsetWidth : window.innerWidth;
      height = parent ? parent.offsetHeight : window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Global window mouse listener ensures 100% responsiveness without blocking
    const handleWindowMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Active inside the full hero + sponsors bounds
      const inside = x >= -100 && x <= rect.width + 100 && y >= -100 && y <= rect.height + 100;

      if (inside) {
        if (!mouse.isInside || mouse.smoothX < -1000) {
          mouse.smoothX = x;
          mouse.smoothY = y;
          mouse.prevSmoothX = x;
          mouse.prevSmoothY = y;
        }

        mouse.x = x;
        mouse.y = y;
        mouse.targetX = x;
        mouse.targetY = y;
        mouse.isInside = true;

        // Smooth 3D Camera parallax response
        const normX = (x / width - 0.5) * 2;
        const normY = (y / height - 0.5) * 2;
        camera.targetRotY = normX * 0.16;
        camera.targetRotX = 0.28 + normY * 0.1;
      } else {
        mouse.isInside = false;
        mouse.targetX = -2000;
        mouse.targetY = -2000;
        camera.targetRotY = 0;
        camera.targetRotX = 0.28;
      }
    };

    const handleWindowMouseLeave = () => {
      mouse.isInside = false;
      mouse.targetX = -2000;
      mouse.targetY = -2000;
      mouse.speed = 0;
      camera.targetRotY = 0;
      camera.targetRotX = 0.28;
    };

    const handleWindowTouch = (e) => {
      if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;

        const inside = x >= -100 && x <= rect.width + 100 && y >= -100 && y <= rect.height + 100;

        if (inside) {
          if (!mouse.isInside || mouse.smoothX < -1000) {
            mouse.smoothX = x;
            mouse.smoothY = y;
            mouse.prevSmoothX = x;
            mouse.prevSmoothY = y;
          }

          mouse.x = x;
          mouse.y = y;
          mouse.targetX = x;
          mouse.targetY = y;
          mouse.isInside = true;

          const normX = (x / width - 0.5) * 2;
          const normY = (y / height - 0.5) * 2;
          camera.targetRotY = normX * 0.16;
          camera.targetRotX = 0.28 + normY * 0.1;
        }
      }
    };

    const handleWindowTouchEnd = () => {
      mouse.isInside = false;
      mouse.targetX = -2000;
      mouse.targetY = -2000;
      camera.targetRotY = 0;
      camera.targetRotX = 0.28;
    };

    window.addEventListener('mousemove', handleWindowMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleWindowMouseLeave);
    window.addEventListener('touchstart', handleWindowTouch, { passive: true });
    window.addEventListener('touchmove', handleWindowTouch, { passive: true });
    window.addEventListener('touchend', handleWindowTouchEnd, { passive: true });

    // =========================================================================
    // 1. 3D ANTIGRAVITY WAVE MESH (ELEVATED & PROMINENT ACROSS HERO + SPONSORS)
    // =========================================================================
    const cols = 60;
    const rows = 56;
    const spacingX = 36;
    const spacingZ = 34;
    const gridOriginX = -((cols - 1) * spacingX) / 2;
    const gridOriginZ = -((rows - 1) * spacingZ) / 2 + 280;

    const gridParticles = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x3d = gridOriginX + c * spacingX;
        const z3d = gridOriginZ + r * spacingZ;
        gridParticles.push({
          x: x3d,
          baseY: 0,
          y: 0,
          z: z3d,
          antiGravityLift: 0, // Smooth conductor lift displacement
          glow: 0,            // Smooth conductor illumination
          c,
          r,
        });
      }
    }

    // =========================================================================
    // 2. ANTIGRAVITY FLOATING EMBERS (WEIGHTLESS PARTICLES RISING UPWARDS)
    // =========================================================================
    const emberCount = 120;
    const embers = [];
    for (let i = 0; i < emberCount; i++) {
      embers.push({
        x: (Math.random() - 0.5) * 1800,
        y: Math.random() * 800 - 200,
        z: Math.random() * 1500 - 250,
        vy: -(Math.random() * 0.9 + 0.35), // Constant gentle anti-gravity upward float
        vx: (Math.random() - 0.5) * 0.35,
        vz: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 1.8 + 1.2,
        isCyan: Math.random() > 0.35,
        alpha: Math.random() * 0.6 + 0.2,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    // =========================================================================
    // 3. CONDUCTOR LIGHT PARTICLES (SOFT ORBITING STARDUST THAT FOLLOWS MOUSE)
    // =========================================================================
    const conductorNodesCount = 18;
    const conductorNodes = [];
    for (let i = 0; i < conductorNodesCount; i++) {
      conductorNodes.push({
        x: -2000,
        y: -2000,
        angle: (i / conductorNodesCount) * Math.PI * 2,
        distance: 14 + Math.random() * 28,
        speed: 0.02 + Math.random() * 0.03,
        size: Math.random() * 1.8 + 1.0,
        lerpFactor: 0.06 + Math.random() * 0.05, // Staggered fluid trail behind cursor
      });
    }

    let time = 0;

    // =========================================================================
    // MAIN RENDER LOOP: 3D PROJECTION + ADDITIVE NEON BLOOM (60FPS)
    // =========================================================================
    const render = () => {
      time += 0.016;

      // Dark Tech Deep Space Background
      ctx.fillStyle = '#0A0F1A';
      ctx.fillRect(0, 0, width, height);

      // Smooth camera interpolation
      camera.rotX += (camera.targetRotX - camera.rotX) * 0.045;
      camera.rotY += (camera.targetRotY - camera.rotY) * 0.045;

      // Silky mouse interpolation
      if (mouse.isInside) {
        mouse.smoothX += (mouse.targetX - mouse.smoothX) * 0.09;
        mouse.smoothY += (mouse.targetY - mouse.smoothY) * 0.09;

        mouse.vx = mouse.smoothX - mouse.prevSmoothX;
        mouse.vy = mouse.smoothY - mouse.prevSmoothY;
        mouse.speed = Math.hypot(mouse.vx, mouse.vy);

        mouse.prevSmoothX = mouse.smoothX;
        mouse.prevSmoothY = mouse.smoothY;

        // Update soft conductor stardust positions
        for (let i = 0; i < conductorNodes.length; i++) {
          const node = conductorNodes[i];
          node.angle += node.speed;
          const targetNodeX = mouse.smoothX + Math.cos(node.angle) * node.distance;
          const targetNodeY = mouse.smoothY + Math.sin(node.angle) * node.distance * 0.6;
          node.x += (targetNodeX - node.x) * node.lerpFactor;
          node.y += (targetNodeY - node.y) * node.lerpFactor;
        }
      }

      // 3D Rotation Matrix Components
      const cosX = Math.cos(camera.rotX);
      const sinX = Math.sin(camera.rotX);
      const cosY = Math.cos(camera.rotY);
      const sinY = Math.sin(camera.rotY);

      // Horizon position - smoothly spans the full height of hero + sponsors
      const halfW = width / 2;
      const halfH = height * 0.42;
      const fov = camera.fov;

      // Enable ADDITIVE BLENDING for vivid neon glowing bloom
      ctx.globalCompositeOperation = 'lighter';

      // -----------------------------------------------------------------------
      // A. RENDER 3D ANTIGRAVITY WAVE FIELD (CONDUCTED BY CURSOR)
      // -----------------------------------------------------------------------
      const conductorRadius = 240; // Broad, soft magnetic radius

      for (let i = 0; i < gridParticles.length; i++) {
        const p = gridParticles[i];

        // 1. Double harmonic fluid wave displacement
        const wave1 = Math.sin(p.x * 0.0032 + time * 1.3) * Math.cos(p.z * 0.0032 + time * 1.05) * 48;
        const wave2 = Math.sin((p.x + p.z) * 0.0024 + time * 0.85) * 28;
        const baseWaveY = wave1 + wave2;

        // 2. Camera transformation: Translation & Rotation for 3D Projection
        const relX = p.x;
        const relY = baseWaveY - p.antiGravityLift - camera.camY;
        const relZ = p.z - camera.camZ;

        const rotY_X = relX * cosY - relZ * sinY;
        const rotY_Z = relX * sinY + relZ * cosY;

        const rotX_Y = relY * cosX - rotY_Z * sinX;
        const rotX_Z = relY * sinX + rotY_Z * cosX;

        // Discard particles behind camera
        if (rotX_Z < 10) continue;

        // 3. Perspective Projection to Screen Coordinates
        const scale = fov / rotX_Z;
        const screenX = halfW + rotY_X * scale;
        const screenY = halfH + rotX_Y * scale;

        // 4. Organic Conductor Interaction (Silky Smooth Wave Swell)
        let targetLift = 0;
        let targetGlow = 0;

        if (mouse.isInside) {
          const dx = screenX - mouse.smoothX;
          const dy = screenY - mouse.smoothY;
          const distScreen = Math.hypot(dx, dy);

          if (distScreen < conductorRadius) {
            // Cosine bell curve: perfectly smooth derivatives at center and perimeter
            const normDist = distScreen / conductorRadius;
            const bell = Math.cos(normDist * Math.PI) * 0.5 + 0.5;

            // Gentle harmonic wave response conducting the particles upward
            const ripple = Math.sin(time * 2.2 - normDist * 2.5) * 6 * bell;
            targetLift = bell * 54 + ripple;
            targetGlow = bell;
          }
        }

        // Smooth fluid easing (no abrupt impulses or harsh spikes)
        p.antiGravityLift += (targetLift - p.antiGravityLift) * 0.12;
        p.glow += (targetGlow - p.glow) * 0.15;

        // Depth fade & size attenuation
        const depthRatio = Math.max(0.12, Math.min(1.0, (1450 - rotX_Z) / 1100));
        const baseRadius = 1.4 * scale;
        const finalRadius = Math.max(0.65, baseRadius * (1 + p.glow * 0.85));

        // Dynamic Color: Wave Crests = Cyan (#00C2FF), Valleys = Violet (#7F00FF), Conductor Touch = Radiant White/Cyan
        const heightNorm = (baseWaveY + 76) / 152; // 0 to 1

        let colorStyle;
        if (p.glow > 0.45) {
          // Brilliant ethereal white bloom when directly guided by cursor
          const alpha = Math.min(1.0, (0.7 + p.glow * 0.3) * depthRatio);
          colorStyle = `rgba(255, 255, 255, ${alpha})`;
        } else if (p.glow > 0.1 || heightNorm > 0.52) {
          // Cyan Neon (#00C2FF)
          const alpha = (0.3 + heightNorm * 0.55 + p.glow * 0.4) * depthRatio;
          colorStyle = `rgba(0, 194, 255, ${alpha})`;
        } else {
          // Purple/Violet Neon (#7F00FF)
          const alpha = (0.26 + (1 - heightNorm) * 0.48) * depthRatio;
          colorStyle = `rgba(127, 0, 255, ${alpha})`;
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(screenX, screenY, finalRadius, 0, Math.PI * 2);
        ctx.fillStyle = colorStyle;
        ctx.fill();

        // Extra soft bloom halo when conducted or at crests
        if (p.glow > 0.08 || heightNorm > 0.8) {
          ctx.beginPath();
          ctx.arc(screenX, screenY, finalRadius * (2.2 + p.glow * 1.8), 0, Math.PI * 2);
          ctx.fillStyle = p.glow > 0.08
            ? `rgba(0, 194, 255, ${p.glow * 0.35 * depthRatio})`
            : `rgba(0, 194, 255, ${0.12 * depthRatio})`;
          ctx.fill();
        }
      }

      // -----------------------------------------------------------------------
      // B. RENDER FLOATING ANTIGRAVITY EMBERS (LIFTOFF PARTICLES)
      // -----------------------------------------------------------------------
      for (let i = 0; i < embers.length; i++) {
        const em = embers[i];
        em.y += em.vy; // float upwards gently
        em.x += em.vx;
        em.z += em.vz;

        // Reset if floated above upper threshold
        if (em.y < -450) {
          em.y = 500;
          em.x = (Math.random() - 0.5) * 1800;
          em.z = Math.random() * 1500 - 250;
        }

        // Project ember to 3D
        const relX = em.x;
        const relY = em.y - camera.camY;
        const relZ = em.z - camera.camZ;

        const rotY_X = relX * cosY - relZ * sinY;
        const rotY_Z = relX * sinY + relZ * cosY;

        const rotX_Y = relY * cosX - rotY_Z * sinX;
        const rotX_Z = relY * sinX + rotY_Z * cosX;

        if (rotX_Z < 10) continue;

        const scale = fov / rotX_Z;
        const sx = halfW + rotY_X * scale;
        const sy = halfH + rotX_Y * scale;

        const pulse = 0.8 + 0.25 * Math.sin(time * 2.5 + em.pulseOffset);
        const radius = Math.max(0.75, em.size * scale * pulse);
        const color = em.isCyan ? 'rgba(0, 194, 255,' : 'rgba(127, 0, 255,';

        ctx.beginPath();
        ctx.arc(sx, sy, radius, 0, Math.PI * 2);
        ctx.fillStyle = `${color} ${em.alpha * pulse})`;
        ctx.fill();

        // Soft halo
        ctx.beginPath();
        ctx.arc(sx, sy, radius * 2.4, 0, Math.PI * 2);
        ctx.fillStyle = `${color} ${em.alpha * 0.18})`;
        ctx.fill();
      }

      // -----------------------------------------------------------------------
      // C. RENDER CONDUCTOR STARDUST (SOFT AURA GUIDED BY THE CURSOR)
      // -----------------------------------------------------------------------
      if (mouse.isInside && mouse.smoothX > 0) {
        // Soft central conductor glow
        const glowRadius = 38;
        const grad = ctx.createRadialGradient(
          mouse.smoothX,
          mouse.smoothY,
          0,
          mouse.smoothX,
          mouse.smoothY,
          glowRadius
        );
        grad.addColorStop(0, 'rgba(0, 194, 255, 0.22)');
        grad.addColorStop(0.5, 'rgba(127, 0, 255, 0.12)');
        grad.addColorStop(1, 'rgba(10, 15, 26, 0)');

        ctx.beginPath();
        ctx.arc(mouse.smoothX, mouse.smoothY, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Staggered orbital stardust particles conducting the flow
        for (let i = 0; i < conductorNodes.length; i++) {
          const node = conductorNodes[i];
          if (node.x < 0) continue;

          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
          ctx.fillStyle = i % 2 === 0 ? 'rgba(255, 255, 255, 0.75)' : 'rgba(0, 194, 255, 0.7)';
          ctx.fill();

          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 194, 255, 0.18)';
          ctx.fill();
        }
      }

      // Restore normal blending for surrounding layout
      ctx.globalCompositeOperation = 'source-over';

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleWindowMouseMove);
      window.removeEventListener('mouseleave', handleWindowMouseLeave);
      window.removeEventListener('touchstart', handleWindowTouch);
      window.removeEventListener('touchmove', handleWindowTouch);
      window.removeEventListener('touchend', handleWindowTouchEnd);
    };
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          background: '#0A0F1A',
        }}
      />
    </div>
  );
}
