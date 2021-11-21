import { setInputToDisplay , setUserInput} from '../actions/main'
import { useDispatch, useSelector } from "react-redux";


export default function ButtonComponent({ config }) {
    let globalState = useSelector(state => state);
    const dispatch = useDispatch();
    
    const handleButtonClick = () => {
        let inputToDisplay = globalState.userInput.userInput;
        dispatch(setInputToDisplay(inputToDisplay))
        dispatch(setUserInput(""))
    }

    return (
        <button onClick={handleButtonClick} id={config.id} >
            {config.text}
        </button>
    );
}