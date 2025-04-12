import { Outlet, Navigate, useLocation } from 'react-router-dom';

export default function AuthRequired({ isLoggedIn }: { isLoggedIn: boolean }) {
    const location = useLocation();

    if (!isLoggedIn) {
        return (
            <Navigate
                to="/login"
                state={{
                    from: location.pathname,
                }}
                replace
            />
        );
    }
    return <Outlet />;
}
