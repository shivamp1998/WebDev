import { Fragment } from "react"
import { useParams, Route } from "react-router-dom";
import Comments from '../comments/Comments'

const QuoteDetail = () => {
    const id = useParams().quoteId;
    console.log(id)
    return <Fragment>
        <h1> Quote Detail </h1>
        <p>{id}</p>
        <Route path={`/quotes/${id}/comments`}>
            <Comments/>
        </Route>
    </Fragment>
}

export default QuoteDetail;