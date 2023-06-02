export interface ReportData {
  dimensionHeaders: { name: string }[];
  metricHeaders: { name: string; type: string }[];
  rowCount: number;
  rows: ReportRow[];
}

export interface ReportRow {
  dimensionValues: dimensionValues[];
  metricValues: MetricValue[];
}

export interface dimensionValues {
  value: string;
  oneValue: string;
}

export interface MetricValues {
  value: string;
  oneValue: string;
}
