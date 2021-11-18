export default function ButtonComponent({text, click, id}) {
    return (
        <button id={id} onClick={click.target_id} >
            {text}
        </button>
    );
}