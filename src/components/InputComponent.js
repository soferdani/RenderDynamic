export default function InputComponent({config}) {
    return (
        <div className="input-component">
            <input type='text' id={config.id} placeholder={config.attributes.placeholder} />
        </div>
    );
}