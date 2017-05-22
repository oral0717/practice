import React, {Component} from 'react'
import styles from './style.styl'
import classNames from 'classnames/bind'

let cx = classNames.bind(styles)

export default class GridList extends Component{
	render() {
		return (
			<div className={cx('grid')}>
				<div className={cx('grid-item')}>1</div>
				<div className={cx('grid-item')}>2</div>
				<div className={cx('grid-item')}>3</div>
			</div>
		)
	}
}
