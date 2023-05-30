import { useEffect } from "react";
import Header from "../common/Header";
import { BetaAnalyticsDataClient } from "@google-analytics/data";

const Statistics = () => {
  const propertyId = process.env.NEXT_PUBLIC_GA_ID;
  const analyticsDataClient = new BetaAnalyticsDataClient();

  const sampleRunReport = () => {
    // fetch(
    //   `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // )
    //   .then((res) => {
    //     console.log(res);

    //     // if (res) return res;
    //   })
    //   .catch((e) => {
    //     console.error(e);
    //   });

    const response = analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: "2023-05-26",
          endDate: "today",
        },
      ],
      dimensions: [
        {
          name: "city",
        },
      ],
      metrics: [
        {
          name: "activeUsers",
        },
      ],
    });

    console.log("report result:", response);
  };
  useEffect(() => {
    sampleRunReport();
  }, []);
  return (
    <div>
      <Header />
      <h1>통계</h1>
    </div>
  );
};

export default Statistics;
