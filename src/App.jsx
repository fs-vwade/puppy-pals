import { useState } from "react";
import { puppy_list } from "./data.js";
import "./App.css";

function App() {
	const [puppies, setPuppies] = useState(puppy_list);
	const [featPupId, setFeatPupId] = useState(null);
	const featuredPup = puppies.find((pup) => pup.id === featPupId);

	console.log(puppies);
	return (
		<div>
			{featPupId && <p>{featPupId}</p>}
			{puppies.map((puppy) => {
				return (
					<p
						onClick={() => {
							setFeatPupId(puppy.id);
							console.log("puppy id:", puppy.id);
						}}
						key={puppy.id}
					>
						{puppy.name}
					</p>
				);
			})}
			{featPupId && (
				<div>
					<h2>{featuredPup.name}</h2>
					<ul>
						<li>Age: {featuredPup.age}</li>
						<li>Email: {featuredPup.email}</li>
					</ul>
				</div>
			)}
		</div>
	);
}

export default App;
