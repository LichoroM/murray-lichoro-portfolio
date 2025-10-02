import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface SkillProgressProps {
  name: string;
  level: number; // 0-100
  category?: string;
  delay?: number;
}

export const SkillProgress: React.FC<SkillProgressProps> = ({ 
  name, 
  level, 
  category,
  delay = 0 
}) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const { ref, isVisible } = useScrollAnimation(0.3);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedLevel(level);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, level, delay]);

  return (
    <div ref={ref} className="space-y-2 dynamic-card p-3 bg-card/30">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-sm font-medium text-foreground">{name}</h4>
          {category && (
            <p className="text-xs text-muted-foreground">{category}</p>
          )}
        </div>
        <span className="text-sm font-medium text-[#14B8A6]">{animatedLevel}%</span>
      </div>
      <div className="h-2 bg-accent rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] rounded-full transition-all duration-1000 ease-out relative"
          style={{ 
            width: `${animatedLevel}%`,
            transform: isVisible ? 'translateX(0)' : 'translateX(-100%)'
          }}
        >
          <div className="absolute inset-0 bg-white/20 light:animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};