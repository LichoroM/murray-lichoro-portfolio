import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-accent-teal disabled:pointer-events-none disabled:opacity-50';
  
  const variantClasses = {
    default: 'bg-foreground text-background hover:bg-foreground/90',
    primary: 'bg-accent-teal text-white hover:bg-accent-teal/90 hover:scale-105',
    secondary: 'bg-accent-purple text-white hover:bg-accent-purple/90 hover:scale-105',
    outline: 'border-2 border-accent-teal text-accent-teal hover:bg-accent-teal hover:text-white',
    ghost: 'text-foreground hover:bg-accent hover:text-foreground'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};