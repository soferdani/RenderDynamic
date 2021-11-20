import { renderComponent } from "../render/renderComponent";

export default function TabAreaComponent({ config }) {
    console.log(...config.children);
    // debugger;
    return (
        <div id={config.id} className='tab-area'>
            




            {config.children.map((child, index) => {
                if (child.components.length > 0) {
                    return (
                        <>
                            <li key={index+1}>
                                {child.title}
                            </li>
                            <div className='tab-area-content'>
                                {renderComponent(child.components)}
                            </div>
                        </>
                    )               
                } else {
                    return (
                        <li key={index}>
                            {child.title}
                        </li>
                    )
                }
            })}
        </div>
    );
}