import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router';
import queryString from 'querystring';
import { useAlert } from 'react-alert';
import { httpProvider } from '../../../global/http/httpProvider';
import UserHeader from '../header/userHeader';

const UserResetPasscode: React.FC = () => {
    const { t } = useTranslation();
    let history = useHistory();
    let http = new httpProvider();
    let alert = useAlert();
    let location = useLocation();
    const [passcode, setPasscode] = useState("");
    let locker_guid, token, claim_id;

    useEffect(() => {
        parseLocationString(location).then(() => {
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

    function validatePasscode(passcode: string): boolean {
        // min 6 max 100 chars
        if (passcode){
            if(passcode.length >= 6 && passcode.length <= 100){
                return true;
            }
        }
        return false;
    }

    function onResetPasscodeClick(e: any) {
        if (validatePasscode(passcode)) {
            sendResetPasscodeData().then(() => {
                history.push('/claim/complete?guid='+locker_guid)
            }).catch((error) => {
                alert.error(t('error.somethingwentwrong.global'))
            })
        }
        else {
            alert.error(t('error.invalid.passcode'))
        }
    }

    function sendResetPasscodeData(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            http.postRequestQueryParams(
                '/lockers/' + locker_guid +
                '/claims/' + claim_id +
                '/setup' +
                '?key=' + passcode +
                '&setup_token=' + token).then((res) => {
                    resolve();
                }).catch((error) => {
                    reject(error);
                });
        })
    }



    return (
        <div className="main-div">
            <UserHeader />
            <div className="global-edge-div">
                <div className="global-title-desc-div ">
                    <p className="global-page-title ">{t('setPasscode.set.label')}</p>
                    <p className="global-desc-label ">{t('setPasscode.desc.label')}</p>
                </div>
                <input className="global-input" placeholder={t('setPasscode.passcode.hint')}
                    type="password"
                    id="passcode"
                    onChange={evt => setPasscode(evt.target.value)}>
                </input>
                <button className="global-button global-button-green" onClick={onResetPasscodeClick}>{t('setPasscode.finish.button')}</button>
            </div>
        </div>
    );
}

export default UserResetPasscode;