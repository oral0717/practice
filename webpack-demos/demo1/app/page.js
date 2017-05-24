import React, { Component } from 'react'
import Greeter from './components/Greeter'
import GridList from './components/grid/GridList'

export default class Page extends Component{
	render() {
		return (
			<div>
				<Greeter />
				<GridList />
			</div>
		)
	}
}
