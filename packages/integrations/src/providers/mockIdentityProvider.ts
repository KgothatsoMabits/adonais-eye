import { IdentityVerificationResult } from '@adonais-eye/shared';

export interface IdentityVerificationProvider {
  verifyIdentity(idNumber: string): Promise<IdentityVerificationResult>;
}

export class MockIdentityProvider implements IdentityVerificationProvider {
  async verifyIdentity(idNumber: string): Promise<IdentityVerificationResult> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500)); 

    // Deterministic mock behavior: fails if it ends in '0'
    if (idNumber.endsWith('0')) {
      return {
        success: false,
        referenceId: `ERR-${Date.now()}`,
        message: 'Identity verification failed. Document not recognized.'
      };
    }

    return {
      success: true,
      referenceId: `ID-${Date.now()}`,
      simulatedName: 'Synthetic Citizen ' + idNumber.slice(-4)
    };
  }
}
