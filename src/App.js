import "./App.css";
import { renderComponent } from "./render/renderComponent";
import config from "./assets/HomeTest";

function App() {
	return (
		<>
			{/* <Tabs data={config.simulation} /> */}
			{renderComponent(config.simulation)}
		</>
	);
}

export default App;
