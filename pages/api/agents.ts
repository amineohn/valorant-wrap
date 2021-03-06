import type { NextApiResponse } from "next";
import { Agent } from "../../libs/valorent/agents";
export default async (_: any, res: NextApiResponse) => {
  const response = await Agent();

  return res.status(200).json(response.data);
};
