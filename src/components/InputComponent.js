import { useState } from "react";
import {setUserInput} from "../actions/main" 
import { useDispatch } from "react-redux";

export default function InputComponent({ config }) {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("")
    
    const HandleChange = (event) => {
        setInputValue(event.target.value)
        dispatch(setUserInput(inputValue))
    }
    
    return (
        <div className="input-component">
            <input
                type='text'
                id={config.id}
                placeholder={config.attributes.placeholder}
                onChange={HandleChange}
                value={inputValue} />
        </div>
    );
}