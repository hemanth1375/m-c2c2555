import React, { useState } from "react";
import DisplayTable from "./ViewAccountsTable/DisplayTable";
import TablePagination from "./viewAccountsTablePagination/tablePagiantion";

const ViewAccounts = () => {
  const [limit, setLimit] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);
  const total: number = 1000;

  return (
    <div>
      <header>
        <h1 className="text-left">Accounts</h1>
      </header>
      <TablePagination
        offset={offset}
        total={total}
        limit={limit}
        setLimit={setLimit}
        setOffset={setOffset}
      />
      <DisplayTable />
    </div>
  );
};

export default ViewAccounts;
