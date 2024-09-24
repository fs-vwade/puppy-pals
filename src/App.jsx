import { useState } from "react";
import { puppy_list } from "./data.js";
import "./App.css";

function App() {
	const [puppies, set_puppies] = useState(puppy_list);
	const [featPupId, setFeatPupId] = useState(null);

	console.log(puppies);
	return (
		<div>
			{puppies.map((puppy) => {
				return (
					<p
						onClick={() => {
							console.log("puppy id:", puppy.id);
						}}
						key={puppy.id}
					>
						{puppy.name}
					</p>
				);
			})}
		</div>
	);
}

export default App;
