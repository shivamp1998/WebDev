import { Fragment } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_LIST = [
    {
        id: 'm1',
        title: 'A first Meetup',
        image: "https://image.shutterstock.com/image-photo/beautiful-morning-sunrise-over-corn-600w-612566915.jpg",
        address: 'Cornfield',
        description: "let's meet up for the first time"
    },
    {
        id: 'm2',
        title: 'A second Meetup',
        image: "https://image.shutterstock.com/image-photo/beautiful-morning-sunrise-over-corn-600w-612566915.jpg",
        address: 'Another Cornfield',
        description: "let's meet up for the another time"
    }
]
const Home = () => {
    return <Fragment>

            <MeetupList meetups={DUMMY_LIST}/>

    </Fragment>
}

export default Home;