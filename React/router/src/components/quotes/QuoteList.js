import { Fragment } from 'react';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';
import { useHistory, useLocation } from 'react-router-dom';
const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const isAscending = query.get('sort') === 'asc';
  const changeSortHandler = () => {
    history.push(`quotes?sort=${isAscending ? 'desc' : 'asc'}`)
  }
  
  return (
    <Fragment>
    <div className={classes.sorting}>
      <button onClick={changeSortHandler}> Sort By  {isAscending ? 'Descending' : 'Ascending'} </button>
    </div>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
