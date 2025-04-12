import { Outlet, Navigate } from 'react-router-dom';

export default function AuthRequired({ isLoggedIn }) {
    if (!isLoggedIn) {
        return (
            <Navigate
                to="/login"
                state={{ message: 'You must log in first' }}
            />
        );
    }
    return <Outlet />;
}
