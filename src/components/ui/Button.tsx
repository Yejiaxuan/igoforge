import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  icon,
  className = '',
  ...props 
}) => {
  const baseStyles = "apple-button inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white disabled:opacity-50 disabled:cursor-not-allowed tracking-tight";
  
  const variants = {
    primary: "bg-[#1D1D1F] text-white hover:bg-[#333336] border border-transparent shadow-lg shadow-black/5",
    secondary: "bg-white text-[#1D1D1F] hover:bg-[#F5F5F7] border border-[#D2D2D7] shadow-sm",
    ghost: "bg-transparent text-[#0071E3] hover:text-[#0077ED] hover:bg-[#0071E3]/5",
    link: "text-[#0071E3] hover:text-[#0077ED] underline-offset-4 hover:underline p-0 h-auto"
  };

  const sizes = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  // Override sizes for link variant
  const appliedSize = variant === 'link' ? '' : sizes[size];

  return (
    <button 
      className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${appliedSize} 
        ${fullWidth ? 'w-full' : ''} 
        ${className}
      `}
      {...props}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;