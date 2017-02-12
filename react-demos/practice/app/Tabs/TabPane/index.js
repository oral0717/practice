import React, { Component, PropTypes } from 'react'
import styles from './styles.styl'
import classNames from 'classnames/bind'

let cx = classNames.bind(styles)

class TabPane extends Component {
	static propTypes = {
		tab: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.node,
		]).isRequired,
		// order: PropTypes.string.isRequired,
		disable: PropTypes.bool,
		isActive: PropTypes.bool
	}
	constructor(props) {
		super(props)
	}

	render() {
		const { classPrefix, className, isActive, children } = this.props
		// const classes = classnames({
		// 	[className]: className,
		// 	[`${classPrefix}-panel`]: true,
		// 	[`${classPrefix}-active`]: isActive
		// })
		return (
			<div
				role="tabpane"
				className={cx({
					[className]: className,
					[`${classPrefix}-panel`]: true,
					[`${classPrefix}-active`]: isActive
				})}
				aria-hidden={!isActive}>
				{children}
			</div>
		)
	}
}

export default TabPane
