import { useEffect, useRef } from 'react';

interface MetallicTextProps {
  text: string;
  fontSize?: number;
  fontWeight?: string;
}

export default function MetallicText({ text, fontSize = 22, fontWeight = '800' }: MetallicTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.scale(dpr, dpr);
    };

    resize();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const draw = () => {
      const rect = container.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Build metallic gradient based on mouse position
      const gx = mx * w;
      const gy = my * h;

      const gradient = ctx.createLinearGradient(
        gx - w * 0.8, gy - h * 0.8,
        gx + w * 0.8, gy + h * 0.8
      );

      // Silver/platinum metallic stops
      gradient.addColorStop(0,    '#b8c0cc');
      gradient.addColorStop(0.15, '#8892a0');
      gradient.addColorStop(0.3,  '#dde3ea');
      gradient.addColorStop(0.45, '#f5f6f8');
      gradient.addColorStop(0.5,  '#ffffff');
      gradient.addColorStop(0.55, '#f0f2f5');
      gradient.addColorStop(0.7,  '#c8cfd8');
      gradient.addColorStop(0.85, '#9aa3af');
      gradient.addColorStop(1,    '#b8c0cc');

      ctx.font = `${fontWeight} ${fontSize}px 'Inter', sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = gradient;
      ctx.fillText(text, w / 2, h / 2);

      // Add a specular highlight overlay
      const highlight = ctx.createLinearGradient(gx - 20, gy - 20, gx + 20, gy + 20);
      highlight.addColorStop(0, 'rgba(255,255,255,0)');
      highlight.addColorStop(0.5, 'rgba(255,255,255,0.35)');
      highlight.addColorStop(1, 'rgba(255,255,255,0)');

      ctx.globalCompositeOperation = 'source-atop';
      ctx.fillStyle = highlight;
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'source-over';

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
    };
  }, [text, fontSize, fontWeight]);

  return (
    <div
      ref={containerRef}
      style={{
        display: 'inline-block',
        minWidth: `${text.length * fontSize * 0.65}px`,
        height: `${fontSize * 1.4}px`,
        cursor: 'default',
        userSelect: 'none',
      }}
    >
      <canvas ref={canvasRef} style={{ display: 'block' }} />
    </div>
  );
}
