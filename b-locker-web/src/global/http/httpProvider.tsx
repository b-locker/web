import axios from 'axios';

export class httpProvider {
    apiURL: string = "https://b-locker.nl:8080/api/v1"
    public getRequest(url: string, jwt?: string): Promise<any> {
        if (jwt) {
            const options = {
                headers: { 'token': jwt }
            };
            return axios.get(this.apiURL + url, options);
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
    public postRequestQueryParams(url: string,  jwt?: string): Promise<any> {
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
        if(jwt){
            const options = {
                headers: { 'token': jwt}
            };
            return axios.put(this.apiURL + url, null, options);
        }
        else {
            return axios.put(this.apiURL + url);
        }
    }
}