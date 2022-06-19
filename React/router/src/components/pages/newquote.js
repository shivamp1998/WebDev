import { Fragment } from "react"
import QuoteForm from '../quotes/QuoteForm';
const NewQuote = () => {
    const onAddQuote = (data) => {
        console.log(data.author, data.text)
    }
    return <QuoteForm onAddQuote={onAddQuote}/>
}

export default NewQuote;