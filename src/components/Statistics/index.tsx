import { useEffect } from "react";
import Header from "../common/Header";
// import { BetaAnalyticsDataClient } from "@google-analytics/data";

const Statistics = () => {
  const propertyId = process.env.NEXT_PUBLIC_GA_ID;
  //   const CLIENT_ID = process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID;
  //   const PRIVATE_KEY = process.env.NEXT_PUBLIC_OAUTH_CLIENT_PRIVATE_KEY;
  //   const SCOPES = ["https://www.googleapis.com/auth/analytics.readonly"];
  // const analyticsDataClient = new BetaAnalyticsDataClient();

  const sampleRunReport = () => {
    // fetch(
    //   // `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`,
    //   `https://analyticsadmin.googleapis.com/v1beta/properties/${propertyId}:acknowledgeUserDataCollection`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   }
    // )
    //   .then((res) => {
    //     console.log(res);
    //     // if (res) return res;
    //   })
    //   .catch((e) => {
    //     console.error(e);
    //   });
    fetch(
      `https://www.googleapis.com/analytics/v3/data/ga?ids=ga:${propertyId}&start-date=2023-05-26&end-date=2023-05-30&metrics=ga:session,ga:bounces`,
      {
        method: "GET",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        // body: JSON.stringify(data),
      }
    )
      .then((res) => {
        console.log(res);
        // if (res) return res;
      })
      .catch((e) => {
        console.error(e);
      });
    // const response: any = analyticsDataClient.runReport({
    //   property: `properties/${propertyId}`,
    //   dateRanges: [
    //     {
    //       startDate: "2023-05-26",
    //       endDate: "today",
    //     },
    //   ],
    //   dimensions: [
    //     {
    //       name: "deviceCategory",
    //     },
    //   ],
    //   metrics: [
    //     {
    //       name: "activeUsers",
    //     },
    //   ],
    // });
    // console.log("report result:", JSON.stringify(response.row));
    // const scope = "https://www.googleapis.com/auth/analytics.readonly";
    // const keyFileLocation = "../../../arboreal-retina-388303-87db528f8f27.json";
    // const VIEW_ID = "378781622";
    // gapi.client
    //   .request({
    //     path: "https://analyticsreporting.googleapis.com/v4/reports:batchGet",
    //     method: "POST",
    //     body: {
    //       reportRequest: [
    //         {
    //           viewId: VIEW_ID,
    //           dataRanges: [
    //             {
    //               stateDate: "7daysAgo",
    //               endDate: "today",
    //             },
    //           ],
    //           metrics: [
    //             {
    //               expression: "ga:sessions",
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   });
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
