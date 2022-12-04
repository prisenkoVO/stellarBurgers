import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { Loader } from "../loader/loader";

export function ProtectedRoute({ isAuthRequired = true, children, ...params }) {
    const { email, checkAuth } = useSelector(state => state.user);


    if(!checkAuth) {
        return (<Loader/>);
    }

    if(isAuthRequired && email) {
        return (
            <Route {...params}>
                {children}
            </Route>
        );
    }

    if(!isAuthRequired && email) {
        return (
            <Route>
                <Redirect to={'/'}/>
            </Route>
        );
    }

    return (
        <Route>
            <Redirect to={'/login'}/>
        </Route>
    );
}