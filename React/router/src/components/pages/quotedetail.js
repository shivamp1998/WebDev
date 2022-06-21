import { Fragment } from "react"
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from '../comments/Comments';
import HighlightedQuote from '../quotes/HighlightedQuote';

const QuoteDetail = () => {
    const DUMMY_QUOTES = [
        {id: 'q1',author: 'max', text: 'Learning React if Fun'},
        {id: 'q2', author: 'sarvesh', text: 'What the fuck is wrong with you'},
        {id: 'q3', author: 'manas', text: 'Can you Please fuck off from here?'}
    ]
    const id = useParams().quoteId;
    const match = useRouteMatch();
    console.log(window.location)
    const quote = DUMMY_QUOTES.find((value) => value.id === id );
    return <Fragment>
        {quote  ? <HighlightedQuote text={quote.text} author={quote.author}/> : 'No Quote Found'}
        <Route path={`/quotes/${id}`} exact>
        <div className="centered">
            <Link className="btn--flat" to={`${match.url}/comments`}>Comments</Link>
        </div>
        </Route>
        <Route path={`${match.url}/comments`}>
            <Comments/>
        </Route>
    </Fragment>
}

export default QuoteDetail;