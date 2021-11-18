import { createElement } from "react";
import TabArea from "./TabArea";
import InputComponent from "../components/InputComponent";



const keysToComponentsMap = {
    MyTabs: TabArea,
    MyInput: InputComponent,
    MyButton: "buttons",
    MyLabel: "labels"
}




export default function renderComponent(config) {
    
    let isBase_component = typeof keysToComponentsMap[config.base_component]
    let isComponents = typeof keysToComponentsMap[config.components]
    
    if (isBase_component !== "undefined" || isComponents !== "undefined") {
        return createElement(
            keysToComponentsMap[config.base_component],
            {
                id: config.id,
                key: config.id
            },
            config.children.length > 0
                ? config.children.map(child => renderComponent(child))
                : null

        );
    }

    
}