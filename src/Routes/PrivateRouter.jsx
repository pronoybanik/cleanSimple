import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Share/AuthProvider/AuthProvider";

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return "loading...";
    }

    if (user) {
        return children;
    }

    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default PrivateRouter;