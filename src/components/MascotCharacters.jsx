import React from 'react';
import './MascotDuo.css';

// 1. Standalone Blue Mascot (Teko) - Friendly Wave (NO mouth, NO nose, NO antenna)
export function TekoMascot({ size = 170, animated = true, className = '', style = {} }) {
  return (
    <div
      className={`single-mascot-container ${animated ? 'mascot-float-anim' : ''} ${className}`}
      style={{
        width: `${size}px`,
        height: `${size * 1.05}px`,
        display: 'inline-block',
        filter: 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.65)) drop-shadow(0 0 25px rgba(0, 210, 255, 0.4))',
        ...style,
      }}
    >
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="teko-bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d2ff" />
            <stop offset="100%" stopColor="#0052cc" />
          </linearGradient>
          <linearGradient id="teko-accentGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#003580" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00d2ff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="teko-eyeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
          <clipPath id="teko-clip">
            <rect x="40" y="40" width="120" height="120" rx="18" />
          </clipPath>
        </defs>

        {/* Right Arm (Resting) */}
        <path
          d="M 160 100 L 180 125 L 185 150"
          fill="none"
          stroke="#0038a8"
          strokeWidth="14"
          strokeLinejoin="bevel"
          strokeLinecap="round"
        />
        <rect x="175" y="142" width="16" height="16" rx="5" fill="#00d2ff" />

        {/* Left Arm (Waving Tchauzinho) */}
        <g className="mascot-arm-waving-left">
          <path
            d="M 40 100 L 15 65 L 30 20"
            fill="none"
            stroke="#0038a8"
            strokeWidth="14"
            strokeLinejoin="bevel"
            strokeLinecap="round"
          />
          <rect x="20" y="10" width="18" height="18" rx="5" fill="#00d2ff" />
        </g>

        {/* Cube Head Body (Clean top, no antenna, no mouth, no nose) */}
        <rect x="40" y="40" width="120" height="120" rx="18" fill="url(#teko-bodyGrad)" />

        {/* Geometric Accents */}
        <g clipPath="url(#teko-clip)">
          <path d="M 40 160 L 160 40 L 160 160 Z" fill="url(#teko-accentGrad)" />
          <path d="M 40 100 L 100 40 L 160 40 L 40 160 Z" fill="rgba(255,255,255,0.15)" />
        </g>

        {/* Eyes (Original square rounded eyes) */}
        <g className="mascot-eye mascot-eye-left">
          <rect x="53" y="65" width="42" height="42" rx="10" fill="url(#teko-eyeGrad)" />
          <rect x="63" y="75" width="22" height="22" rx="6" fill="#060d24" />
          <rect x="76" y="79" width="6" height="6" rx="2" fill="#ffffff" />
        </g>
        <g className="mascot-eye mascot-eye-right">
          <rect x="105" y="65" width="42" height="42" rx="10" fill="url(#teko-eyeGrad)" />
          <rect x="115" y="75" width="22" height="22" rx="6" fill="#060d24" />
          <rect x="128" y="79" width="6" height="6" rx="2" fill="#ffffff" />
        </g>
      </svg>
    </div>
  );
}

