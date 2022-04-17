import type { NextApiResponse } from "next";
import { Version } from "../../libs/valorent/version";
export default async (_: any, res: NextApiResponse) => {
  const response = await Version();
  return res.status(200).json(response.data.data);
};
