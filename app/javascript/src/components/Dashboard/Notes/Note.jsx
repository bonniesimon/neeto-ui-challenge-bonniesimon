import React from "react";

import { MenuVertical, Clock } from "neetoicons";
import { Typography, Button, Avatar, Dropdown } from "neetoui";

const Note = ({ title, description }) => {
  const dropDownMenuOptions = ["Edit", "Delete"];

  return (
    <div className="mb-4 w-full rounded-lg border bg-white p-4 text-center shadow-md dark:border-gray-700 dark:bg-gray-800 sm:p-8">
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
          <Typography className="mx-1" style="body3">
            Created 2 hours ago
          </Typography>
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
