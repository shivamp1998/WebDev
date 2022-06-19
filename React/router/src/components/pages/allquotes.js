import { Fragment } from "react"
import QuoteList from '../quotes/QuoteList';
const DUMMY_QUOTES = [
    {id: 'q1',author: 'max', text: 'Learning React if Fun'},
    {id: 'q2', author: 'sarvesh', text: 'What the fuck is wrong with you'},
    {id: 'q3', author: 'manas', text: 'Can you Please fuck off from here?'}
]
const AllQuote = () => {
    return <Fragment>
        {
            <QuoteList quotes={DUMMY_QUOTES} />
        }
    </Fragment>
}

export default AllQuote;