// 2. Teko with Cyber Sunglasses (NO mouth, NO antenna, NO nose)
export function TekoCoolShades({ size = 180, animated = true, className = '', style = {} }) {
  return (
    <div
      className={`single-mascot-container ${animated ? 'mascot-headbob-anim' : ''} ${className}`}
      style={{
        width: `${size}px`,
        height: `${size * 1.05}px`,
        display: 'inline-block',
        filter: 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.7)) drop-shadow(0 0 30px rgba(0, 210, 255, 0.45))',
        ...style,
      }}
    >
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="teko-body-cool" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d2ff" />
            <stop offset="100%" stopColor="#0047cc" />
          </linearGradient>
          <linearGradient id="shades-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="50%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>
          <linearGradient id="shades-shine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0.85" />
          </linearGradient>
        </defs>

        {/* Arms: Left Waving, Right Resting */}
        <g className="mascot-arm-waving-left">
          <path d="M 40 100 L 15 65 L 30 20" fill="none" stroke="#0038a8" strokeWidth="14" strokeLinecap="round" />
          <rect x="20" y="10" width="18" height="18" rx="5" fill="#00d2ff" />
        </g>
        <path d="M 160 100 L 185 125 L 180 150" fill="none" stroke="#0038a8" strokeWidth="14" strokeLinecap="round" />
        <rect x="172" y="142" width="16" height="16" rx="5" fill="#00d2ff" />

        {/* Cube Head Body (Clean, no antenna, no mouth, no nose) */}
        <rect x="40" y="40" width="120" height="120" rx="18" fill="url(#teko-body-cool)" />

        {/* Black Cool Cyber Sunglasses (Over eyes only) */}
        <g className="mascot-glasses-group">
          {/* Bridge */}
          <rect x="92" y="78" width="16" height="8" rx="3" fill="#020617" />
          {/* Left Lens */}
          <rect x="48" y="66" width="48" height="36" rx="9" fill="url(#shades-grad)" stroke="#00d2ff" strokeWidth="2.5" />
          {/* Right Lens */}
          <rect x="104" y="66" width="48" height="36" rx="9" fill="url(#shades-grad)" stroke="#00d2ff" strokeWidth="2.5" />
          {/* Glare Stripe */}
          <path d="M 54 72 L 78 72 L 68 96 L 54 96 Z" fill="url(#shades-shine)" opacity="0.7" />
          <path d="M 110 72 L 134 72 L 124 96 L 110 96 Z" fill="url(#shades-shine)" opacity="0.7" />
        </g>
      </svg>
    </div>
  );
}

// 3. Teko Peeking / Curious Tilt (NO mouth, NO antenna, NO nose)
export function TekoPeeking({ size = 180, animated = true, className = '', style = {} }) {
  return (
    <div
      className={`single-mascot-container ${animated ? 'mascot-point-anim' : ''} ${className}`}
      style={{
        width: `${size}px`,
        height: `${size * 1.05}px`,
        display: 'inline-block',
        filter: 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.65)) drop-shadow(0 0 25px rgba(0, 210, 255, 0.4))',
        ...style,
      }}
    >
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="teko-peek-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d2ff" />
            <stop offset="100%" stopColor="#0052cc" />
          </linearGradient>
          <linearGradient id="teko-eyeGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
        </defs>

        {/* Arms holding the bottom frame like peeking */}
        <path d="M 40 120 L 25 150 L 50 165" fill="none" stroke="#0038a8" strokeWidth="14" strokeLinecap="round" />
        <rect x="42" y="156" width="18" height="18" rx="5" fill="#00d2ff" />

        <path d="M 160 120 L 175 150 L 150 165" fill="none" stroke="#0038a8" strokeWidth="14" strokeLinecap="round" />
        <rect x="140" y="156" width="18" height="18" rx="5" fill="#00d2ff" />

        {/* Cube Head Body (NO antenna, NO mouth, NO nose) */}
        <rect x="40" y="40" width="120" height="120" rx="18" fill="url(#teko-peek-grad)" />

        {/* Curious Glancing Eyes */}
        <g className="mascot-eye mascot-eye-left">
          <rect x="53" y="65" width="42" height="42" rx="10" fill="url(#teko-eyeGrad3)" />
          <rect x="68" y="72" width="22" height="22" rx="6" fill="#060d24" />
          <rect x="80" y="76" width="7" height="7" rx="2" fill="#ffffff" />
        </g>
        <g className="mascot-eye mascot-eye-right">
          <rect x="105" y="65" width="42" height="42" rx="10" fill="url(#teko-eyeGrad3)" />
          <rect x="120" y="72" width="22" height="22" rx="6" fill="#060d24" />
          <rect x="132" y="76" width="7" height="7" rx="2" fill="#ffffff" />
        </g>
      </svg>
    </div>
  );
}

