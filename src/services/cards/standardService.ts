import * as standardModel from "../../models/cards/standardModel";
import { StandardCard } from "../../types/cards/standardCardTypes";

// Get all standard cards by user
export const getAllStandardCardsByUser = async (
  id: string
): Promise<StandardCard[]> => {
  return await standardModel.getAllStandardCardsByUser(id);
};

// Get a specific standard card by user and card id
export const getStandardCardByUserAndCardID = async (
  id: string,
  user_id: string
): Promise<StandardCard | null> => {
  return await standardModel.getStandardCardByUserAndCardID(id, user_id);
};

// Create a standard card
export const createStandardCard = async (
  data: Partial<StandardCard>
): Promise<StandardCard> => {
  return await standardModel.createStandardCard(data);
};

// Update a standard card
export const updateStandardCard = async (
  id: string,
  data: Partial<StandardCard>
): Promise<StandardCard | null> => {
  return await standardModel.updateStandardCard(id, data);
};

// Delete a standard card
export const deleteStandardCard = async (id: string): Promise<boolean> => {
  return await standardModel.deleteStandardCard(id);
};
