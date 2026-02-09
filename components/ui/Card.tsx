import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', noPadding = false }) => {
  return (
    <div className={`bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] border border-gray-100/50 ${noPadding ? '' : 'p-8'} ${className}`}>
      {children}
    </div>
  );
};

export default Card;