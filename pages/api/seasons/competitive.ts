import { SeasonsCompetitive } from "../../../libs/valorent/seasons";
import type { NextApiResponse } from "next";
export default async (_: any, res: NextApiResponse) => {
  const response = await SeasonsCompetitive();
  return res.status(200).json(response.data);
};
