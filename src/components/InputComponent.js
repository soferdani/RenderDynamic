import {setUserInput} from "../actions/main" 
import { useDispatch,useSelector } from "react-redux";

export default function InputComponent({ config }) {
    const dispatch = useDispatch();
    let globalState = useSelector(state => state);
    
    const HandleChange = (event) => {
        dispatch(setUserInput(event.target.value))
    }
    
    return (
        <div className="input-component">
            <input
                type='text'
                id={config.id}
                placeholder={config.attributes.placeholder}
                onChange={HandleChange}
                value={globalState.userInput.userInput} />
        </div>
    );
}