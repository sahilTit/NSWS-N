import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
    // Dummy authentication check. Replace with real logic.
    return localStorage.getItem('token') !== null;
};

const PrivateRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/" />;
};

export default PrivateRoute;