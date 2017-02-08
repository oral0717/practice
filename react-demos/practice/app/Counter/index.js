import React, {Component} from 'react'
import styles from './styles.styl'
import classNames from 'classnames/bind'

let cx = classNames.bind(styles)

class Counter extends Component {

	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
		this.state = {
			count: 1
		}
	}
	handleClick(e) {
		const { count } = this.state
		e.preventDefault()
		this.setState({
			count: count + 1
		})
	}
	render() {
		return (
			<div>
				<p>{this.state.count}</p>
				<a href='#' onClick={this.handleClick}>更新</a>
			</div>
		)
	}
}
export default Counter
