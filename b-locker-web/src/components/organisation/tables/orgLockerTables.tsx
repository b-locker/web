import React, { useState } from "react";
import "./orgTables.scss";
import data from "../tables/data.json";

const OrgLockerTables: React.FC = () => {

    let lockers = data;

    function renderTableHeader() {
        let header = Object.keys(data[0]);
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>;
        });
    }

    function renderTableData() {
        return lockers.map((lockers, index) => {
            return (
                <tr key={lockers.Id}>
                    <td>{lockers.Id}</td>
                    <td>{lockers.status}</td>
                    <td>{lockers.User}</td>
                    <td>{lockers.Activity}</td>
                    <td>{lockers.Action}</td>
                </tr>
            );
        });
    }

    return (
        <div>
            <h1 id="title">React Dynamic Table</h1>
            <table id="students">
                <tbody>
                    <tr>{renderTableHeader()}</tr>
                    {renderTableData()}
                </tbody>
            </table>
        </div>
    );
};

export default OrgLockerTables;