// 4. Standalone Purple Mascot (Weeka) - Friendly Wave (NO mouth, NO nose, NO antenna)
export function WeekaMascot({ size = 170, animated = true, className = '', style = {} }) {
  return (
    <div
      className={`single-mascot-container ${animated ? 'mascot-float-anim-alt' : ''} ${className}`}
      style={{
        width: `${size}px`,
        height: `${size * 1.05}px`,
        display: 'inline-block',
        filter: 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.65)) drop-shadow(0 0 25px rgba(192, 132, 252, 0.4))',
        ...style,
      }}
    >
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="weeka-bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#6b21a8" />
          </linearGradient>
          <linearGradient id="weeka-accentGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4c1d95" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="weeka-eyeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
          <clipPath id="weeka-clip">
            <rect x="40" y="40" width="120" height="120" rx="18" />
          </clipPath>
        </defs>

        {/* Left Arm (Resting) */}
        <path
          d="M 40 100 L 20 125 L 15 150"
          fill="none"
          stroke="#4c1d95"
          strokeWidth="14"
          strokeLinejoin="bevel"
          strokeLinecap="round"
        />
        <rect x="8" y="142" width="16" height="16" rx="5" fill="#c084fc" />

        {/* Right Arm (Waving Tchauzinho) */}
        <g className="mascot-arm-waving-right">
          <path
            d="M 160 100 L 185 65 L 170 20"
            fill="none"
            stroke="#4c1d95"
            strokeWidth="14"
            strokeLinejoin="bevel"
            strokeLinecap="round"
          />
          <rect x="162" y="10" width="18" height="18" rx="5" fill="#c084fc" />
        </g>

        {/* Cube Head Body (Clean top, NO antenna, NO mouth, NO nose) */}
        <rect x="40" y="40" width="120" height="120" rx="18" fill="url(#weeka-bodyGrad)" />

        {/* Geometric Accents */}
        <g clipPath="url(#weeka-clip)">
          <path d="M 40 160 L 160 40 L 160 160 Z" fill="url(#weeka-accentGrad)" />
          <path d="M 40 100 L 100 40 L 160 40 L 40 160 Z" fill="rgba(255,255,255,0.15)" />
        </g>

        {/* Eyes (Square rounded eyes) */}
        <g className="mascot-eye mascot-eye-left">
          <rect x="53" y="65" width="42" height="42" rx="10" fill="url(#weeka-eyeGrad)" />
          <rect x="63" y="75" width="22" height="22" rx="6" fill="#0f0728" />
          <rect x="76" y="79" width="6" height="6" rx="2" fill="#ffffff" />
        </g>
        <g className="mascot-eye mascot-eye-right">
          <rect x="105" y="65" width="42" height="42" rx="10" fill="url(#weeka-eyeGrad)" />
          <rect x="115" y="75" width="22" height="22" rx="6" fill="#0f0728" />
          <rect x="128" y="79" width="6" height="6" rx="2" fill="#ffffff" />
        </g>
      </svg>
    </div>
  );
}

// 5. Weeka Dancing / Celebrating (Both arms up, NO mouth, NO antenna, NO nose)
export function WeekaDancing({ size = 180, animated = true, className = '', style = {} }) {
  return (
    <div
      className={`single-mascot-container ${animated ? 'mascot-dance-anim' : ''} ${className}`}
      style={{
        width: `${size}px`,
        height: `${size * 1.05}px`,
        display: 'inline-block',
        filter: 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.7)) drop-shadow(0 0 30px rgba(192, 132, 252, 0.45))',
        ...style,
      }}
    >
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="weeka-dance-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d8b4fe" />
            <stop offset="100%" stopColor="#7e22ce" />
          </linearGradient>
          <linearGradient id="weeka-eyeGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
        </defs>

        {/* Dancing Arms Raised High (Disco/Party) */}
        <g className="mascot-disco-arms">
          <path d="M 40 85 L 10 50 L 25 15" fill="none" stroke="#4c1d95" strokeWidth="14" strokeLinecap="round" />
          <rect x="18" y="5" width="18" height="18" rx="5" fill="#c084fc" />

          <path d="M 160 85 L 190 50 L 175 15" fill="none" stroke="#4c1d95" strokeWidth="14" strokeLinecap="round" />
          <rect x="165" y="5" width="18" height="18" rx="5" fill="#c084fc" />
        </g>

        {/* Cube Head Body (Clean, NO antenna, NO mouth, NO nose) */}
        <rect x="40" y="40" width="120" height="120" rx="18" fill="url(#weeka-dance-grad)" />

        {/* Eyes */}
        <g className="mascot-eye mascot-eye-left">
          <rect x="53" y="65" width="42" height="42" rx="10" fill="url(#weeka-eyeGrad4)" />
          <rect x="63" y="75" width="22" height="22" rx="6" fill="#0f0728" />
          <rect x="76" y="79" width="6" height="6" rx="2" fill="#ffffff" />
        </g>
        <g className="mascot-eye mascot-eye-right">
          <rect x="105" y="65" width="42" height="42" rx="10" fill="url(#weeka-eyeGrad4)" />
          <rect x="115" y="75" width="22" height="22" rx="6" fill="#0f0728" />
          <rect x="128" y="79" width="6" height="6" rx="2" fill="#ffffff" />
        </g>
      </svg>
    </div>
  );
}

