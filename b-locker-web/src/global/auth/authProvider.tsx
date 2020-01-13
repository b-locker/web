import jwt from 'jsonwebtoken'

export class authProvider {

    private authToken: string = "";
    public devDebugToken: boolean = false;

    public isAuthenticated(): boolean {
        return this.devDebugToken;
    }
}