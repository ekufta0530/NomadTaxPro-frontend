import moment from "moment";

export const formatDateRange = (dateFrom: Date, dateTo: Date) => {
  if (dateFrom && dateTo) {
    const formattedDateFrom = moment(dateFrom).format("D MMM YYYY");
    const formattedDateTo = moment(dateTo).format("D MMM YYYY");
    return `${formattedDateFrom} - ${formattedDateTo}`;
  } else {
    return "";
  }
};
