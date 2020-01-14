import React, { useState } from "react";
import "./orgTables.scss";
import data from "../tables/data.json";

const OrgLockerTables: React.FC = () => {

    //data from the data.json file is stored under the lockers variable
    let lockers = data;

    //use the following function to dynamically create the table header, this constraints using multiple class names for the styling though
    // function renderTableHeader() {
    //     let header = Object.keys(data[0]);
    //     return header.map((key, index) => {
    //         return <th className="cell100 column1" key={index}>{key.toUpperCase()}</th>;
    //     });
    // }

    //the table header is rendered 
    function renderTableHeader() {
        return (
            <tr className="row100 head">
                <th className="cell100 column1">Locker Id</th>
                <th className="cell100 column2">Status</th>
                <th className="cell100 column3">Current User</th>
                <th className="cell100 column4">Latest activity</th>
                <th className="cell100 column5">Action</th>
            </tr>
        );
    }

    //the table data is rendered
    function renderTableData() {
        return lockers.map((lockers, index) => {
            return (
                <tr className="row100 body" key={lockers.Id}>
                    <td className="cell100 column1">{lockers.Id}</td>
                    <td className="cell100 column2">{lockers.status}</td>
                    <td className="cell100 column3">{lockers.User}</td>
                    <td className="cell100 column4">{lockers.Activity}</td>
                    <td className="cell100 column5">{lockers.Action}</td>
                </tr>
            );
        });
    }

    return (
        <div className="limiter">
            <div className="container-table100">
                <div className="wrap-table100">
                    <div className="table100 ver1 m-b-110">
                        <div className="table100-head">
                            <table>
                                <thead>
                                    {renderTableHeader()}
                                </thead>
                            </table>
                        </div>
                        <div className="table100-body js-pscroll">
                            <table>
                                <tbody>
                                    {renderTableData()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrgLockerTables;