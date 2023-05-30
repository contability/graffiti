import { useEffect } from "react";
import Header from "../common/Header";
import { BetaAnalyticsDataClient } from "@google-analytics/data";

const Statistics = () => {
  const propertyId = process.env.NEXT_PUBLIC_GA_ID;
  const CLIENT_ID = process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID;
  const SCOPES = ["https://www.googleapis.com/auth/analytics.readonly"];
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
    // const response = analyticsDataClient.runReport({
    //   property: `properties/${propertyId}`,
    //   dateRanges: [
    //     {
    //       startDate: "2023-05-26",
    //       endDate: "today",
    //     },
    //   ],
    //   dimensions: [
    //     {
    //       name: "city",
    //     },
    //   ],
    //   metrics: [
    //     {
    //       name: "activeUsers",
    //     },
    //   ],
    // });
    // console.log("report result:", response);

    // const scope = "https://www.googleapis.com/auth/analytics.readonly";
    // const keyFileLocation = "../../../arboreal-retina-388303-87db528f8f27.json";

    const VIEW_ID = "378781622";

    gapi.client
      .request({
        path: "https://analyticsreporting.googleapis.com/v4/reports:batchGet",
        method: "POST",
        body: {
          reportRequest: [
            {
              viewId: VIEW_ID,
              dataRanges: [
                {
                  stateDate: "7daysAgo",
                  endDate: "today",
                },
              ],
              metrics: [
                {
                  expression: "ga:sessions",
                },
              ],
            },
          ],
        },
      })
      .then((res) => {
        console.log(res);
      });
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
