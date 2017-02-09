import React, { Component, PropTypes } from 'react'
import styles from './styles.styl'
import classNames from 'classnames/bind'

let cx = classNames.bind(styles)

class TabPane extends Component {

	constructor(props) {
		super(props)
	}

	getTabPanes() {
		const { classPrefix, activeIndex, panels, isActive } = this.props

		return React.Children.map(panels, (child) => {
			if (!child) { return }

			const order = parseInt(child.props.order, 10)
			const isActive = activeIndex === order

			return React.cloneElement(child, {
				classPrefix,
				isActive,
				children: child.props.children,
				key: `tabpane-${order}`
			})
		})
	}

	render() {
		return (
			<div>{this.getTabPanes()}</div>
		)
	}
}
Tabs.defaultProps = {
	classPrefix: 'yyy'
}
export default TabPane
