import Profile from './profile';

function Notification(props){



    return (
        <div>
            <div>Notification Component</div>
    
            <Profile 
                profilefirstname = { props.notificationfirstname }
                profilelastname = { props.notificationlastname }
                profileemail = { props.notificationemail }
                profiledateofbirth= { props.notificationdateofbirth }

                props = { props }
            />

        </div>
    )
}

export default Notification;