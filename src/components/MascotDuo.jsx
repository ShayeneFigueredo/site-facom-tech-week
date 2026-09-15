import React from 'react';
import './MascotDuo.css';

export default function MascotDuo({ className = '' }) {
  return (
    <div className={`mascot-duo-container ${className}`}>
      <svg
        viewBox="0 0 350 200"
        xmlns="http://www.w3.org/2000/svg"
        className="mascot-duo-svg"
      >
        <defs>
          <linearGradient id="bodyGrad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
          <linearGradient id="bodyGrad-purple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="#581c87" />
          </linearGradient>
          <linearGradient id="accentGrad-blue" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="accentGrad-purple" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#581c87" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#9333ea" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="eyeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
          
          <clipPath id="bodyClipTeko">
            <rect x="40" y="40" width="120" height="120" rx="16" />
          </clipPath>
          <clipPath id="bodyClipWeeka">
            <rect x="40" y="40" width="120" height="120" rx="16" />
          </clipPath>
        </defs>

        {/* --- TEKO (Blue Mascot, Left) --- */}
        <g transform="translate(10, 0)">
          {/* Teko's Right Arm (Holding hands with Weeka) */}
          <path
            d="M 160 100 L 180 130 L 195 160"
            fill="none"
            stroke="#1e3a8a"
            strokeWidth="16"
            strokeLinejoin="bevel"
            strokeLinecap="square"
          />

          {/* Teko's Left Arm - Waving Tchauzinho (Raised High) */}
          <g className="mascot-arm-waving-left">
            <path
              d="M 40 100 L 15 65 L 30 20"
              fill="none"
              stroke="#1e3a8a"
              strokeWidth="16"
              strokeLinejoin="bevel"
              strokeLinecap="square"
            />
            <rect x="20" y="10" width="20" height="20" rx="6" fill="#3b82f6" />
          </g>

          {/* Teko's Body */}
          <rect x="40" y="40" width="120" height="120" rx="16" fill="url(#bodyGrad-blue)" />
          
          {/* Geometric Accents */}
          <g clipPath="url(#bodyClipTeko)">
            <path d="M 40 160 L 160 40 L 160 160 Z" fill="url(#accentGrad-blue)" />
            <path d="M 40 100 L 100 40 L 160 40 L 40 160 Z" fill="rgba(255,255,255,0.12)" />
          </g>

          {/* Teko's Left Eye */}
          <g className="mascot-eye mascot-eye-left">
            <rect x="53" y="63" width="44" height="44" rx="10" fill="url(#eyeGrad)" />
            <rect x="63" y="73" width="24" height="24" rx="6" fill="#0f172a" />
            <rect x="77" y="77" width="6" height="6" rx="2" fill="#fff" />
          </g>
          {/* Teko's Right Eye */}
          <g className="mascot-eye mascot-eye-right">
            <rect x="103" y="63" width="44" height="44" rx="10" fill="url(#eyeGrad)" />
            <rect x="113" y="73" width="24" height="24" rx="6" fill="#0f172a" />
            <rect x="127" y="77" width="6" height="6" rx="2" fill="#fff" />
          </g>
        </g>

        {/* --- WEEKA (Purple Mascot, Right) --- */}
        <g transform="translate(150, 0)">
          {/* Weeka's Left Arm (Holding hands with Teko) */}
          <path
            d="M 40 100 L 20 130 L 5 160"
            fill="none"
            stroke="#581c87"
            strokeWidth="16"
            strokeLinejoin="bevel"
            strokeLinecap="square"
          />
          {/* Clasped hands */}
          <rect x="-5" y="150" width="20" height="20" rx="6" fill="#9333ea" />
          <rect x="-5" y="150" width="18" height="18" rx="6" fill="#3b82f6" opacity="0.85" />

          {/* Weeka's Right Arm - Waving Tchauzinho (Raised High) */}
          <g className="mascot-arm-waving-right">
            <path
              d="M 160 100 L 185 65 L 170 20"
              fill="none"
              stroke="#581c87"
              strokeWidth="16"
              strokeLinejoin="bevel"
              strokeLinecap="square"
            />
            <rect x="160" y="10" width="20" height="20" rx="6" fill="#9333ea" />
          </g>

          {/* Weeka's Body */}
          <rect x="40" y="40" width="120" height="120" rx="16" fill="url(#bodyGrad-purple)" />

          {/* Geometric Accents */}
          <g clipPath="url(#bodyClipWeeka)">
            <path d="M 40 160 L 160 40 L 160 160 Z" fill="url(#accentGrad-purple)" />
            <path d="M 40 100 L 100 40 L 160 40 L 40 160 Z" fill="rgba(255,255,255,0.12)" />
          </g>

          {/* Weeka's Left Eye */}
          <g className="mascot-eye mascot-eye-left">
            <rect x="53" y="63" width="44" height="44" rx="10" fill="url(#eyeGrad)" />
            <rect x="63" y="73" width="24" height="24" rx="6" fill="#0f172a" />
            <rect x="77" y="77" width="6" height="6" rx="2" fill="#fff" />
          </g>
          {/* Weeka's Right Eye */}
          <g className="mascot-eye mascot-eye-right">
            <rect x="103" y="63" width="44" height="44" rx="10" fill="url(#eyeGrad)" />
            <rect x="113" y="73" width="24" height="24" rx="6" fill="#0f172a" />
            <rect x="127" y="77" width="6" height="6" rx="2" fill="#fff" />
          </g>
        </g>
      </svg>
    </div>
  );
}
