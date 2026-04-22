import { useRef, useEffect, type ReactNode } from 'react';
import './BorderGlow.css';

interface BorderGlowProps {
  children: ReactNode;
  glowColor?: string;
  glowSize?: number;
  borderRadius?: string;
  className?: string;
}

export default function BorderGlow({
  children,
  glowColor = '#2563eb',
  glowSize = 120,
  borderRadius = '20px',
  className = '',
}: BorderGlowProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glow.style.setProperty('--glow-x', `${x}px`);
      glow.style.setProperty('--glow-y', `${y}px`);
      glow.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      glow.style.opacity = '0';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`border-glow-card ${className}`}
      style={{
        '--glow-color': glowColor,
        '--glow-size': `${glowSize}px`,
        '--card-radius': borderRadius,
      } as React.CSSProperties}
    >
      <div ref={glowRef} className="border-glow-spotlight" />
      <div className="border-glow-content">
        {children}
      </div>
    </div>
  );
}
