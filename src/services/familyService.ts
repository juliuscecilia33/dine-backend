// familyCircleService.ts

import * as familyCircleModel from "../models/familyModel";
import { FamilyCircle } from "../types/familyCircleTypes";

export const createFamilyRelationship = async (
  userId: string,
  relatedUserId: string,
  relationship: string
): Promise<FamilyCircle | null> => {
  return familyCircleModel.createFamilyRelationship(
    userId,
    relatedUserId,
    relationship
  );
};

export const getFamilyByUserId = async (
  userId: string
): Promise<FamilyCircle[]> => {
  return familyCircleModel.getFamilyByUserId(userId);
};

export const updateFamilyRelationship = async (
  id: string,
  relationship: string
): Promise<FamilyCircle | null> => {
  return familyCircleModel.updateFamilyRelationship(id, relationship);
};

export const deleteFamilyRelationship = async (
  id: string
): Promise<boolean> => {
  return familyCircleModel.deleteFamilyRelationship(id);
};
