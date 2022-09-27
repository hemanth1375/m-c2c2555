import React, { useState } from "react";
import DisplayTable from "./ViewAccountsTable/DisplayTable";
import TablePagination from "./viewAccountsTablePagination/tablePagiantion";
import "./ViewAccounts.css";

const ViewAccounts = () => {
  const [limit, setLimit] = useState<number>(10);
  const [offset, setOffset] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  return (
    <div>
      <header>
        <h1 className="text-left">Accounts</h1>
      </header>
      <div className="view-accounts-body-container">
        <TablePagination
          offset={offset}
          total={total}
          limit={limit}
          setLimit={setLimit}
          setOffset={setOffset}
        />
        <DisplayTable limit={limit} offset={offset} setTotal={setTotal} />
      </div>
    </div>
  );
};

export default ViewAccounts;
