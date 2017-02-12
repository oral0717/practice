import React, { Component, PropTypes } from 'react'
import styles from './styles.styl'
import classNames from 'classnames/bind'

let cx = classNames.bind(styles)

class TabContent extends Component {
	static propTypes = {
		classPrefix: PropTypes.string,
		panels: PropTypes.node,
		activeIndex: PropTypes.number,
		isActive: PropTypes.bool
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
		const { classPrefix } = this.props

		return (
			<div className={cx(`${classPrefix}-content`)}>
				{this.getTabPanes()}
			</div>
		)
	}
}

export default TabContent
