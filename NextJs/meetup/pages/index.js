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
const Home = (props) => {
    return <Fragment>
            <MeetupList meetups={props.meetups}/>
    </Fragment>
}
export async function getStaticProps() {
    return {
        props: {
            meetups: DUMMY_LIST
        },
        revalidate: 1
    }
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//     return {
//         props: {
//             meetups: DUMMY_LIST
//         }
//     }
// }
export default Home;