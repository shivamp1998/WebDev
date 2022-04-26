import classes from './MealItemForm.module.css';
import Input from '../../UI/input';
import { useRef,useState }  from 'react';
const MealItemForm = props => {
    const submitHandler = (e) => {
        e.preventDefault();
        const enteredAmount = inputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if(enteredAmount.trim().length === 0 || enteredAmount < 1 || enteredAmount > 5)
        {
            setAmountIsValid(false);
            return;
        } 
        props.onAddToCart(enteredAmountNumber);
    }
    const [amountIsValid, setAmountIsValid] = useState(true);

    const inputRef = useRef();
    console.log(inputRef)

    return (
        <form className={classes.form}>
            <Input label='Amount' ref = {inputRef} input={{
                id: 'amount' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',
                
            }}/>
        
            <button onClick={(e) => submitHandler(e)}>+ Add</button>
            {!amountIsValid && <p> Please Entere a Valid Amount </p>}
        </form>
    )
}

export default MealItemForm;