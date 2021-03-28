import React, {useContext} from 'react';
import AuthContext from '../contexts/Auth';
import AppRoutes from './AppRoutes';
import AuthRoutes from './AuthRoutes';

const Routes: React.FC = () => {
    const { signed } = useContext(AuthContext);
    return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;