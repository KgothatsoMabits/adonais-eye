export type Role = 'CITIZEN' | 'OFFICER' | 'DISPATCHER' | 'ADMIN';

export interface User {
  id: string;
  role: Role;
}

export type IdentityVerificationStatus = 'PENDING' | 'VERIFIED' | 'FAILED';

export interface CitizenProfile {
  userId: string;
  fullName: string;
  phone: string;
  phoneVerified: boolean;
  identityVerificationStatus: IdentityVerificationStatus;
  createdAt: string;
  updatedAt: string;
}

export interface IdentityVerificationResult {
  success: boolean;
  referenceId: string;
  simulatedName?: string;
  message?: string;
}
