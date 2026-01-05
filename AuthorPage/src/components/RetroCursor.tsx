import React, { useEffect, useState } from 'react';

const RetroCursor = () => {
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    let counter = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // 1. FIX: Use clientX/clientY instead of pageX/pageY
      // clientX/Y are relative to the window (viewport), not the whole document.
      // Since our container is 'fixed', this matches perfectly.
      const newStar = { x: e.clientX, y: e.clientY, id: counter++ };

      setTrail((prev) => [...prev.slice(-15), newStar]);

      setTimeout(() => {
        setTrail((prev) => prev.filter(t => t.id !== newStar.id));
      }, 500);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    // 2. Ensure z-index is insanely high so it sits on top of absolutely everything
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {trail.map((point) => (
        <div
          key={point.id}
          className="absolute text-yellow-300 font-mono text-sm animate-pulse"
          style={{
            left: point.x + 10,
            top: point.y + 10,
            textShadow: '1px 1px 0 #000'
          }}
        >
          ★
        </div>
      ))}
    </div>
  );
};

export default RetroCursor;
