import type { NextApiResponse } from "next";
import { Agent } from "../../libs/valorent/agents";
export default async (_: any, res: NextApiResponse) => {
  const response = await Agent();
  try {
    return res.status(200).json(response.data);
  } catch (e: any) {
    return res.status(403).json({ error: e });
  }
};
