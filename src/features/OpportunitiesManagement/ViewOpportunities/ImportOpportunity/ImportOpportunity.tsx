import React from 'react';

const ImportOpportunity = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <h1>Step 1: Upload Import File</h1>
                    <p>Select a file on your computer that contains the data that you would like to import, or download the template to get a head start on creating the import file.</p>
                    <hr />
                    <a href="#" style={{ color: "red" }}>Download Import File Template</a>
                    <p>Select File:</p>
                    <input type="file"/>
                    <p>This can only be alphanumeric characters, plus '.' , '-' and '_'</p><hr />
                    <p>What would you like to do with the imported data? </p>
                    <div>
                        <input type="radio" id="first" name="btn" />
                        <label htmlFor="first">Create new records only</label>
                    </div>
                    <div>
                        <input type="radio" id="second" name="btn" />
                        <label htmlFor="first">Create new records and update existing records</label>
                    </div>
                    <button className="btn btn-primary">Next</button>
                </div>
            </div>
        </div>
    );
};

export default ImportOpportunity;