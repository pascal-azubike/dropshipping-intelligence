
import React from 'react';
import { TrendingUp, Zap } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showText?: boolean;
  variant?: 'default' | 'white' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  className = '', 
  showText = true,
  variant = 'default'
}) => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8', 
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl', 
    xl: 'text-3xl'
  };

  const iconColorClasses = {
    default: 'text-primary',
    white: 'text-white',
    dark: 'text-gray-900'
  };

  const textColorClasses = {
    default: 'text-foreground',
    white: 'text-white', 
    dark: 'text-gray-900'
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="relative">
        <div className={`${sizeClasses[size]} ${iconColorClasses[variant]} relative`}>
          <TrendingUp className="absolute inset-0" />
          <Zap className={`absolute inset-0 ${sizeClasses[size]} opacity-30 transform scale-75`} />
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-80"></div>
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={`${textSizeClasses[size]} font-bold ${textColorClasses[variant]} leading-none`}>
            AI Dropship
          </span>
          <span className={`text-xs ${textColorClasses[variant]} opacity-75 leading-none`}>
            Intelligence
          </span>
        </div>
      )}
    </div>
  );
};
