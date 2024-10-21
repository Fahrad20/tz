import { IProduct } from "@/constants/types";

export const getFlattenProducts = (data: any): IProduct => {
  const result: any = {};

  Object.keys(data).forEach((key) => {
    typeof data[key] === "object"
      ? Object.assign(result, data[key])
      : (result[key] = data[key]);
  });

  return result;
};
