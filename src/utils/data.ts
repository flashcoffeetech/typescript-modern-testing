export function generateReportData(logFn: (data: any) => void) {
  const data = "Some dummy data for this demo app";
  if (logFn) {
    logFn(data);
  }

  return data;
}
