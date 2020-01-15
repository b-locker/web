import React from "react";
import "./orgTables.scss";
import data from "../tables/data/data.json";
import axios from 'axios';
import { httpProvider } from "../../../global/http/httpProvider";


const OrgLockerTables: React.FC = (props) => {


    //data from the data.json file is stored under the lockers variable
    //let lockers = data;

    let http = new httpProvider();
    const lockerCall = 'lockers';
    let lockers;


    // function to print api data to the console
    function componentConsole(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            http.getRequest('/' + lockerCall).then((res) => {
                let data = res.data.data;
                lockers = (data);
                resolve();

                console.log('lockers', lockers);
            }).catch((error) => {
                console.log(error);
                reject();
            });
        })
    }

    // // function to print api data
    // function componentApi(): any {
    //     http.getRequest('/' + lockerCall).then(res => {
    //         console.log(res);
    //         state.lockerAPI = (res.data);

    //         console.log('lockers', state.LockerAPI;
    //     })
    // }


    // componentConsole();


    //niels
    //componentDidMount();

    //niels
    // function componentDidMount(): any
    // {
    //     axios.get('http://145.24.222.153:8080/api/v1/lockers').then (res => {
    //         console.log(res);
    //         state.persons = (res.data);

    //         console.log('persons:', state.persons);
    //         //this.setState({ persons: res.data });
    //     })

    // }



    //niels
    //let lockers = state.persons;

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
        let result;
        componentConsole().then((res) => {
            result = lockers.map((lockers, index) => {
                return (
                    <tr className="row100 body" key={lockers.id}>
                        <td className="cell100 column1">{lockers.id}</td>
                        <td className="cell100 column2">{lockers.guid}</td>
                        <td className="cell100 column3">{lockers.is_currently_claimable}</td>
                    </tr>
                );
            });
        })
        return result;
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