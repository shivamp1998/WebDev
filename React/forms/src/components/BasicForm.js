import { useState, useEffect } from 'react';

const BasicForm = (props) => {
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [isNameTouched,setIsNameTouched] = useState(false);
  const [isEmailTouched,setIsEmailTouched] = useState(false);
  const [isLastNameTouched,setIsLastNameTouched] = useState(false);
  const [isEmailValid,setIsEmailValid] = useState(false);
  useEffect(() => {
    if(email === '') {
      setIsEmailValid(true)
    }
  })
  const formHandler = (e) => {
    e.preventDefault();
    console.log(firstName,lastName,email);
    
  }

  const emailValidator = (e) => {
    setIsEmailTouched(true)
    if(e.target.value.includes('@') && e.target.value.includes('.')) {
      setIsEmailValid(true);
    }else{
      setIsEmailValid(false);
    }
  }
  return (
    <form>
      <div className='control-group'>
        <div className={`form-control ${isNameTouched && 'invalid'}`}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={e => setFirstName(e.target.value)} onBlur={() => setIsNameTouched(true)}/>
        </div>
        <div className={`form-control ${isLastNameTouched && 'invalid'}`}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={ e => setLastName(e.target.value)} onBlur={() => setIsLastNameTouched(true)}/>
        </div>
      </div>
      <div className={`form-control ${!isEmailValid && isEmailTouched && 'invalid'}`}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={e => {setEmail(e.target.value); emailValidator(e)}} onBlur={() => {setIsEmailTouched(true)}}/>
      </div>
      <div className='form-actions'>
        <button onClick={(e) => formHandler(e)}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
