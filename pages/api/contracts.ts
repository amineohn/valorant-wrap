import { Contracts } from "libs/valorent/contracts";
import type { NextApiResponse } from "next";
export default async (_: any, res: NextApiResponse) => {
  const response = await Contracts();
  return res.status(200).json(response.data);
};
