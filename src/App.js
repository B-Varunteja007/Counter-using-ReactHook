import React, { useState } from "react";

import "./App.css";

const App = () => {

let [counter, setCounter] = useState(0)


const incre = () => {
	// Counter state is incremented
	setCounter(++counter)
}

// Function is called everytime decrement button is clicked
const decre = () => {
	// Counter state is decremented
	setCounter(--counter )
}

const reset=()=>{
  setCounter(0)
}

return (
	<div style={{display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	fontSize: '300%',
	position: 'absolute',
	width: '100%',
	height: '100%',
	top: '-15%',
	}}>


	Counter App


	<div style={{
		fontSize: '120%',
		position: 'relative',
		top: '10vh',
	}}>


		{counter}


	</div>
	<div className="buttons">
		<button style={{
		fontSize: '60%',
		position: 'relative',
		top: '20vh',
		marginRight: '5px',
		backgroundColor: 'green',
		borderRadius: '8%',
		color: 'white',
		}}

		onClick={incre}>Increment</button>
    <button style={{
		fontSize: '60%',
		position: 'relative',
		top: '20vh',
		marginRight: '5px',
		backgroundColor: 'black',
		borderRadius: '8%',
		color: 'white',
		}}
    onClick={reset}>Reset</button>
		<button style={{
		fontSize: '60%',
		position: 'relative',
		top: '20vh',
		marginLeft: '5px',
		backgroundColor: 'red',
		borderRadius: '8%',
		color: 'white',
		}}
		onClick={decre}>Decrement</button>
	</div>
	</div>
)
}

export default App
