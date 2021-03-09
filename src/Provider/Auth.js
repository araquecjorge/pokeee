import {createContext, useContext, useState} from 'react'

const authContext = createContext();

const fakeAuthProvider = {
    signIn : (callback)=>{
        setTimeout(callback,100);
    },
    signOut: (callback) => {
        setTimeout(callback,100);
    },
};

const useProviderAuth = () => {
    const [user, setUser] = useState(null);

    const signIn = (cb) =>{
        fakeAuthProvider.signIn(() => {
            setUser('user');
            cb();
        });
    };

    const signOut = (cb) => {
        fakeAuthProvider.signOut(() => {
            setUser(null);
            cb();
        });
    };

    return{
        user,
        signIn,
        signOut,
    };
};

export const ProviderAuth = ({children}) => {
    const auth = useProviderAuth();

    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => useContext(authContext);