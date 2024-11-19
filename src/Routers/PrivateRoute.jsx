import { useContext } from "react";
import { AuthContext } from "../components/Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading/Loading";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if(loading){
        return <Loading></Loading>
    }
    if(user && user?.email){
        return children
    }
    return <Navigate state={location.pathname} to="/auth/logIn"></Navigate>
};

export default PrivateRoute;