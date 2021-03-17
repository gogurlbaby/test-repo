import Notification from './notification';

function Detail(props){



    return (
        <div>
            <div>Detail Component</div>
           {props.props.firstName}
            <Notification 
                // notificationfirstname = {props.detailfirstname}
                // notificationlastname = { props.detaillastname }
                // notificationemail = { props.detailemail }
                // notificationdateofbirth = { props.detaildateofbirth}

                props={ props }
            />
        </div>
    )
}

export default Detail;