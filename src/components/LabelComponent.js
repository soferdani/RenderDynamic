export default function LabelComponent({config}) {
    return (
        <label id={config.id} >
            {config.text}
        </label>
    );
}