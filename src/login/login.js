
function Login() {
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')

    function updateUsername(e) {

        //console.log(e.target.value);
              setUsername(e.target.value)
}

     function updatePassword(e) {

    //console.log(e.target.value);
          setPassword(e.target.value)

          function submit(e) {
              e.preventDefault() //prevents the browser fromrefreshing the page

              console.log({username, password});

              //send the username and password to the server

            //   fetch('google.com'),{username,password})
            //   .then(response => {
            //  })
}


    return(
       <form>
           <div class="form-group">
               <label htmlFor="">Username</label>
               <input type="text" value={username} onChange={} class="form-control"/>
               </div>

               <div class="form-group">
                   <label htmlFor="">Password</label>
                   <input type="password" class="form-control"/>
                </div>

                <button class="login-btn" onClick={submit}>Login</button>
                <button class="cancel-btn">Cancel</button>
              
       </form>
    )
}    
