import NewMeetUpForm from '../../components/meetups/NewMeetupForm'
const NewMeetUpPage = () => {
    const addMeetUphandler = (data) => {
        console.log(data);
    }
    return <NewMeetUpForm onAddMeetup={addMeetUphandler}/>
}

export default NewMeetUpPage;