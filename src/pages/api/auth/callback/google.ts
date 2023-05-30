import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const propertyId = process.env.NEXT_PUBLIC_GA_ID;
  const CLIENT_ID = process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID;
  const PRIVATE_KEY = process.env.NEXT_PUBLIC_OAUTH_CLIENT_PRIVATE_KEY;

  const startDate = req.query.startDate || "2023-05-26";
  const post = req.query.post;

  try {
    window.gapi.client.request({
      path: "/v4/reports:batchGet",
    });
  } catch (e) {}
};
