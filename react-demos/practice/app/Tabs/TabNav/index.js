import React, { Component, PropTypes } from 'react'
import styles from './styles.styl'
import classNames from 'classnames/bind'

let cx = classNames.bind(styles)

class TabNav extends Component {
	static propTypes = {
		classPrefix: PropTypes.string,
		panels: PropTypes.node,
		activeIndex: PropTypes.number
	}

	getTabs() {
		const { classPrefix, activeIndex, panels } = this.props

		return React.Children.map(panels, (child) => {
			if (!child) { return }

			const order = parseInt(child.props.order,10)

			let classes = classNames({
				[`${classPrefix}-tab`]: true,
				[`${classPrefix}-active`]: activeIndex === order,
				[`${classPrefix}-disabled`]: child.props.disabled
			})

			let events = {}
			if (!child.props.disabled) {
				event = {
					onClick: this.props.onTabClick.bind(this, order)
				}
			}

			const ref = {}
			if (activeIndex === order) {
				ref.ref = 'activeTab'
			}
			return (
				<li
					role="tab"
					aria-disabled={child.props.disabled ? 'true' : 'false'}
					aria-selected={activeIndex === order ? 'true' : 'false'}
					{...events}
					className={classes}
					key={order}
					{...ref}
				>
					{child.props.tab}
				</li>
			)
		})
	}
	render() {
		const { classPrefix } = this.props

		return (
			<div className={cx(`${classPrefix}-bar`)} role="tablist">
				<ul className={cx(`${classPrefix}-nav`)}>
					{this.getTabs()}
				</ul>
			</div>
		)
	}

}

export default TabNav
