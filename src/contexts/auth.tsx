import React, {createContext, useState} from 'react';

interface Credentials {
  email: string;
  password: string;
}

interface AuthContextData {
  signed: boolean;
  handleLogin(credentials: Credentials): Promise<void>;
  handleLogout(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [signed, setSigned] = useState(false);

  async function handleLogin({email, password}: Credentials) {
    setSigned(true);
  }

  async function handleLogout() {
    setSigned(false);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: signed,
        handleLogin,
        handleLogout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
