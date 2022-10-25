import React, { useState } from "react";
import DisplayTable from "./ViewOpportunitiesTable/DisplayTable";
import TablePagination from "./viewOpportunitiesTablePagination/tablePagiantion";
import './ViewOpportunity.css';

const ViewOpportunity = () => {
  const [limit, setLimit] = useState<number>(10);
  const [offset, setOffset] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  return (
    <div>
      <div className='container-fluid p-2'>
            <div className="row">
                <div className='col-sm-12 col-md-4 text-left'>
                    <h3>OPPORTUNITIES</h3>
                </div>
                <div className='col-sm-12 col-md-8 text-right'>
                    <div className="pb-2">
                        <button className='btn mr-2 view-top-button'>New</button>
                        <button className='btn view-top-button'>Import</button>
                    </div>
                    <div>
                        <button className='btn mr-2 view-bottom-button'>Filter</button>
                        <button className='btn mr-2 view-bottom-button'>Columns</button>
                        <button className='btn view-bottom-button'>Insights</button>
                    </div>
                </div>
            </div><hr/>
            
    
      <div className="view-opportunities-body-container">
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
    </div>
  );
};

export default ViewOpportunity;



