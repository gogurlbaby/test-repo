            //This is React State

import React, { useEffect, useState } from 'react';

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    // used for fetching data from server when initializing a component and prevents unnecassary rerendering of a component
    useEffect(() => {
    console.log('Initializing Component....')
    },[username])

    // prevents fetching of data
    return () => {
        console.log('Stopping Login Component');
        }

    // useEffect functionm (( {

    // })


// since updateUsername is not a defined function down there it has to be defined
// e(the event) gives access to the event happening on the console
    function updateUsername(e){
        setUsername(e.target.value)
    }


    // The below can be used but its not react but javascript and cannot be sent to the server for response so the one up is right. The same can be done for password and submit

    // function updateUsername(e){
    //     let username = ""
    //     username = e.target.value
    //     console.log(username);
    


    function updatePassword(e){
        setPassword(e.target.value)
    }

    function submit(e){
        e.preventDefault()


        // send the username and password to the server

        fetch('goggle.com',{username,password})
        .then(response => {

        },err => err)

    }


    return(
        <form>
            <div className="form-group">
                {/* htmlFor used in html to make username on browser go back when clicked, but not necessary to use in react*/}
                <label htmlFor="">Username</label>
                {/* onChange is an event used to get the value for the username and password */}
                <input type="text" value={username} onChange={updateUsername} className="form-control"/>
            </div>

            <div className="form-group">
                <label htmlFor="">Password</label>
                <input type="password" value={password} onChange={updatePassword} className="form-control"/>
            </div>

            <button className="login-btn" onClick={submit}>Login</button>
            <button className="cancel-btn">Cancel</button>
        </form>
    )
}


export default Login;