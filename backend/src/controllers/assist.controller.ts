import { Request, Response } from "express";

interface AssistanceRequest {
  requestId: number;
  citizenId: string;
  location: string;
  incidentType: string;
  notes?: string;
  timestamp: string;
}

const fakeDatabase: AssistanceRequest[] = [];

export const createAssistanceRequest = (req: Request, res: Response) => {
  const { citizenId, location, incidentType, notes } = req.body;

  if (!citizenId || !location || !incidentType) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const newRequest: AssistanceRequest = {
    requestId: Date.now(),
    citizenId,
    location,
    incidentType,
    notes,
    timestamp: new Date().toISOString()
  };

  fakeDatabase.push(newRequest);

  return res.status(201).json({
    message: "Assistance request submitted successfully",
    data: newRequest
  });
};

export const getAllRequests = (_req: Request, res: Response) => {
  return res.status(200).json({
    message: "Fetched all requests",
    data: fakeDatabase
  });
};

