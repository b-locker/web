import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next';
import UserHeader from '../header/userHeader';
import { useLocation, useHistory } from 'react-router-dom';
import { httpProvider } from '../../../global/http/httpProvider';
import { useAlert } from 'react-alert';
import GridLoader from 'react-spinners/GridLoader';

const UserLanding: React.FC = () => {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(true);
    const alert = useAlert();
    let location = useLocation();
    let history = useHistory();
    let http: httpProvider = new httpProvider();
    let guid: string = location.pathname.replace("/l/", "");
    let isMounted = useRef(false);

    // useEffect is similar to componenDidMount
    useEffect(() => {
        isMounted.current = true;
        checkLocker();

        return function cleanup() {
            isMounted.current = false;
        }
    })

    function checkLocker() {
        isLockerAvailable().then((res) => {
            if (res) {
                if (isMounted) {
                    setLoading(false);
                }
                history.push('/claim?guid=' + guid);
            }
            else {
                if (isMounted) {
                    setLoading(false);
                }
                history.push('/unlock');
            }
        }).catch((error) => {
        })
    }

    function isLockerAvailable(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            http.getRequest('/lockers/' + guid).then((res) => {
                let data = res.data.data;
                if (data.is_currently_claimable) {
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            }).catch((error) => {
                alert.error(t('error.somethingwentwrong.global'));
                reject(error);
            });
        })
    }


    return (
        <div className="main-div">
            <UserHeader />
            <div className="global-edge-div">
                <div className="global-title-desc-div ">
                    <p className="global-page-title ">{t('landing.onemoment.label')}</p>
                    <p className="global-desc-label ">{t('landing.checking.label')}</p>
                </div>
            </div>
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
    );
}

export default UserLanding;