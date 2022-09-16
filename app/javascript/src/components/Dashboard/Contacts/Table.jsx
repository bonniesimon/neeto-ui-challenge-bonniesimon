import React from "react";

import { Table as NeetoUITable } from "neetoui";

import TableColumnBuilder from "./TableColumnBuilder";

const Table = ({ contacts = [], setShowDeleteAlert }) => {
  const handleDelete = () => {
    setShowDeleteAlert(true);
  };
  return (
    <div className="notes-table-height w-full">
      <NeetoUITable
        allowRowClick
        columnData={TableColumnBuilder(handleDelete)}
        currentPageNumber={1}
        defaultPageSize={2}
        rowData={contacts}
      />
    </div>
  );
};

export default Table;
