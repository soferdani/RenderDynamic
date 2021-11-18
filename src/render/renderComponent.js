import { createElement } from "react";
import TabArea from "./TabArea";
import InputComponent from "../components/InputComponent";

const keysToComponentsMap = {
	MyTabs: TabArea,
	MyInput: InputComponent,
	MyButton: "buttons",
	MyLabel: "labels",
};

export default function renderComponent(config) {


    if (typeof keysToComponentsMap[config.base_component] !== "undefined") {
        


        return createElement(
            
            keysToComponentsMap[config.base_component],
            {
                id: config.id,
            },
            [...config.children]
    
        )
    }
    

    // if (typeof keysToComponentsMap[config.base_component] !== "undefined") {
    //     console.log( config.base_component);
	// 	return createElement(
	// 		keysToComponentsMap[config.base_component],
	// 		{
	// 			id: config.id,
	// 			children: config.children,
	// 		},
	// 		config.children.length > 0
	// 			? config.children.map((child) => renderComponent(child))
	// 			: null
	// 	);
	// }
}
