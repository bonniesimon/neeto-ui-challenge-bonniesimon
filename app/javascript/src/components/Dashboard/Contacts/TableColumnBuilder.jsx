import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Typography, Avatar, Dropdown } from "neetoui";

import { dateTimeToMonthDayYearFormat } from "./utils";

const TableColumnBuilder = handleDelete => [
  {
    title: "Name & Role",
    dataIndex: "name",
    key: "name",
    width: 40,
    render: (name, row) => (
      <div className="flex flex-row items-center p-2">
        <Avatar
          size="medium"
          user={{
            name,
            imageUrl: row.profilePic,
          }}
          onClick={() => {}}
        />
        <div className="mx-2 flex flex-col">
          <Typography style="h5">{name}</Typography>
          <Typography style="body3" weight="light">
            {row.role}
          </Typography>
        </div>
      </div>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: 25,
    render: email => (
      <Typography style="body3" weight="light">
        {email}
      </Typography>
    ),
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
    width: 25,
    render: createdAt => (
      <Typography style="body3" weight="light">
        {dateTimeToMonthDayYearFormat(createdAt)}
      </Typography>
    ),
  },
  {
    title: "",
    dataIndex: "options",
    key: "options",
    width: 10,
    render: () => (
      <Dropdown buttonStyle="text" icon={MenuHorizontal}>
        <li onClick={handleDelete}>Delete</li>
      </Dropdown>
    ),
  },
];

export default TableColumnBuilder;
