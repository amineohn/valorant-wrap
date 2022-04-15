import type { NextApiResponse } from "next";
import { Bundles } from "../../libs/valorent/bundles";
export default async (_: any, res: NextApiResponse) => {
  const response = await Bundles();
  return res.status(200).json(response.data);
};
