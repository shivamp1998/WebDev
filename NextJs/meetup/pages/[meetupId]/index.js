import { Fragment } from "react"
import MeetupDetail from "../../components/meetups/MeetupDetail"

const MeetUpDetails = () => {
    return <MeetupDetail
     title={'First MeetUp'} 
     image={"https://images.unsplash.com/photo-1598303080484-8db04d10c787?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}
     description={"First meet up"}
     address={"Some steet, some City"}
     />

}

export default MeetUpDetails