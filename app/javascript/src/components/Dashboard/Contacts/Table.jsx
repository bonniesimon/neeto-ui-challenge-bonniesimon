import React from "react";

import { Table as NeetoUITable, Pagination } from "neetoui";

import TableColumnBuilder from "./TableColumnBuilder";

const Table = ({ contacts = [] }) => (
  <div className="notes-table-height w-full">
    <NeetoUITable
      allowRowClick
      columnData={TableColumnBuilder}
      rowData={contacts}
    />
    <div className="mt-3 flex w-full justify-end">
      <Pagination count={1000} pageNo={3} pageSize={100} />
    </div>
  </div>
);

export default Table;
