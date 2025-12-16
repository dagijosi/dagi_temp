import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  className = '',
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 duration-200';
  
  const variants = {
    primary: 'bg-theme-icon text-white hover:bg-theme-icon/90 shadow-lg shadow-theme-icon/20',
    secondary: 'bg-theme-surface text-theme-text hover:bg-theme-surface/80 shadow-sm border border-theme-border',
    outline: 'border-2 border-theme-border text-theme-text hover:bg-theme-surface hover:text-theme-icon hover:border-theme-icon',
    ghost: 'text-theme-text hover:bg-theme-surface hover:text-theme-icon',
  };

  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-11 px-8 text-base',
    lg: 'h-14 px-8 text-lg',
  };

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || isLoading}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </motion.button>
  );
};

export default Button;
