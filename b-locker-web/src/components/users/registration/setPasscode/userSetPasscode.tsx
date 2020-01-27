import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import UserHeader from '../../header/userHeader';
import { useHistory, useLocation } from 'react-router';
import queryString from 'querystring';
import { useAlert } from 'react-alert';
import { httpProvider } from '../../../../global/http/httpProvider';
import GridLoader from 'react-spinners/GridLoader';
import store from 'store2';

const UserSetPasscode: React.FC = () => {
    const { t, i18n } = useTranslation();
    let history = useHistory();
    let http = new httpProvider();
    let alert = useAlert();
    let location = useLocation();
    const [passcode, setPasscode] = useState("");
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' };
    let expirationDate: Date = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);
    let daysLeft = Math.ceil((expirationDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
    let locker_guid, token, claim_id;
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        parseLocationString(location).then(() => {
        }).catch(() => {
            alert.error(t('error.somethingwentwrong.global'));
            history.push('/unavailable');
        })
    })

    /* for testing
    localhost:3000/claim/passcode?locker_guid=HtXHuV3y&claim_id=5&token=pLkNDdbMCGBpyZbh
    */

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

    function dayOrDays(): string {
        if (daysLeft > 1) {
            return t('setPasscode.days.label');
        }
        else {
            return t('setPasscode.day.label');
        }
    }

    function validatePasscode(passcode: string): boolean {
        // min 6 max 100 chars
        if (passcode) {
            if (passcode.length >= 6 && passcode.length <= 100) {
                return true;
            }
        }
        return false;
    }

    function onSetPasscodeClick(e: any) {
        if(locker_guid){
            store.set("guid", locker_guid, true);
        }
        setLoading(true);
        if (validatePasscode(passcode)) {
            sendSetPasscodeData().then(() => {
                setLoading(false);
                history.push('/claim/complete?guid='+locker_guid);
            }).catch((error) => {
                setLoading(false);
                alert.error(t('error.somethingwentwrong.global'));
            })
        }
        else {
            setLoading(false);
            alert.error(t('error.invalid.passcode'));
        }
    }

    function sendSetPasscodeData(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            http.postRequestQueryParams(
                '/lockers/' + locker_guid +
                '/claims/' + claim_id +
                '/setup' +
                '?key=' + passcode +
                '&setup_token=' + token).then((res) => {
                    resolve();
                }).catch((error) => {
                    console.log(error.response);
                    reject(error);
                });
        })
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            onSetPasscodeClick(event);
        }
    }

    return (
        <div className="main-div">
            <UserHeader />
            <div className="global-edge-div">
                <div className="global-title-desc-div ">
                    <p className="global-page-title ">{t('setPasscode.set.label')}</p>
                    <p className="global-desc-label ">{t('setPasscode.desc.label')}</p>
                </div>
                <p className="global-small-title">{t('setPasscode.itsYours.label')}</p>
                <p className="global-desc-label ">{expirationDate.toLocaleDateString(i18n.language, dateOptions)}</p>
                <p className="global-desc-label">{'(' + daysLeft + ' ' + dayOrDays() + ')'}</p>
                <input className="global-input" placeholder={t('setPasscode.passcode.hint')}
                    type="password"
                    id="passcode"
                    onChange={evt => setPasscode(evt.target.value)}
                    onKeyPress={handleKeyPress} >
                </input>
                <button className="global-button global-button-green" onClick={onSetPasscodeClick}>{t('setPasscode.finish.button')}</button>
                <GridLoader
                    css={`
                    padding-top: 30px;
                    margin: 0 auto;
                `}
                    size={25}
                    color={"#38dbdb"}
                    loading={loading}
                />
            </div>
        </div>
    );
}

export default UserSetPasscode;