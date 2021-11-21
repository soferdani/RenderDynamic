import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../actions/main";

export default function InputTest() {
    const userInput = useSelector(state => state);
    console.log("this" ,userInput);



    const [input, setInput] = useState('');
    const [showValue, setShowValue] = useState('');

    const handleButtonClick = () => {
        setShowValue(input)
        setInput('')
    }

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    
    return (
        <div className='test'>
            <input onChange={handleChange} value={input} type='text' id='in1' />
            <button onClick={handleButtonClick} >Customer validation </button>
            <br />
            <label htmlFor='in1'>
                {showValue}
            </label>
        </div>
    );
}