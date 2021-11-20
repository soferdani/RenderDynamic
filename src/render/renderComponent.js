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
	console.log(config)
	if (config.length !== undefined) {
		config.map(childConfig => {
			if (typeof keysToComponentsMap[childConfig.base_component] !== "undefined") {
				let Component = keysToComponentsMap[childConfig.base_component];
				console.log(childConfig);
				return (
					<Component config={childConfig}>
						
					</Component>
				)
			}
		})
		
	} else {
		if (typeof keysToComponentsMap[config.base_component] !== "undefined") {
			let Component = keysToComponentsMap[config.base_component];
			
			return (
				<Component config={config}>
					{config.children.length > 0
						? config.children.map((child) => renderComponent(child))
						: null}
				</Component>
			);
		}
	}


}
