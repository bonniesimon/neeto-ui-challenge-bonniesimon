import dayjs from "dayjs";
import * as R from "ramda";

export const isPresent = R.pipe(R.either(R.isNil, R.isEmpty), R.not);

export const calculateCreatedAgo = dateTime => dayjs(dateTime).fromNow();

export const dateToDayTimeFormat = dateTime =>
  dayjs(dateTime).format("dddd, h:mm A");
