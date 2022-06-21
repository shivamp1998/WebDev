import { Fragment, useRef, useState } from 'react';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';
import { useHistory, Prompt } from 'react-router-dom'; 

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const history = useHistory();
  const [isFocus,setIsFocused] = useState(false);
  function submitFormHandler(event) {
    event.preventDefault();
    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;
    props.onAddQuote({ author: enteredAuthor, text: enteredText });
    history.push('/quotes')
  }
  const formFocusHandler = () => {
    setIsFocused(true);
  }
  const formEnterHandler = () => {
    setIsFocused(false);
  }
  return (
    <Fragment>
      <Prompt when={isFocus} message="Are You sure you want to leave?"/>
      <Card>
      <form className={classes.form} onSubmit={submitFormHandler} onFocus={formFocusHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className='btn' onClick={formEnterHandler}>Add Quote</button>
        </div>
      </form>
    </Card>
    </Fragment>
  );
};

export default QuoteForm;
