

function Profile(props){



    return (
        <div>

          
            <div>Profile Component</div>
            <h1>First Name: { props.profilefirstname} </h1>
            <h1>Last Name: { props.profilelastname} </h1>
            <h1>Email: { props.profileemail} </h1>
            <h1>Date of Birth: { props.profiledateofbirth} </h1>
        </div>
    )
}

export default Profile;