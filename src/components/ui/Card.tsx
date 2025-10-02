import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true 
}) => {
  const baseClasses = [
    'rounded-xl p-6',
    // Dynamic card with theme-responsive borders
    'dynamic-card',
    // Subtle surface + texture
    'bg-card/70 backdrop-blur-sm',
    // Soft shadow that deepens on hover
    'shadow-[var(--shadow-soft)]',
  ].join(' ');
  const hoverClasses = hover ? 'card-hover' : '';
  
  return (
    <div className={`card-surface ${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
};

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <h3 className={`text-xl font-medium text-foreground ${className}`}>
      {children}
    </h3>
  );
};

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`text-muted-foreground ${className}`}>
      {children}
    </div>
  );
};