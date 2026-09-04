import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AuthenticationTemplateProps {
  children: React.ReactNode;
  showBackButton?: boolean;
  onBack?: () => void;
  title: string;
  subtitle: string;
}

export const AuthenticationTemplate: React.FC<AuthenticationTemplateProps> = ({
  children,
  showBackButton = true,
  onBack,
  title,
  subtitle,
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-transparent px-6 py-6 h-full overflow-y-auto custom-scrollbar w-full max-w-md mx-auto">
      {showBackButton && (
        <button 
          onClick={handleBack} 
          className="flex items-center text-brand-dark font-medium mb-4 mt-2 w-fit hover:opacity-80"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back
        </button>
      )}

      <div className="mb-6 px-1">
        <h1 className="text-[34px] font-bold text-brand-dark mb-1.5 leading-tight tracking-tight">{title}</h1>
        <p className="text-gray-500 text-[16px]">{subtitle}</p>
      </div>

      <div className="flex flex-col gap-4 flex-1 pb-4">
        {children}
      </div>
    </div>
  );
};