// 6. Weeka with Cyber Sunglasses (NO mouth, NO antenna, NO nose)
export function WeekaCoolShades({ size = 180, animated = true, className = '', style = {} }) {
  return (
    <div
      className={`single-mascot-container ${animated ? 'mascot-headbob-anim' : ''} ${className}`}
      style={{
        width: `${size}px`,
        height: `${size * 1.05}px`,
        display: 'inline-block',
        filter: 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.7)) drop-shadow(0 0 30px rgba(192, 132, 252, 0.45))',
        ...style,
      }}
    >
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="weeka-cool-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#6b21a8" />
          </linearGradient>
          <linearGradient id="shades-weeka-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="50%" stopColor="#1e1b4b" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>
          <linearGradient id="shades-weeka-shine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#00d2ff" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Arms: Right Waving, Left Resting */}
        <g className="mascot-arm-waving-right">
          <path d="M 160 90 L 190 60 L 180 25" fill="none" stroke="#4c1d95" strokeWidth="14" strokeLinecap="round" />
          <rect x="170" y="15" width="18" height="18" rx="5" fill="#c084fc" />
        </g>
        <path d="M 40 100 L 15 115 L 20 145" fill="none" stroke="#4c1d95" strokeWidth="14" strokeLinecap="round" />
        <rect x="12" y="137" width="16" height="16" rx="5" fill="#c084fc" />

        {/* Cube Head Body (Clean, NO antenna, NO mouth, NO nose) */}
        <rect x="40" y="40" width="120" height="120" rx="18" fill="url(#weeka-cool-grad)" />

        {/* Cyber Sunglasses (Over eyes only) */}
        <g className="mascot-glasses-group">
          <rect x="92" y="78" width="16" height="8" rx="3" fill="#020617" />
          <rect x="48" y="66" width="48" height="36" rx="9" fill="url(#shades-weeka-grad)" stroke="#c084fc" strokeWidth="2.5" />
          <rect x="104" y="66" width="48" height="36" rx="9" fill="url(#shades-weeka-grad)" stroke="#c084fc" strokeWidth="2.5" />
          <path d="M 54 72 L 78 72 L 68 96 L 54 96 Z" fill="url(#shades-weeka-shine)" opacity="0.75" />
          <path d="M 110 72 L 134 72 L 124 96 L 110 96 Z" fill="url(#shades-weeka-shine)" opacity="0.75" />
        </g>
      </svg>
    </div>
  );
}

