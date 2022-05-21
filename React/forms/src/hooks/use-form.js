import {useState} from 'react';


const useForm = (textValidator) => {
    const [text,setText] = useState('');
    const [touched,setTouched] = useState(false);
    

    const valueIsValid = textValidator(text);
    const hasError = !valueIsValid && touched;

    return {
        value: text, hasError
    }

    
}


export default useForm;