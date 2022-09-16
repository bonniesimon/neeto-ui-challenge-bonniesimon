import dayjs from "dayjs";

export const calculateCreatedAgo = dateTime => dayjs(dateTime).fromNow();

export const dateToDayTimeFormat = dateTime =>
  dayjs(dateTime).format("dddd, h:mm A");
