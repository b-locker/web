import axios from 'axios';
import store from 'store2';

export class httpProvider {
    apiURL: string = "http://localhost:8080/api/v1"
    public getRequest(url: string): Promise<any> {
        let jwt = store.get("jwt");
        if (jwt) {
            return axios.get(this.apiURL + url, {
                headers: {
                    'token': jwt
                },
                proxy: {
                    host: '127.0.0.1',
                    port: 8080,
                }
            });
        }
        else {
            return axios.get(this.apiURL + {
                proxy: {
                    host: '127.0.0.1',
                    port: 8080,
                }
            });
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