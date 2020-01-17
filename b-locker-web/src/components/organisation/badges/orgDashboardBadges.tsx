import React, { useEffect, useState } from 'react';
import './orgBadges.scss';

import lockerIcon from '../../../assets/locker.png'
import { httpProvider } from '../../../global/http/httpProvider';

const OrgDashboardBadges: React.FC = () => {

    let http = new httpProvider();
    // let guid: string = location.pathname.replace("/l/", "");
    const lockerCall = 'lockers';
    const [lockerData, setLockerData] = useState([{
        id: 0,
        guid: "",
        active_claim: null
    }]);

    useEffect(() => {
        componentConsole().then((res) => {
            setLockerData(res);
        })
        // eslint-disable-next-line   
    }, []);

    if (lockerData == undefined) return (<div>Loading...</div>);

    //function to get all lockers
    function getAllLockers() {
        let amount = 0;

        for (let i = 0; i < lockerData.length; i++) {
            amount++
        }

        // console.log('log from getusedlockers, amount: ', amount)
        return (amount)
    }

    //function to get all used lockers
    function getUsedLockers() {
        let amount = 0;

        for (let i = 0; i < lockerData.length; i++) {
            console.log('lockerdata ', lockerData[i].active_claim)
            if (lockerData[i].active_claim !== null) {
                amount++;
            }
        }
        console.log('log from getusedlockers, amount: ', amount)
        return (amount)
    }

    //function to get all unused lockers 
    function getUnusedLockers() {
        let amount = 0;

        for (let i = 0; i < lockerData.length; i++) {
            if (lockerData[i].active_claim == null) {
                amount++;
            }
        }
        console.log('log from getUnusedlockers', amount);

        return (amount)
    }


    // function to print api data to the console
    function componentConsole(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            http.getRequest('/' + lockerCall).then((res) => {
                let data = res.data.data;
                // data.forEach(locker => {
                //     console.log('test', locker.is_currently_claimable);
                //     locker.is_currently_claimable = (locker.is_currently_claimable ? "Unused" : "Used");
                // });
                console.log('data:', data);
                resolve(res.data.data);
            }).catch((error) => {
                console.log(error);
                reject();
            });
        })
    }

    return (
        <div className="row">
            <div className="flex-container">
                <div className="box1">
                    <div className="box-left-side">
                        <img className="locker-icon" src={lockerIcon} alt='' />
                        <p>Used</p>

                    </div>
                    <div className="box-right-side">
                        <p>{getUsedLockers()}</p>
                    </div>

                </div>
                <div className="box2">
                    <div className="box-left-side">
                        <img className="locker-icon" src={lockerIcon} alt='' />
                        <p>Unused</p>
                    </div>
                    <div className="box-right-side">
                        <p>{getUnusedLockers()}</p>
                    </div>

                </div>
                <div className="box3">
                    <div className="box-left-side">
                        <img className="locker-icon" src={lockerIcon} alt='' />
                        <p>Total</p>
                    </div>
                    <div className="box-right-side">
                        <p>{getAllLockers()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default OrgDashboardBadges;