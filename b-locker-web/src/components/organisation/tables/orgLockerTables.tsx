import React, { useState, useEffect } from "react";
import "./orgTables.scss";
import { httpProvider } from "../../../global/http/httpProvider";
import { useHistory } from "react-router-dom";

import chevronIcon from '../../../assets/chevron-right.svg'

const OrgLockerTables: React.FC = (props) => {

    let history = useHistory();
    let http = new httpProvider();
    const lockerCall = 'lockers';
    const [lockerData, setLockerData] = useState({
        id: 0,
        guid: "",
        is_currently_claimable: false
    }[""]);


    function redirectSingleLocker(e: any) {
        history.push('/singlelocker');
    }

    useEffect(() => {
        componentConsole().then((res) => {
            setLockerData(res);
        })
        // eslint-disable-next-line   
    }, []);
    if (!lockerData) return (<div>Loading...</div>);


    // function to print api data to the console
    function componentConsole(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            http.getRequest('/' + lockerCall).then((res) => {
                let data = res.data.data;
                data.forEach(locker => {
                    console.log('test', locker.is_currently_claimable);
                    locker.is_currently_claimable = (locker.is_currently_claimable ? "Unused" : "Used");
                });
                console.log('data:', data);
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
                <th className="cell100 column3">Availability</th>
                <th className="cell100 column4">Action</th>
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
                                                    <td className="cell100 column4"><button className="org-href-button" onClick={redirectSingleLocker}><img className="chrevron-icon" src={chevronIcon} alt='' /></button></td>
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