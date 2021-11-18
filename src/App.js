import "./App.css";
import renderComponent from "./render/renderComponent";
import config from "./assets/HomeTest";


function App() {
	return (
		<>
			{renderComponent(config.simulation)}
		</>
	);
}

export default App;
