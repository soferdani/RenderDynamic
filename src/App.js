import "./App.css";
import { renderComponent } from "./render/renderComponent";
import config from "./assets/HomeTest";
import InputTest from "./render/InputTest";


function App() {
	return (
		<>
			{renderComponent(config.simulation)}
			<br />
			<br />
			<br />
			<InputTest />

		</>
	);
}

export default App;
