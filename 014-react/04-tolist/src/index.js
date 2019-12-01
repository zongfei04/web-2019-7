

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
/*
ReactDOM.render(
	<App />,
	document.getElementById('root')
);
*/
//虚拟DOM
function tick(){
	const timer = (
		<div>
			<h1>hello world</h1>
			<p>{new Date().toLocaleString()}</p>
		</div>
	)
	ReactDOM.render(
		timer,
		document.getElementById('root')
	)
}
setInterval(tick,1000)