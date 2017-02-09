import React, {Component} from 'react'
import styles from './styles.styl'
import classNames from 'classnames/bind'

let cx = classNames.bind(styles)

class Button extends Component {

	constructor(props) {
		super(props)
	}
	// 编译不通过，why
	// static defaultProps = {
	// 	color: 'blue',
	// 	text: 'Confirm'
	// }
	render() {
		let { color='red', text='aa' } = this.props
		return (
			<button className={cx(`btn-${color}`)}>
				{text}
			</button>
		)
	}
}

Button.defaultProps = {
	color: 'blue',
	text: 'Confirm'
}
export default Button
