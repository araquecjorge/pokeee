import React from 'react'
import {useHistory} from 'react-router-dom'
import { useAuth } from "../Provider/Auth";

const Login = () => {
    const history = useHistory();
    const {signIn} = useAuth();
    return(
        <>
            <div className='logo-poke'></div>
            <div className='login'>
                <div className='card-login'>
                    <div className='p-log'>
                        <p>¿Quieres buscar tu pokemon favorito?</p>
                    </div>
                    <div className='b-log'>
                        <button className='btn-login' onClick={()=>
                            signIn(()=>{
                                history.push('/pokedex')
                            })
                        }>Si !!!</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;