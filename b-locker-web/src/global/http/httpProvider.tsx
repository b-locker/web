import axios from 'axios';

export class httpProvider {
    // misschien handig om van apiUrl http://145.24.222.153:8080/api/v1/ te maken
    apiURL: string = "http://145.24.222.153:8080/api/v1"
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

    public postRequest(url: string, data: any, jwt?: string): Promise<any> {
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
}