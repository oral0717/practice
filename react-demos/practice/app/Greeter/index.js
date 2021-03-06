import React, {Component} from 'react'
import config from './config.json'
import styles from './styles.styl'
import classNames from 'classnames/bind'

let cx = classNames.bind(styles)

class Greeter extends Component{
	render() {
		return (
			<div className={cx('root-root')}>
				<p className={'max'}>name</p>
				{config.greetText}
			</div>
		)
	}
}
export default Greeter
