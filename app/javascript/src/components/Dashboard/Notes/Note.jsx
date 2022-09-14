import React from "react";

import { MenuVertical, Clock } from "neetoicons";
import { Typography, Button, Avatar, Dropdown, Tooltip } from "neetoui";

import { calculateCreatedAgo, dateToDayTimeFormat } from "utils/dateTime";

const Note = ({ createdAt, title, description }) => {
  const dropDownMenuOptions = ["Edit", "Delete"];

  return (
    <div className="mb-4 w-full rounded-md border bg-white p-4 text-center shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          <Typography>{title}</Typography>
        </h5>
        <Dropdown buttonStyle="text" icon={MenuVertical}>
          {dropDownMenuOptions.map((option, idx) => (
            <li key={idx}>{option}</li>
          ))}
        </Dropdown>
      </div>
      <div className="mb-4 flex text-left">
        <Typography style="body2">{description}</Typography>
      </div>
      <hr />
      <div className="my-4 flex items-center justify-between">
        <Button label="Getting Started" size="small" style="secondary" />
        <div className="flex items-center justify-between">
          <Clock className="mx-1" />
          <Tooltip content={dateToDayTimeFormat(createdAt)} position="bottom">
            <Typography className="mx-1" style="body3">
              Created {calculateCreatedAgo(createdAt)}
            </Typography>
          </Tooltip>
          <Avatar
            className="mx-1"
            size="small"
            user={{
              imageUrl: "https://i.pravatar.cc/300",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
