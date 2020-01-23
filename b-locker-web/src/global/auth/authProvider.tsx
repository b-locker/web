import store from 'store2';

export class authProvider {

    

    public isAuthenticated(): boolean {
        let token = this.getJWT();
        if(token){
            return true;
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

    public logout(){
        store.set("jwt", false, true);
    }
}