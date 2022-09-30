import React from 'react';
import './ViewOpportunity.css';
const ViewOpportunity = () => {
    return (
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

        </div>
    );
};

export default ViewOpportunity;

