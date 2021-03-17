import React, { useState, useEffect } from 'react';




function  Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


   useEffect(()=>{
       console.log('Initializing Component .....')


       return ()=> {
           console.log('Stoping Login Component');
       }

   },[])


    function onUpdateUsername(e){
        setUsername(e.target.value);
    }

    function onUpdatePassword(e){
        setPassword(e.target.value)
    }

    function submit(){

    }

    return(

        <form>
            <h1 id="h1"></h1>
            <div className="form-group">
                <label>Username</label>
                <input type="text" onChange={onUpdateUsername} className="form-control"/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" onChange={onUpdatePassword}  className="form-control"/>
            </div>
            <button className="login-btn" onClick={submit}>Login</button>
        </form>
    )
}


export default Login;