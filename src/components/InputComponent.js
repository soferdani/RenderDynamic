export default function InputComponent({text, attributes, id}) {
    return (
        <input id={id} placeholder={attributes.placeholder} >
            {text}
        </input>
    );
}