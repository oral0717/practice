import React, { Component, PropTypes } from 'react'
import styles from './styles.styl'
import classNames from 'classnames/bind'

let cx = classNames.bind(styles)

class Tabs extends Component {

	constructor(props) {
		super(props)
		const currProps = this.props
		let activeIndex = 0

		if ('activeIndex' in currProps) {
			activeIndex = currProps.activeIndex
		} else if ('defaultActiveIndex' in currProps) {
			activeIndex = currProps.defaultActiveIndex
		}

		this.state = {
			activeIndex,
			prevIndex: activeIndex
		}
	}
	// static defaultProps = {
	// 	classPrefix: 'tabs'
	// }
	render() {
		return (
			<div className="ui-tabs">
			111
			</div>
		)
	}
}
Tabs.defaultProps = {
	classPrefix: 'tabs',
	onChange: () => {}
}
export default Tabs
