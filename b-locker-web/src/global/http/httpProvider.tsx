import axios from 'axios';
import { authProvider } from '../auth/authProvider';

export class httpProvider {
    apiURL: string = "https://b-locker.nl/api/v1"
    authorizationHeaderName: string = "Authorization";
    auth: authProvider = new authProvider();

    private getOptions(): object {
        let jwt = this.auth.getJWT();
        if (jwt) {
            return {
                headers: { "Authorization": "Bearer "+jwt }
            };
        }
        else {
            return {};
        }
    }

    public getRequest(url: string): Promise<any> {
        return axios.get(this.apiURL + url, this.getOptions());
    }

    public postRequestBodyData(url: string, data: any): Promise<any> {
        return axios.post(this.apiURL + url, data, this.getOptions());
    }
    public postRequestQueryParams(url: string): Promise<any> {
        return axios.post(this.apiURL + url, null, this.getOptions());
    }

    public putRequest(url: string): Promise<any> {
        return axios.put(this.apiURL + url, null, this.getOptions());
    }
}