import dayjs from "dayjs";

export const dateTimeToMonthDayYearFormat = dateTime =>
  dayjs(dateTime).format("MMM, D, YYYY");
