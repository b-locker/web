import * as React from 'react';
import { Redirect, Route, RouteProps, useHistory } from 'react-router';
import { authProvider } from '../global/auth/authProvider';

export interface ProtectedRouteProps extends RouteProps {
    isAllowed: boolean;
    authenticationPath: string;
}

const auth = new authProvider();

export const ProtectedRoute: React.FC<ProtectedRouteProps> = props => {
    let history = useHistory();
    console.log('history:', history);
    let redirectPath = '';
    let isAuthenticated = auth.isAuthenticated();
    if (!isAuthenticated) {
        redirectPath = props.authenticationPath;
    }

    if (redirectPath) {
        const renderComponent = () => <Redirect to={{ pathname: redirectPath }} />;
        return <Route {...props} component={renderComponent} render={undefined} />;
    } else {
        return <Route {...props} />;
    }
};

export default ProtectedRoute;