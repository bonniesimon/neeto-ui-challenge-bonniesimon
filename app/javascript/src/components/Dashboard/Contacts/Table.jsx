import React from "react";

import { Table as NeetoUITable } from "neetoui";

import { tableColumnBuilder } from "./utils";

const Table = ({ contacts = [], setShowDeleteAlert }) => (
  <div className="notes-table-height w-full">
    <NeetoUITable
      allowRowClick
      columnData={tableColumnBuilder(setShowDeleteAlert)}
      currentPageNumber={1}
      defaultPageSize={2}
      rowData={contacts}
    />
  </div>
);

export default Table;
