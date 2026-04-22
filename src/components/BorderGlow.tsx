import { useRef } from 'react';
import type { MouseEvent, ReactNode } from 'react';
import './BorderGlow.css';

interface BorderGlowProps {
  children: ReactNode;
  glowColor?: string;
  className?: string;
}

export default function BorderGlow({ children, glowColor = '#2563eb', className = '' }: BorderGlowProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    card.style.setProperty('--glow-color', glowColor);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--mouse-x', `50%`);
    card.style.setProperty('--mouse-y', `50%`);
  };

  return (
    <div
      ref={cardRef}
      className={`border-glow-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="border-glow-inner">
        {children}
      </div>
    </div>
  );
}
