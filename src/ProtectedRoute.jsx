import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";

export default function ProtectedRoute(props) {
    const {auth} = useContext(AuthContext);
    if (auth.role === props.role || auth.organisation === props.organisation) {
        return <Outlet />;
    } else return <Navigate to={'/login'} />
}