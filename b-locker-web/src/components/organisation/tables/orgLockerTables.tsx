import React, { useState, useEffect } from "react";
import "./orgTables.scss";
import { httpProvider } from "../../../global/http/httpProvider";


const OrgLockerTables: React.FC = (props) => {


    //data from the data.json file is stored under the lockers variable
    //let lockers = data;

    let http = new httpProvider();
    const lockerCall = 'lockers';
    const [lockerData, setLockerData] = useState({
        id: 0,
        guid: "",
        is_currently_claimable: false
    }[""]);

    useEffect(() => {
        componentConsole().then((res) => {
            setLockerData(res);
        })
    }, []);

    if (!lockerData) return (<div>Loading...</div>);


    // function to print api data to the console
    function componentConsole(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            http.getRequest('/' + lockerCall).then((res) => {
                resolve(res.data.data);
            }).catch((error) => {
                console.log(error);
                reject();
            });
        })
    }

    //the table header is rendered 
    function renderTableHeader() {
        return (
            <tr className="row100 head">
                <th className="cell100 column1">Locker Id</th>
                <th className="cell100 column2">Guid</th>
                <th className="cell100 column3">Status</th>
                <th className="cell100 column5">Action</th>
            </tr>
        );
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
                                    {
                                        lockerData.map((lockerData, index) => {
                                            console.log('lockers:', lockerData)
                                            return (
                                                <tr className="row100 body" key={lockerData.id}>
                                                    <td className="cell100 column1">{lockerData.id}</td>
                                                    <td className="cell100 column2">{lockerData.guid}</td>
                                                    <td className="cell100 column3">{lockerData.is_currently_claimable}</td>
                                                </tr>
                                            );
                                        }
                                        )}
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