import jwt from 'jsonwebtoken';
import store from 'store2';

export class authProvider {

    

    public isAuthenticated(): boolean {
        let token = store.get("jwt");
        let secret = "";
        let foundJWT: boolean = false;
        if(process.env.REACT_APP_JWT_SECRET){
            secret = process.env.REACT_APP_JWT_SECRET;
            foundJWT = true;
        }
        if(token){
            let decoded = jwt.verify(token, secret);
            console.log('decoded jwt:', decoded);
            return foundJWT; // CHANGE THIS
        }
        else{
            return false;
        }
    }

    public setDevDebugToken(token: boolean) {
        if (token) {
            store.set("devDebugToken", token);
        }
    }

    public setJWT(jwt: string){
        if(jwt){
            store.set("jwt", jwt, true);
        }
    }

    public getJWT(): string {
        let jwt = store.get("jwt");
        if(jwt){
            return jwt;
        }
        else{
            return "";
        }
    }
}