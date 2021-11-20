import { renderComponent } from "../render/renderComponent";

export default function TabAreaComponent({config}) {
    console.log(config.id);
    // debugger;
    return (
        <div id={config.id} className='tab-area'>
            



            {config.children.map((child, index) => {
                    return (
                        <div key={index}>
                            {child.title}
                            {child.components.map((oneChild) => {
                                return (
                                    renderComponent(oneChild)
                                )
                            })}
                        </div>
                    )
            })}
        </div>
    );
}