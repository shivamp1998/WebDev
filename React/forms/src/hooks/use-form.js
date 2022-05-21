import { useReducer } from 'react';
const initialState = {
    value: '',
    isTouched: false
}
const inputUseReducer = (state,action) => {
    if(action.type === 'INPUT') {
        return {value: action.value, isTouched: state.isTouched}
    }
    if(action.type === 'BLUR') {
        return {value: state.value , isTouched: true}
    }

    return initialState;
}

const useForm = (textValidator) => {
    const [inputState,dispatch] = useReducer(inputUseReducer,initialState);
    const valueIsValid = textValidator(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const handleTextChange = (e) => {
        dispatch({type: 'INPUT', value: e.target.value})
    }

    const handleValueBlur = () => {
        dispatch({type: 'BLUR'})
    } 

    return {
        value: inputState.value, hasError, handleTextChange, handleValueBlur
    }

    
}


export default useForm;