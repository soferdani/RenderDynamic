import { renderComponent } from "../render/renderComponent";
import { useState } from "react";

export default function TabAreaComponent({ config }) {
	const [activeTab, setActiveTab] = useState(null);

	const generalTabHandler = (tabName) => {
		setActiveTab(tabName);
	};

    let componentArray = [];

    return (
        <>
		<div id={config.id} className='tab-area'>
			{config.children.map((child, index) => {
				return (
					<>
						<ul key={index}>
							<li onClick={() => generalTabHandler(child.title)}>
								{child.title}
							</li>
						</ul>
						<div className='outlet'>
                            {child.components.map((oneChild) => {
                                componentArray.push(renderComponent(oneChild))
								{/* return renderComponent(oneChild); */}
							})}
						</div>
					</>
				);
			})}
            </div>
            <div className='outlet'>
                {activeTab && <h2>{activeTab}</h2>}
                {componentArray}
            </div>
        </>


	);
}
