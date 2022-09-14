import dayjs from "dayjs";

const calculateCreatedAgo = dateTime => dayjs(dateTime).fromNow();

const dateToDayTimeFormat = dateTime => dayjs(dateTime).format("dddd, h:mm A");

export { calculateCreatedAgo, dateToDayTimeFormat };
