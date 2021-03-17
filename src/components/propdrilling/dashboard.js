
import Detail from './detail';

function Dashboard(props){



    return (
        <div>
            <div>Dashboard Component</div>
        
            <Detail 
                detailfirstname= {props.firstName}
                detaillastname= {props.lastName}
                detailemail = {props.email}
                detaildateofbirth={props.dateofbirth}

                props = {props}
            />
        </div>
    )
}

export default Dashboard;