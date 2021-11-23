import "./App.css";
import { renderComponent } from "./render/renderComponent";
import config from "./assets/HomeTest";


function App() {
	return (
		<div className="App">
			{renderComponent(config.simulation)}
		</div>
	);
}

export default App;
