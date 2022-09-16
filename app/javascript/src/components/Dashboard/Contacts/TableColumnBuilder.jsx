import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Typography, Avatar } from "neetoui";

const TableColumnBuilder = [
  {
    title: "Name & Role",
    dataIndex: "name",
    key: "name",
    width: 40,
    render: (name, rowDataObj) => (
      <div className="flex flex-row items-center p-2">
        <Avatar
          size="medium"
          user={{
            name,
            imageUrl: rowDataObj.profilePic,
          }}
          onClick={() => {}}
        />
        <div className="mx-2 flex flex-col">
          <Typography style="h4">{name}</Typography>
          <Typography style="body2">{rowDataObj.role}</Typography>
        </div>
      </div>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: 30,
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
    width: 20,
  },
  {
    title: "",
    dataIndex: "options",
    key: "options",
    width: 10,
    render: () => <MenuHorizontal />,
  },
];

export default TableColumnBuilder;
