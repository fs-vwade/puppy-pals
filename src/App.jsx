import { useState } from "react";
import { puppy_list } from "./data.js";
import "./App.css";

function App() {
	const [puppies, set_puppies] = useState(puppy_list);

	console.log(puppies);
	return (
		<div>
			{puppies.map((puppy) => {
				return <p>{puppy.name}</p>;
			})}
		</div>
	);
}

export default App;
