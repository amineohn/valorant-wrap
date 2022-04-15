import { Maps } from "libs/valorent/maps";
import type { NextApiResponse } from "next";
export default async (_: any, res: NextApiResponse) => {
  const response = await Maps();
  return res.status(200).json(response.data);
};
