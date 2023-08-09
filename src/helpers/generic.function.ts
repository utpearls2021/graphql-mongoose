import { Types } from "mongoose";

export const makeStringLowerCase = (string: string) => {
  return string.toLowerCase();
}

export const convertStringIdToObjectId = (id) => {
  try {
    return new Types.ObjectId(id);
  } catch (err) {
    return { exception: err };
  }
};