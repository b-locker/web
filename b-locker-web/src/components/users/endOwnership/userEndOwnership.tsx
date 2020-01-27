import React, { useState, useEffect, useRef } from 'react'
import UserHeader from '../header/userHeader'
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import { httpProvider } from '../../../global/http/httpProvider';
import { useAlert } from 'react-alert';
import GridLoader from 'react-spinners/GridLoader';
import store from 'store2';

const UserEndOwnership: React.FC = () => {
    const { t } = useTranslation();
    const [passcode, setPasscode] = useState("");
    const [loading, setLoading] = useState(false);
    let history = useHistory();
    let http = new httpProvider();
    let alert = useAlert();
    let guid = store.get("guid");
    let lockerId = store.get("locker_id");

    function endOwnership(e: any) {
        if (passcode) {
            setLoading(true);
            checkPasscode(passcode).then((res) => {
                if (res) {
                    http.postRequestQueryParams(
                        '/lockers/' + guid +
                        '/claims/' + lockerId +
                        '/end' +
                        '?key=' + passcode).then((res) => {
                            if (res) {
                                setLoading(false);
                                history.push('/goodbye')
                            }
                        }).catch((error) => {
                            if (error) {
                                setLoading(false);
                                alert.error(t('error.somethingwentwrong.global'))
                            }
                        })
                }
            })
        }
        else {
            setLoading(false);
            alert.error(t('error.invalid.passcode'));
        }
    }

    function checkPasscode(passcode: string): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            http.postRequestQueryParams('/lockers/' + guid + '/unlock?key=' + passcode).then((res) => {
                if (res.status === 200) {
                    resolve(true);
                }
                else {
                    reject(false);
                }
            }).catch((error) => {
                if (error.response) {
                    if (error.response.data === "You have no more attempts left.") {
                        //history.push('/lockdown');
                    }
                    resolve(false);
                    alert.error(error.response.data.message);
                }
            });
        })
    }

    return (
        <div className="main-div">
            <UserHeader />
            <div className="global-edge-div">
                <div className="global-title-desc-div ">
                    <p className="global-page-title ">{t('end.areyousure.label')}</p>
                    <p className="global-desc-label ">{t('end.desc.label')}</p>
                </div>
                <br />
                <input className="global-input" placeholder={t('end.passcode.label')}
                    type="password"
                    id="passcode"
                    onChange={evt => setPasscode(evt.target.value)}>
                </input>
                <br />
                <button className="global-button global-button-red" onClick={endOwnership}>{t('end.imsure.button')}</button>
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

export default UserEndOwnership;