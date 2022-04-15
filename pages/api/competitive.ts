import { Competitive } from "./../../libs/valorent/competitive";
import type { NextApiResponse } from "next";
export default async (_: any, res: NextApiResponse) => {
  const response = await Competitive();
  return res.status(200).json(response.data.data);
};
