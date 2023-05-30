import { useEffect } from "react";

const Statistics = () => {
  const propertyId = process.env.NEXT_PUBLIC_GA_ID;

  const sampleRunReport = () => {
    fetch(
      `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        console.log(res);

        if (res) return res;
      })
      .catch((e) => {
        console.error(e);
      });
  };
  useEffect(() => {
    sampleRunReport();
  }, []);
  return <></>;
};

export default Statistics;
