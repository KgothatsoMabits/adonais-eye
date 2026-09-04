import { Request, Response } from 'express';
import { MockIdentityProvider } from '@adonais-eye/integrations';

const identityProvider = new MockIdentityProvider();

export const verifyIdentity = async (req: Request, res: Response) => {
  try {
    const { idNumber } = req.body;
    
    if (!idNumber) {
      return res.status(400).json({ error: 'ID Number is required' });
    }

    const result = await identityProvider.verifyIdentity(idNumber);
    
    if (!result.success) {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
