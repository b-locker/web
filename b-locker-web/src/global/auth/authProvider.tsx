import jwt from 'jsonwebtoken';
import store from 'store2';

export class authProvider {

    

    public isAuthenticated(): boolean {
        let token = store.get("jwt");
        let secret = "";
        if(process.env.REACT_APP_JWT_SECRET){
            secret = process.env.REACT_APP_JWT_SECRET;
        }
        let result = store.get("devDebugToken");
        let decoded = jwt.verify(token, secret);
        return false;
    }

    public setDevDebugToken(token: boolean) {
        if (token) {
            store.set("devDebugToken", token);
        }
    }
}