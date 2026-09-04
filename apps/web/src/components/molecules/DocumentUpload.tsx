import React from 'react';
import { Upload } from 'lucide-react';

interface DocumentUploadProps {
  label: string;
  subtitle: string;
  onUpload?: () => void;
}

export const DocumentUpload: React.FC<DocumentUploadProps> = ({ label, subtitle, onUpload }) => {
  return (
    <button
      type="button"
      onClick={onUpload}
      className="w-full border-2 border-dashed border-brand-blue/30 rounded-xl p-6 flex flex-col items-center justify-center bg-[#F8FAFC] hover:bg-brand-light/50 hover:border-brand-blue/50 transition-colors"
    >
      <Upload className="w-6 h-6 text-brand-blue mb-3" />
      <span className="text-[15px] font-semibold text-brand-dark mb-1 text-center">{label}</span>
      <span className="text-[13px] text-gray-500 text-center">{subtitle}</span>
    </button>
  );
};
