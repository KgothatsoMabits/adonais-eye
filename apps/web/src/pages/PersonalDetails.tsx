import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Camera, CheckCircle2 } from 'lucide-react';
import { Button, FormField, SelectField } from '@adonais-eye/ui';
import { DocumentUpload } from '../components/molecules/DocumentUpload';

export const PersonalDetails = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: 'Sipho Nkosi',
    idNumber: '9402145890081',
    street: '',
    city: '',
    province: '',
    idDocumentType: '',
    proofOfAddressType: ''
  });

  const handleNext = () => setStep(2);
  const handleCancel = () => navigate(-1);

  const handleSave = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => {
        navigate('/home');
      }, 3000);
    }, 1500);
  };

  const provinceOptions = [
    { label: 'Gauteng', value: 'gauteng' },
    { label: 'Western Cape', value: 'western-cape' },
    { label: 'KwaZulu-Natal', value: 'kzn' },
    { label: 'Eastern Cape', value: 'eastern-cape' },
    { label: 'Free State', value: 'free-state' },
    { label: 'Mpumalanga', value: 'mpumalanga' },
    { label: 'Limpopo', value: 'limpopo' },
    { label: 'North West', value: 'north-west' },
    { label: 'Northern Cape', value: 'northern-cape' }
  ];

  const idOptions = [
    { label: 'Smart ID Card', value: 'smart-id' },
    { label: 'Green ID Book', value: 'green-id' },
    { label: 'Passport', value: 'passport' }
  ];

  const addressOptions = [
    { label: 'Utility Bill', value: 'utility' },
    { label: 'Bank Statement', value: 'bank' },
    { label: 'Lease Agreement', value: 'lease' }
  ];

  const renderSuccessModal = () => {
    if (!showSuccess) return null;
    return (
      <div className="absolute inset-0 z-50 bg-brand-dark/40 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
        <div className="bg-white w-full max-w-sm rounded-[32px] p-6 py-10 shadow-2xl flex flex-col items-center justify-center text-center animate-modal-up">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h3 className="text-[22px] font-bold text-brand-dark mb-3 tracking-tight">Verification in Progress</h3>
          <p className="text-gray-500 text-[15px] leading-relaxed">
            Your documents have been securely submitted. You will be notified via SMS as soon as our team has verified your identity.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex-1 flex flex-col bg-white h-full w-full max-w-md mx-auto relative overflow-hidden">
      {renderSuccessModal()}
      
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <button 
          onClick={step === 1 ? handleCancel : () => setStep(1)} 
          className="flex items-center text-brand-dark font-medium hover:opacity-80"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back
        </button>
        <span className="text-[17px] font-bold text-brand-dark">Profile</span>
        <div className="w-16" /> {/* Spacer for centering */}
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 custom-scrollbar flex flex-col gap-5">
        {step === 1 ? (
          <>
            {/* Avatar Upload */}
            <div className="flex justify-center mb-2">
              <div className="relative">
                <div className="w-24 h-24 rounded-full border-2 border-brand-blue flex items-center justify-center bg-brand-light text-brand-blue overflow-hidden">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-brand-blue rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                  <Camera className="w-4 h-4" />
                </button>
              </div>
            </div>

            <FormField
              label="Full name"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />

            <FormField
              label="SA ID Number"
              value={formData.idNumber}
              onChange={(e) => setFormData({ ...formData, idNumber: e.target.value })}
            />

            <FormField
              label="Street"
              placeholder="e.g. 124 Commission St"
              value={formData.street}
              onChange={(e) => setFormData({ ...formData, street: e.target.value })}
            />

            <div className="flex gap-4">
              <div className="flex-1">
                <FormField
                  label="City"
                  placeholder="Johannesburg"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                />
              </div>
              <div className="flex-1">
                <SelectField
                  label="Province"
                  value={formData.province}
                  options={provinceOptions}
                  onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                />
              </div>
            </div>

            <div className="flex gap-3 mt-4 mb-4">
              <Button variant="secondary" className="flex-1" onClick={handleCancel}>
                Cancel
              </Button>
              <Button className="flex-1" onClick={handleNext}>
                Save
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="mb-2">
              <h1 className="text-[24px] font-bold text-brand-dark mb-1">Submit documents</h1>
              <p className="text-gray-500 text-[15px]">Must be certified copies not older than 3 months.</p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <SelectField
                  label="Identification document"
                  value={formData.idDocumentType}
                  options={idOptions}
                  onChange={(e) => setFormData({ ...formData, idDocumentType: e.target.value })}
                />
                <DocumentUpload 
                  label="Upload Certified SA ID Document" 
                  subtitle="PDF, JPG, or PNG max 5MB" 
                />
              </div>

              <div className="flex flex-col gap-2">
                <SelectField
                  label="Proof of home address"
                  value={formData.proofOfAddressType}
                  options={addressOptions}
                  onChange={(e) => setFormData({ ...formData, proofOfAddressType: e.target.value })}
                />
                <DocumentUpload 
                  label="Upload Proof of Home Address" 
                  subtitle="PDF, JPG, or PNG max 5MB" 
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6 mb-4">
              <Button variant="secondary" className="flex-1" onClick={() => setStep(1)}>
                Cancel
              </Button>
              <Button className="flex-1" onClick={handleSave} isLoading={isSubmitting}>
                Save
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
