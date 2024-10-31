import { Request, Response } from "express";
import * as standardCardService from "../../services/cards/standardService";

// Get all standard cards by user
export const getAllStandardCardsByUser = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const standardCards = await standardCardService.getAllStandardCardsByUser(
      id
    );
    res.status(200).json(standardCards);
  } catch (error) {
    res.status(500).json({
      msg: "Failed to retrieve all User's standard Cards",
      error: error,
    });
  }
};

// Get a specific standard card by user and card id
export const getStandardCardByUserAndCardID = async (
  req: Request,
  res: Response
) => {
  try {
    const { id, user_id } = req.params;
    const standardCard =
      await standardCardService.getStandardCardByUserAndCardID(id, user_id);
    if (standardCard) {
      res.status(200).json(standardCard);
    } else {
      res.status(404).json({ error: "Standard Card not found" });
    }
  } catch (error) {
    res.status(500).json({
      msg: "Failed to retrieve Standard Card",
      error: error,
    });
  }
};

// Create a new standard card
// TODO:
