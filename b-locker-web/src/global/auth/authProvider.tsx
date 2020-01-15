//import jwt from 'jsonwebtoken';
import store from 'store2';

export class authProvider {

    //private jwt: string = "";

    public isAuthenticated(): boolean {
        let result = store.get("devDebugToken");
        return result;
    }

    public setDevDebugToken(token: boolean){
        if(token){
            store.set("devDebugToken", token);
        }
    }
}