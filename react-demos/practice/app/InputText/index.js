import React, { Component, PropTypes } from 'react'
import styles from './styles.styl'
import classNames from 'classnames/bind'

let cx = classNames.bind(styles)

class InputText extends Component {

	constructor(props) {
		super(props)
		this.state = {
			
		}
	}
	inputBlur() {
		let inputText = this.refs.textInput.value.trim()
		if (inputText === '') {
			this.setState({})
		}
	}
	render() {
		let { maxLength, placeHolder, style } = this.props
		return (
			<div>
				<input
					ref="textInput"
					type="text"
					placeholder={placeHolder}
					maxLength={maxLength}
					onClick={()=>this.handleClick()}
					onBlur={()=>this.inputBlur()}
					onChange={()=>this.inputChange()} />
				<p className={cx('tip')}>错误提示</p>
			</div>
		)
	}

}
InputText.defaultProps = {
	maxLength: 36,
	placeHolder: '请输入提示',
	style: {}
}
export default InputText
