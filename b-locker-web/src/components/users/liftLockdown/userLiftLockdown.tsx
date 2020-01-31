import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import UserHeader from '../header/userHeader';
import queryString from 'querystring';
import { useAlert } from 'react-alert';
import { useHistory, useLocation } from 'react-router-dom';
import { httpProvider } from '../../../global/http/httpProvider';
import store from 'store2';

const UserLiftLockdown: React.FC = () => {
    const { t } = useTranslation();
    let alert = useAlert();
    let history = useHistory();
    let location = useLocation();
    const http = new httpProvider();
    let locker_guid, claim_id, token;

    useEffect(() => {
        parseLocationString(location).then(() => {
            liftLockdown().then(()=>{
                alert.success(t('lift.success.label'));
                history.push('/l/'+locker_guid);
            }).catch(()=>{
                alert.error(t('error.somethingwentwrong.global'));
                history.push('/unavailable');
            })
        }).catch(() => {
            alert.error(t('error.somethingwentwrong.global'));
            history.push('/unavailable');
        })
    })

    function parseLocationString(location): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            let locationValues = queryString.parse((location.search.substr(1)));
            if (!locationValues.locker_guid || !locationValues.token || !locationValues.claim_id) {
                reject();
            }
            else {
                locker_guid = locationValues.locker_guid;
                token = locationValues.token;
                claim_id = locationValues.claim_id;
                resolve();
            }
        })
    }

    function liftLockdown(): Promise<any>{
        store.set("guid", locker_guid);
        return new Promise<any>((resolve, reject)=>{
            http.postRequestQueryParams(
                '/lockers/' + locker_guid +
                '/claims/' + claim_id +
                '/lift-lockdown' +
                '?setup_token=' + token).then((res) => {
                    resolve();
                }).catch((error) => {
                    console.log(error.response);
                    reject(error);
                });
        })
    }

    return (
        <div className="main-div">
            <UserHeader />
            <div className="global-edge-div">
                <div className="global-title-desc-div ">
                    <p className="global-page-title ">{t('lift.lockdown.label')}</p>
                    <p className="global-desc-label ">{t('lift.desc.label')}</p>
                </div>
            </div>
        </div>
    );
}

export default UserLiftLockdown;