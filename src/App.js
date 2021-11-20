import "./App.css";
import { renderComponent } from "./render/renderComponent";
import config from "./assets/HomeTest";
import Tabs from "./render/Tabs";

function App() {
	return (
		<>
			{/* <Tabs data={config.simulation} /> */}
			{renderComponent(config.simulation)}
		</>
	);
}

export default App;
