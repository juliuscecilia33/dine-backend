// services/familyService.ts

import * as familyModel from "../models/familyModel";
import { FamilyMember } from "../types/familyCircleTypes";

// Service to add a new family member
export const addFamilyMember = async (
  userId: string,
  data: Partial<FamilyMember>
): Promise<FamilyMember | null> => {
  return await familyModel.createFamilyMember(userId, data);
};

// Service to retrieve family members by user ID
export const getFamilyMembers = async (
  userId: string
): Promise<FamilyMember[]> => {
  return await familyModel.getFamilyMembersByUserId(userId);
};

// Service to update an existing family member
export const updateFamilyMember = async (
  id: string,
  data: Partial<FamilyMember>
): Promise<FamilyMember | null> => {
  return await familyModel.updateFamilyMember(id, data);
};

// Service to delete a family member
export const deleteFamilyMember = async (id: string): Promise<boolean> => {
  return await familyModel.deleteFamilyMember(id);
};
