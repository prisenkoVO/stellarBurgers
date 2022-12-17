import { useSelector } from "react-redux";
import { Redirect, Route, useLocation } from "react-router";
import { Loader } from "../loader/loader";

export function ProtectedRoute({ isAuthRequired = false, children, ...params }) {
    const { email, checkAuth } = useSelector(state => state.user);
    const location = useLocation();

    // Без авторизации не открывается логин

    if(!checkAuth) {
        return (<Loader/>);
    }

    if(isAuthRequired && email) {
        const { from } = location.state || { from: { pathname: '/' } };

        return (
            <Route {...params}>
                <Redirect to={from}></Redirect>
            </Route>
        );
    }

    if(!isAuthRequired && !email) {
        return (
            <Route {...params}>
                <Redirect to={{pathname: '/login', state: { from: location }}}/>
            </Route>
        );
    }

    return (
        <Route {...params}>
            {children}
        </Route>
    );
}