import { useRef, useState } from 'react'; 

const SimpleInput = (props) => {
  const [enteredName,setEnteredName] = useState('');
  const userNameInputReference = useRef();
  const [nameIsValid,setNameIsValid] = useState(true);
  const onChangeHandler = (e) => {
    setEnteredName(e.target.value);
  }
  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    
    if(enteredName === '') {
      setNameIsValid(false)
    }
    console.log(enteredName)
    setEnteredName('');
  }

  const nameInputBlur = (e) => {
    console.log('input blurred');
  }
  return (

    <form>
      <div className={nameIsValid ? 'form-control' : 'form-control invalid'}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange = {onChangeHandler} ref={userNameInputReference} value={enteredName} onBlur = {nameInputBlur}/>
      </div>
      <div className="form-actions">
        <button type="submit" onClick={onFormSubmitHandler}>Submit</button>
      </div>
      { !nameIsValid && <p> Entere Name Cannot be empty </p>}
    </form>
    
  );
};

export default SimpleInput;
