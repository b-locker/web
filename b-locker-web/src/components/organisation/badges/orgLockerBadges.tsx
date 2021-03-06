import React, { useState, useEffect } from 'react';
import './orgBadges.scss';

import lockerIcon from '../../../assets/locker.png'
import unlockIcon from '../../../assets/unlock.png'
import { useHistory } from 'react-router-dom';
import { httpProvider } from '../../../global/http/httpProvider';

const OrgLockerBadges: React.FC = () => {

    let history = useHistory();
    let http = new httpProvider();
    // let guid: string = location.pathname.replace("/l/", "");
    const lockerCall = 'lockers';
    const [lockerData, setLockerData] = useState([{
        id: 0,
        guid: "",
        active_claim: null
    }]);

    function redirectRelogin(e: any) {
        history.push('/relogin');
    }

    useEffect(() => {
        componentConsole().then((res) => {
            setLockerData(res);
        })
        // eslint-disable-next-line   
    }, []);
    if (!lockerData) return (<div>Loading...</div>);

    //function to get all lockers
    function getAllLockers() {
        let amount = 0;

        for (let i = 0; i < lockerData.length; i++) {
            amount++
        }

        return (amount)
    }

    //function to get all used lockers
    function getUsedLockers() {
        let amount = 0;

        for (let i = 0; i < lockerData.length; i++) {
            if (lockerData[i].active_claim !== null) {
                amount++;
            }
        }
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

        return (amount)
    }


    // function to print api data to the console
    function componentConsole(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            http.getRequest('/' + lockerCall).then((res) => {
                let data = res.data.data;
                data.forEach(locker => {
                    locker.is_currently_claimable = (locker.is_currently_claimable ? "Unused" : "Used");
                });
                resolve(res.data.data);
            }).catch((error) => {
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
                <button className="org-href-button" onClick={redirectRelogin}>
                    <div className="box4">
                        <div className="box-left-side">
                            <img className="unlock-icon" src={unlockIcon} alt='' />
                        </div>
                        <div className="box-right-side">
                            <p>Unlock All</p>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    );
}


export default OrgLockerBadges;