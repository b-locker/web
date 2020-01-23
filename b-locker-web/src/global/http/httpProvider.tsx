import axios from 'axios';
import { authProvider } from '../auth/authProvider';

export class httpProvider {
    apiURL: string = "https://b-locker.nl/api/v1"
    auth: authProvider = new authProvider();
    public getRequest(url: string): Promise<any> {
        let jwt = this.auth.getJWT();
        if (jwt) {
            return axios.get(this.apiURL + url, {
                headers: {
                    'token': jwt
                }
            });
        }
        else {
            return axios.get(this.apiURL + url);
        }
    }

    public postRequestBodyData(url: string, data: any, jwt?: string): Promise<any> {
        if (jwt) {
            const options = {
                headers: { 'token': jwt }
            };
            return axios.post(this.apiURL + url, data, options);
        }
        else {
            return axios.post(this.apiURL + url, data);

        }
    }
    public postRequestQueryParams(url: string, jwt?: string): Promise<any> {
        if (jwt) {
            const options = {
                headers: { 'token': jwt }
            };
            return axios.post(this.apiURL + url, null, options);
        }
        else {
            return axios.post(this.apiURL + url, null);

        }
    }

    public putRequest(url: string, jwt?: string): Promise<any> {
        if (jwt) {
            const options = {
                headers: { 'token': jwt }
            };
            return axios.put(this.apiURL + url, null, options);
        }
        else {
            return axios.put(this.apiURL + url);
        }
    }
}