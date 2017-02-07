import React from 'react'
import {render} from 'react-dom'
import Greeter from './Greeter'
import Tabs from './Tabs'

render(
	<div>
		<Greeter />
		<Tabs />
	</div>,
	document.getElementById('root')
)
