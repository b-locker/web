import React from 'react';
import axios from 'axios';

const httpProvider: React.FC = () => {
    
    function getRequest(url: string): Promise<any>{
        return axios.get(url);
    }

    function postRequest(url: string, data: any): Promise<any>{
        return axios.post(url, data);
    }

    return null;
}

export default httpProvider;