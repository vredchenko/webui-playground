import React, { useState, useRef, useCallback, useEffect } from 'react';
import './CryoEmMicroscope.css';

export type CryoEmMood = 'reactive' | 'sleepy' | 'curious' | 'happy' | 'angry' | 'love';

export interface CryoEmMicroscopeProps {
  /** Label under the microscope */
  label?: string;
  /** Expression mood. 'reactive' (default) responds to cursor; others are permanent. */
  mood?: CryoEmMood;
}

export const CryoEmMicroscope: React.FC<CryoEmMicroscopeProps> = ({
  label = 'Krios G3i',
  mood = 'reactive',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseNear, setMouseNear] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [flee, setFlee] = useState({ x: 0, y: 0 });
  const [panic, setPanic] = useState(0);

  const isReactive = mood === 'reactive';
  const isCurious = mood === 'curious';

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx);

      if (isCurious) {
        // Curious mode: eyes track cursor, body leans toward it (not away)
        const threshold = 400;
        if (dist < threshold) {
          setMouseNear(true);
          setMousePos({
            x: Math.cos(angle) * 4,
            y: Math.sin(angle) * 4,
          });
          const leanStrength = Math.max(0, 1 - dist / threshold) * 20;
          setFlee({
            x: Math.cos(angle) * leanStrength,
            y: 0,
          });
        } else {
          setMouseNear(false);
          setMousePos({ x: 0, y: 0 });
          setFlee({ x: 0, y: 0 });
        }
        return;
      }

      if (!isReactive) return;

      const threshold = 320;
      const nearThreshold = 220;

      if (dist < threshold) {
        const intensity = Math.max(0, 1 - dist / threshold);
        setPanic(intensity);
        setMouseNear(dist < nearThreshold);

        setMousePos({
          x: Math.cos(angle) * 4,
          y: Math.sin(angle) * 4,
        });

        const fleeStrength = Math.max(0, 1 - dist / nearThreshold) * 60;
        setFlee({
          x: -Math.cos(angle) * fleeStrength,
          y: Math.min(0, -Math.sin(angle) * fleeStrength * 0.3),
        });
      } else {
        setPanic(0);
        setMouseNear(false);
        setFlee({ x: 0, y: 0 });
      }
    },
    [isReactive, isCurious],
  );

  useEffect(() => {
    if (isReactive || isCurious) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [handleMouseMove, isReactive, isCurious]);

  const panicClass =
    isReactive
      ? panic > 0.7
        ? 'cryo--terrified'
        : panic > 0.3
          ? 'cryo--nervous'
          : ''
      : '';
  const moodClass = !isReactive ? `cryo--${mood}` : '';
  const sweatVisible = isReactive && panic > 0.5;
  const showFace = !isReactive || mouseNear || panic > 0.3;

  return (
    <div className="cryo-scene">
      <div
        ref={containerRef}
        className={`cryo-microscope ${mouseNear ? 'cryo--alert' : ''} ${panicClass} ${moodClass}`}
        style={{
          transform: `translate(${flee.x}px, ${flee.y}px)`,
          transition:
            isCurious
              ? 'transform 0.3s ease-out'
              : mouseNear
                ? 'transform 0.15s ease-out'
                : 'transform 0.6s ease-out',
        }}
      >
        {/* The microscope body */}
        <div className="cryo-body">
          <div className="cryo-upper">
            <div className="cryo-chamfer" />
            <div className="cryo-upper-panel">
              <div className="cryo-logo">THERMO</div>
            </div>
          </div>

          <div className="cryo-seam" />

          <div className="cryo-lower">
            <div className="cryo-lower-inset" />
            <div className="cryo-lower-detail" />
          </div>

          {/* Face */}
          <div className={`cryo-face ${showFace ? 'cryo-face--visible' : ''}`}>
            {/* Eyebrows */}
            <div className="cryo-brow cryo-brow--left" />
            <div className="cryo-brow cryo-brow--right" />

            <div className="cryo-eyes-row">
              {mood === 'happy' ? (
                <>
                  <div className="cryo-eye-happy">
                    <svg viewBox="0 0 24 14" className="cryo-eye-arc">
                      <path d="M2,12 Q12,0 22,12" fill="none" stroke="#444" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="cryo-eye-happy">
                    <svg viewBox="0 0 24 14" className="cryo-eye-arc">
                      <path d="M2,12 Q12,0 22,12" fill="none" stroke="#444" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </div>
                </>
              ) : mood === 'sleepy' ? (
                <>
                  <div className="cryo-eye cryo-eye--sleepy">
                    <div className="cryo-pupil" />
                  </div>
                  <div className="cryo-eye cryo-eye--sleepy">
                    <div className="cryo-pupil" />
                  </div>
                </>
              ) : mood === 'love' ? (
                <>
                  <div className="cryo-eye cryo-eye--love">
                    <div className="cryo-heart-pupil">&#9829;</div>
                  </div>
                  <div className="cryo-eye cryo-eye--love">
                    <div className="cryo-heart-pupil">&#9829;</div>
                  </div>
                </>
              ) : mood === 'angry' ? (
                <>
                  <div className="cryo-eye cryo-eye--angry">
                    <div
                      className="cryo-pupil"
                      style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
                    />
                  </div>
                  <div className="cryo-eye cryo-eye--angry">
                    <div
                      className="cryo-pupil"
                      style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="cryo-eye cryo-eye--left">
                    <div
                      className="cryo-pupil"
                      style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
                    />
                  </div>
                  <div className="cryo-eye cryo-eye--right">
                    <div
                      className="cryo-pupil"
                      style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
                    />
                  </div>
                </>
              )}
            </div>

            {/* Mouth */}
            <div className="cryo-mouth">
              <svg viewBox="0 0 30 16" className="cryo-mouth-svg">
                {/* Reactive: nervous wavy line */}
                <path
                  className="cryo-mouth-nervous"
                  d="M4,10 Q8,4 12,10 Q16,16 20,10 Q24,4 26,8"
                  fill="none"
                  stroke="#555"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Reactive: terrified gasp */}
                <ellipse
                  className="cryo-mouth-terrified"
                  cx="15"
                  cy="9"
                  rx="7"
                  ry="6"
                  fill="#444"
                  stroke="#333"
                  strokeWidth="1.5"
                />
                {/* Happy / Love: smile arc */}
                <path
                  className="cryo-mouth-happy"
                  d="M6,6 Q15,18 24,6"
                  fill="none"
                  stroke="#555"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Sleepy: small open yawn */}
                <ellipse
                  className="cryo-mouth-sleepy"
                  cx="15"
                  cy="9"
                  rx="5"
                  ry="4"
                  fill="#777"
                  stroke="#555"
                  strokeWidth="1.5"
                />
                {/* Curious: little "o" */}
                <circle
                  className="cryo-mouth-curious"
                  cx="15"
                  cy="9"
                  r="4"
                  fill="#555"
                  stroke="#444"
                  strokeWidth="1.5"
                />
                {/* Angry: gritted zigzag */}
                <path
                  className="cryo-mouth-angry"
                  d="M5,8 L9,5 L13,10 L17,5 L21,10 L25,7"
                  fill="none"
                  stroke="#444"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Blush cheeks for happy and love */}
            {(mood === 'happy' || mood === 'love') && (
              <>
                <div className="cryo-blush cryo-blush--left" />
                <div className="cryo-blush cryo-blush--right" />
              </>
            )}

            {/* Sweat drops (reactive terrified) */}
            {sweatVisible && (
              <>
                <div className="cryo-sweat cryo-sweat--1">&#128167;</div>
                <div className="cryo-sweat cryo-sweat--2">&#128167;</div>
              </>
            )}

            {/* Sleepy Zzz */}
            {mood === 'sleepy' && (
              <div className="cryo-zzz">
                <span className="cryo-z cryo-z--1">z</span>
                <span className="cryo-z cryo-z--2">Z</span>
                <span className="cryo-z cryo-z--3">z</span>
              </div>
            )}

            {/* Love floating hearts */}
            {mood === 'love' && (
              <div className="cryo-hearts">
                <span className="cryo-float-heart cryo-float-heart--1">&#9829;</span>
                <span className="cryo-float-heart cryo-float-heart--2">&#9829;</span>
                <span className="cryo-float-heart cryo-float-heart--3">&#9829;</span>
              </div>
            )}

            {/* Angry steam puffs */}
            {mood === 'angry' && (
              <>
                <div className="cryo-steam cryo-steam--left">&#128168;</div>
                <div className="cryo-steam cryo-steam--right">&#128168;</div>
              </>
            )}
          </div>
        </div>

        {/* Feet */}
        <div className="cryo-feet">
          <div className="cryo-foot cryo-foot--left">
            <div className="cryo-shoe" />
          </div>
          <div className="cryo-foot cryo-foot--right">
            <div className="cryo-shoe" />
          </div>
        </div>

        <div className="cryo-label">{label}</div>
      </div>

      <div
        className="cryo-shadow"
        style={{
          transform: `translateX(${flee.x * 0.5}px) scaleX(${1 - (isReactive ? panic : 0) * 0.15})`,
          opacity: 0.18 + (isReactive ? panic : 0) * 0.07,
        }}
      />
    </div>
  );
};
