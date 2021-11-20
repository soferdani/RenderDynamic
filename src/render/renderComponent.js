import TabAreaComponent from "../components/TabAreaComponent";
import InputComponent from "../components/InputComponent";
import ButtonComponent from "../components/ButtonComponent";
import LabelComponent from "../components/LabelComponent";

const keysToComponentsMap = {
	MyTabs: TabAreaComponent,
	MyInput: InputComponent,
	MyButton: ButtonComponent,
	MyLabel: LabelComponent,
};

export const renderComponent = (config) => {
		if (typeof keysToComponentsMap[config.base_component] !== "undefined") {
			let Component = keysToComponentsMap[config.base_component];
			
			return (
				<Component config={config}>
					
				</Component>
			);
		}
	

}
