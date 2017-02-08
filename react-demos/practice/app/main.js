import React from 'react'
import {render} from 'react-dom'
import Greeter from './Greeter'
import Button from './Button'
import Tabs from './Tabs'
import Counter from './Counter'

render(
	<div>
		<Greeter />
		<Button />
		<Tabs />
		<Counter />
	</div>,
	document.getElementById('root')
)
