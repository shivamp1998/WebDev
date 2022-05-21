import {useState} from 'react';


const useForm = (textValidator) => {
    const [text,setText] = useState('');
    const [touched,setTouched] = useState(false);
    

    const valueIsValid = textValidator(text);
    const hasError = !valueIsValid && touched;

    const handleTextChange = (e) => {
        setText(e.target.value);
    }

    const handleValueBlur = () => {
        setTouched(true);
    } 

    return {
        value: text, hasError, handleTextChange, handleValueBlur
    }

    
}


export default useForm;