import React, {useContext} from 'react'
import {useAuth} from '../Provider/Auth'

const AuthButton = () => {

    const {user, signOut} = useAuth();
    return 
    (<div>
        {user ? (
           <button onClick={() => signOut(()=> {})}></button> 
        ): 'you are not logged in'}
    </div>)
}

export default AuthButton;