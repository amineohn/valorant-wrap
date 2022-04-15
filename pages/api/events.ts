import { Events } from "libs/valorent/events";
import type { NextApiResponse } from "next";
export default async (_: any, res: NextApiResponse) => {
  const response = await Events();
  return res.status(200).json(response.data);
};
