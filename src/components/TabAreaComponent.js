import { renderComponent } from "../render/renderComponent";
import { useState } from "react";



export default function TabAreaComponent({config}) {
    const [activeTab, setActiveTab] = useState(null)

    const generalTabHandler = (tabName) => {
        setActiveTab(tabName)
    }


    return (
        <div id={config.id} className='tab-area'>
            {config.children.map((child, index) => {
                console.log(child.components);

                if (child.components.length > 0) {
                    
                }

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