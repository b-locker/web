import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import UserHeader from '../header/userHeader';
import { useHistory } from 'react-router';
import { useAlert } from 'react-alert';
import store from 'store2';
import { httpProvider } from '../../../global/http/httpProvider';

const UserChangePass: React.FC = () => {
    const { t } = useTranslation();
    let history = useHistory();
    let http = new httpProvider();
    let alert = useAlert();
    let guid = store.get("guid");
    let lockerId = store.get("locker_id");
    const [currentPasscode, setCurrentPasscode] = useState("");
    const [newPasscode, setNewPasscode] = useState("");

    function setPass(e: any) {
        if (currentPasscode && newPasscode) {
            if(newPasscode !== currentPasscode){
                checkPasscode(currentPasscode).then((res)=>{
                    http.postRequestQueryParams(
                        '/lockers/' + guid +
                        '/claims/' + lockerId +
                        '/update-key' + 
                        '?key=' + currentPasscode +
                        '&new_key=' + newPasscode).then((res)=>{
                            if(res){
                                history.push('/passChanged');
                            }
                    }).catch((error)=>{
                        if(error){
                            alert.error(t('error.somethingwentwrong.global'));
                        }
                    });
                });
            }
        }
        else {
            alert.error(t('error.invalid.passcode'));
        }
    }

    function checkPasscode(passcode: string): Promise<boolean>{
        return new Promise<boolean>((resolve, reject)=>{
            http.postRequestQueryParams('/lockers/'+guid+'/unlock?key='+passcode).then((res)=>{
                if(res.status === 200){
                    store.set("locker_id", res.data.data.claim.id)
                    resolve(true);
                }
                else{
                    reject(false);
                }
            }).catch((error)=>{
                if(error.response){
                    if(error.response.data === "You have no more attempts left."){
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
                    <p className="global-page-title ">{t('changePass.changePass.label')}</p>
                    <p className="global-desc-label ">{t('changePass.desc.label')}</p>
                </div>
                <br />
                <b>
                    <p className="global-desc-label ">{t('changePass.currentPass.label')}</p>
                </b>
                <input className="global-input" placeholder={t('changePass.current.hint')}
                    type="password"
                    id="currentPasscode"
                    onChange={evt => setCurrentPasscode(evt.target.value)}>
                </input>
                <b>
                    <p className="global-desc-label ">{t('changePass.newPass.label')}</p>
                </b>
                <input className="global-input" placeholder={t('changePass.passcode.hint')}
                    type="password"
                    id="newPasscode"
                    onChange={evt => setNewPasscode(evt.target.value)}>
                </input>
                <button className="global-button global-button-blue" onClick={setPass}>{t('changePass.setPass.button')}</button>
            </div>
        </div>
    );
}

export default UserChangePass;