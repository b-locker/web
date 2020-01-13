import React from 'react';
import axios from 'axios';

export class httpProvider {
    apiURL: string = "http://145.24.222.153:8080/api/v1"
    public getRequest(url: string): Promise<any>{
        return axios.get(this.apiURL + url);
    }

    public postRequest(url: string, data: any): Promise<any>{
        return axios.post(this.apiURL + url, data);
    }
}