// 7. Duo with clean heads holding hands (NO mouth, NO antenna, NO nose)
export default function MascotDuo({ className = '', style = {} }) {
  return (
    <div className={`mascot-duo-container ${className}`} style={style}>
      <svg
        viewBox="0 0 350 200"
        xmlns="http://www.w3.org/2000/svg"
        className="mascot-duo-svg"
      >
        <defs>
          <linearGradient id="bodyGrad-blue2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d2ff" />
            <stop offset="100%" stopColor="#0052cc" />
          </linearGradient>
          <linearGradient id="bodyGrad-purple2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#6b21a8" />
          </linearGradient>
          <linearGradient id="eyeGrad-duo" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
        </defs>

        {/* --- TEKO (Blue, Left) --- */}
        <g transform="translate(10, 0)">
          {/* Teko's Right Arm (Holding hands with Weeka) */}
          <path
            d="M 160 100 L 180 130 L 195 160"
            fill="none"
            stroke="#0038a8"
            strokeWidth="16"
            strokeLinejoin="bevel"
            strokeLinecap="round"
          />

          {/* Teko's Left Arm - Waving with Energy */}
          <g className="mascot-arm-waving-left">
            <path
              d="M 40 100 L 15 65 L 30 20"
              fill="none"
              stroke="#0038a8"
              strokeWidth="16"
              strokeLinejoin="bevel"
              strokeLinecap="round"
            />
            <rect x="20" y="10" width="20" height="20" rx="6" fill="#00d2ff" />
          </g>

          {/* Teko's Body (NO antenna, NO mouth, NO nose) */}
          <rect x="40" y="40" width="120" height="120" rx="16" fill="url(#bodyGrad-blue2)" />

          {/* Teko Eyes */}
          <g className="mascot-eye mascot-eye-left">
            <rect x="53" y="63" width="44" height="44" rx="10" fill="url(#eyeGrad-duo)" />
            <rect x="63" y="73" width="24" height="24" rx="6" fill="#060d24" />
            <rect x="77" y="77" width="6" height="6" rx="2" fill="#fff" />
          </g>
          <g className="mascot-eye mascot-eye-right">
            <rect x="103" y="63" width="44" height="44" rx="10" fill="url(#eyeGrad-duo)" />
            <rect x="113" y="73" width="24" height="24" rx="6" fill="#060d24" />
            <rect x="127" y="77" width="6" height="6" rx="2" fill="#fff" />
          </g>
        </g>

        {/* --- WEEKA (Purple, Right) --- */}
        <g transform="translate(150, 0)">
          {/* Weeka's Left Arm (Holding hands with Teko) */}
          <path
            d="M 40 100 L 20 130 L 5 160"
            fill="none"
            stroke="#4c1d95"
            strokeWidth="16"
            strokeLinejoin="bevel"
            strokeLinecap="round"
          />
          {/* Clasped hands */}
          <rect x="-5" y="150" width="20" height="20" rx="6" fill="#c084fc" />
          <rect x="-5" y="150" width="18" height="18" rx="6" fill="#00d2ff" opacity="0.85" />

          {/* Weeka's Right Arm - Waving */}
          <g className="mascot-arm-waving-right">
            <path
              d="M 160 100 L 185 65 L 170 20"
              fill="none"
              stroke="#4c1d95"
              strokeWidth="16"
              strokeLinejoin="bevel"
              strokeLinecap="round"
            />
            <rect x="160" y="10" width="20" height="20" rx="6" fill="#c084fc" />
          </g>

          {/* Weeka's Body (NO antenna, NO mouth, NO nose) */}
          <rect x="40" y="40" width="120" height="120" rx="16" fill="url(#bodyGrad-purple2)" />

          {/* Weeka Eyes */}
          <g className="mascot-eye mascot-eye-left">
            <rect x="53" y="63" width="44" height="44" rx="10" fill="url(#eyeGrad-duo)" />
            <rect x="63" y="73" width="24" height="24" rx="6" fill="#0f0728" />
            <rect x="77" y="77" width="6" height="6" rx="2" fill="#fff" />
          </g>
          <g className="mascot-eye mascot-eye-right">
            <rect x="103" y="63" width="44" height="44" rx="10" fill="url(#eyeGrad-duo)" />
            <rect x="113" y="73" width="24" height="24" rx="6" fill="#0f0728" />
            <rect x="127" y="77" width="6" height="6" rx="2" fill="#fff" />
          </g>
        </g>
      </svg>
    </div>
  );
}
