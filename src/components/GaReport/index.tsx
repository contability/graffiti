import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  MetricValues,
  ReportData,
  dimensionValues,
} from '../../../types/gaReport';

const GaReport: React.FC = () => {
  const [dimensionHeaders, setDimensionHeaders] =
    useState<{ name: string }[]>();
  const [metricHeaders, setMetricHeaders] =
    useState<{ name: string; type: string }[]>();
  const [dimensionValues, setDimensionValues] = useState<dimensionValues[]>([]);
  const [metricValues, setMetricValues] = useState<MetricValues[]>([]);

  const org = [1, 2, 3, 4, 5];

  const getReport = async () => {
    const { data } = await axios.get<ReportData>('/api/runReport');

    console.log(data);

    setDimensionHeaders(data.dimensionHeaders);
    setMetricHeaders(data.metricHeaders);
    data.rows.map((row) => {
      setDimensionValues([...dimensionValues, ...row.dimensionValues]);
      setMetricValues([...metricValues, ...row.metricValues]);
    });
  };

  useEffect(() => {
    getReport();
  }, []);

  return (
    <div className="p-lg">
      <h1>Run Report</h1>
      <hr />
      <h3>Dimension</h3>
      {dimensionHeaders?.map((dimensionHeader, dimensionHeaderIndex) => (
        <span key={dimensionHeaderIndex}>{dimensionHeader.name} </span>
      ))}
      <br />
      {dimensionValues?.map((dimensionValue, dimensionValueIndex) => (
        <span key={dimensionValueIndex}>{dimensionValue.value} </span>
      ))}
      <hr />
      <h3>metrics</h3>
      {metricHeaders?.map((metricHeader, metricHeaderIndex) => (
        <span key={metricHeaderIndex}>{metricHeader.name} </span>
      ))}
      <br />
      {metricValues?.map((metricValue, metricValueIndex) => (
        <span key={metricValueIndex}>{metricValue.value} </span>
      ))}
      <hr />
    </div>
  );
};

export default GaReport;
