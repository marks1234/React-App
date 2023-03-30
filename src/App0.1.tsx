// rafce -- makes the below
//
// import React from 'react'

// const App = () => {
//   return (
// 	<div>App</div>
//   )
// }

// export default App

// const names = ["Bob", "Sam", "Cat", "Jim", "Joe", "Lay", "Mew"];

import Button from "./components/Button";
import { useCallback, useState } from "react";
import produce from "immer";


const App = () => {
	const [bugs, setBugs] = useState([
		{ id: 1, title: "Bug 1", fixed: false },
		{ id: 2, title: "Bug 2", fixed: false },
	]);
    

	const handleClick = () => {
		// setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));

		setBugs(
			produce((draft) => {
				const bug = draft.find((bug) => bug.id === 1);
				if (bug) bug.fixed = true;
			})
		);
	};

	console.log(bugs);
	return (
		<>
			{bugs.map((bug) => (
				<p key={bug.id}>Bug is {bug.fixed ? "Fixed" : "New"}</p>
			))}
			<Button colour='primary' onClick={() => handleClick()}>
				Hello World
			</Button>
		</>
	);
};

export default App;
