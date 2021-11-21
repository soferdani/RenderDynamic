import { useSelector } from "react-redux";

export default function LabelComponent({ config }) {
    let UserId = useSelector(state => state);
    return (
        <label id={config.id} >
            {UserId.userInput.inputToDisplay}
        </label>
    );
}