import React, {createContext, useState} from 'react';
import { View, Image } from 'react-native';

interface Credentials {
    email: string, 
    password: string
}

interface AuthContextData {
    signed: boolean,
    handleLogin(credentials: Credentials): Promise<void>,
    handleLogout(): Promise<void>,
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    const [signed, setSigned] = useState(false);
    const [loading, setLoading] = useState(false);
    
    async function handleLogin({email, password}: Credentials) {
        setLoading(true);
        setSigned(true);
        setTimeout(function() {
            setLoading(false)
        }, 2000);
    }

    async function handleLogout() {
        setSigned(false);
    }

    if (loading) {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: '#ffff'}}>
                <Image
                    style={{width: 500, height: 500}}
                    source={require('./../assets/images/loading/loading_bike.gif')}
                    />
            </View>
        )
    } else {
        return (
            <AuthContext.Provider value={{
                signed: signed,
                handleLogin,
                handleLogout
            }}>
                {children}
            </AuthContext.Provider>
        );
    }
};

export default AuthContext;