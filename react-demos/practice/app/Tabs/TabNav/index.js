import React, { Component, PropTypes } from 'react'
import styles from './styles.styl'
import classNames from 'classnames/bind'

let cx = classNames.bind(styles)

class TabNav extends Component {

	constructor(props) {
		super(props)
	}
	getTabs() {
		const { classPrefix, activeIndex, panels } = this.props

		return React.Children.map(panels, (child) => {
			if (!child) { return }

			const order = parseInt(child.props.order,10)

			let classes = classnames({
				[`${classPrefix}-tab`]: true,
				[`${classPrefix}-active`]: activeIndex === order,
				[`${classPrefix}-disabled`]: child.props.disabled
			})

			return (
				<li>{child.props.tab}</li>
			)
		})
	}
	render() {
		return (
			<div></div>
		)
	}

}
Tabs.defaultProps = {
	classPrefix: 'xxx'
}
export default TabNav
