import { useState } from "react";
import { useDispatch } from "react-redux";

export default function InputComponent({ config }) {
    const [inputValue, setInputValue] = useState("")
    
    const HandleChange = (event) => {
        setInputValue(event.target.value)

    }

    return (
        <div className="input-component">
            <input type='text' id={config.id} placeholder={config.attributes.placeholder} onChange={HandleChange} value={inputValue} />
        </div>
    );
}