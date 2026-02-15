import React, { useState, useRef, useCallback, useEffect } from 'react';
import './CryoEmMicroscope.css';

export interface CryoEmMicroscopeProps {
  /** Label under the microscope */
  label?: string;
}

export const CryoEmMicroscope: React.FC<CryoEmMicroscopeProps> = ({
  label = 'Krios G3i',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseNear, setMouseNear] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [flee, setFlee] = useState({ x: 0, y: 0 });
  const [panic, setPanic] = useState(0); // 0 = calm, 1 = full panic

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);

    const threshold = 320;
    const nearThreshold = 220;

    if (dist < threshold) {
      const intensity = Math.max(0, 1 - dist / threshold);
      setPanic(intensity);
      setMouseNear(dist < nearThreshold);

      // Eyes track cursor relative to microscope center
      const angle = Math.atan2(dy, dx);
      setMousePos({
        x: Math.cos(angle) * 4,
        y: Math.sin(angle) * 4,
      });

      // Flee away from cursor
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
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const panicClass = panic > 0.7 ? 'cryo--terrified' : panic > 0.3 ? 'cryo--nervous' : '';
  const sweatVisible = panic > 0.5;

  return (
    <div className="cryo-scene">
      <div
        ref={containerRef}
        className={`cryo-microscope ${mouseNear ? 'cryo--alert' : ''} ${panicClass}`}
        style={{
          transform: `translate(${flee.x}px, ${flee.y}px)`,
          transition: mouseNear ? 'transform 0.15s ease-out' : 'transform 0.6s ease-out',
        }}
      >
        {/* The microscope body */}
        <div className="cryo-body">
          {/* Gun / top cap */}
          <div className="cryo-gun" />

          {/* Upper column */}
          <div className="cryo-column-upper" />

          {/* Eyes - appear on the column area */}
          <div className="cryo-face">
            <div className="cryo-eye cryo-eye--left">
              <div
                className="cryo-pupil"
                style={{
                  transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
                }}
              />
            </div>
            <div className="cryo-eye cryo-eye--right">
              <div
                className="cryo-pupil"
                style={{
                  transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
                }}
              />
            </div>

            {/* Worried mouth */}
            <div className="cryo-mouth" />

            {/* Sweat drops */}
            {sweatVisible && (
              <>
                <div className="cryo-sweat cryo-sweat--1">💧</div>
                <div className="cryo-sweat cryo-sweat--2">💧</div>
              </>
            )}
          </div>

          {/* Stage / middle bulge */}
          <div className="cryo-stage" />

          {/* Lower column */}
          <div className="cryo-column-lower" />

          {/* Base cabinet */}
          <div className="cryo-base">
            <div className="cryo-base-panel" />
            <div className="cryo-base-vent" />
          </div>
        </div>

        {/* Feet - grow when scared */}
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

      <div className="cryo-shadow" style={{
        transform: `translateX(${flee.x * 0.5}px) scaleX(${1 - panic * 0.15})`,
        opacity: 0.18 + panic * 0.07,
      }} />
    </div>
  );
};
