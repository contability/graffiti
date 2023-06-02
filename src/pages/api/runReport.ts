import { BetaAnalyticsDataClient } from '@google-analytics/data';
import credentials from '../../../ga4_private_key.json';
import { NextApiRequest, NextApiResponse } from 'next';

const propertyId = process.env.NEXT_PUBLIC_PROPERTY_ID;
// const propertyId = process.env.NEXT_PUBLIC_GA_ID;

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: credentials.client_email,
    private_key: credentials.private_key,
  },
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    metrics: [
      { name: 'newUsers' },
      { name: 'activeUsers' },
      { name: 'averageSessionDuration' },
    ],
    dimensions: [{ name: 'city' }, { name: 'dayOfWeek' }],
    dateRanges: [
      {
        startDate: '7daysAgo',
        endDate: 'today',
      },
    ],
  });

  res.status(200).send(response);
};
