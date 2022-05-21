import { useState, useEffect } from 'react';

const BasicForm = (props) => {
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [isNameTouched,setIsNameTouched] = useState(false);
  const [isEmailTouched,setIsEmailTouched] = useState(false);
  const [isLastNameTouched,setIsLastNameTouched] = useState(false);
  const [isEmailValid,setIsEmailValid] = useState(false);
  const [isNameValid,setIsNameValid] = useState(false);
  const [isLastNameValid, setIsLastNameValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const formHandler = (e) => {
    e.preventDefault();
    if(isEmailValid && isNameValid && isLastNameValid) {
      setIsFormValid(true);
    }else{
      setIsFormValid(false);
      return;
    }
    console.log(firstName,lastName,email);
    
  }

  const emailValidator = (e) => {
   if(isEmailTouched && e.target.value === '') {
     setIsEmailValid(false)
   }
    if(e.target.value.includes('@') && e.target.value.includes('.')) {
      setIsEmailValid(true);
    }else{
      setIsEmailValid(false);
    }
  }

  const nameValidator = (e) => {
    if(e.target.value === '') {
      setIsNameValid(false);
    }else{
      setIsNameValid(true);
    }
  }

  const lastNameValidator = (e) => {
    if(e.target.value === '') {
      setIsLastNameValid(false);
    }else{
      setIsLastNameValid(true);
    }
  }
  return (
    <form>
      <div className='control-group'>
        <div className={`form-control ${isNameTouched && !isNameValid && 'invalid'}`}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={e => {setFirstName(e.target.value); nameValidator(e)}} onBlur={() => setIsNameTouched(true)}/>
        </div>
        <div className={`form-control ${isLastNameTouched && !isLastNameValid && 'invalid'}`}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={ e => {setLastName(e.target.value); lastNameValidator(e)}} onBlur={() => setIsLastNameTouched(true)}/>
        </div>
      </div>
      <div className={`form-control ${!isEmailValid && isEmailTouched && 'invalid'}`}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={e => {setEmail(e.target.value); emailValidator(e)}} onBlur={() => {setIsEmailTouched(true)}}/>
      </div>
      <div className='form-actions'>
        <button onClick={(e) => formHandler(e)} className={!isFormValid && 'btn-disabled'}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
