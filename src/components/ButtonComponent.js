export default function ButtonComponent({config}) {
    return (
        <button id={config.id}  >
            {config.text}
        </button>
    );
}