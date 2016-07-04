import React,{PropTypes,Component} from 'react'

export default class Todo extends Component{
	render(){
		return (
			<li
				onClick={}
				style={{
					textDecoration:,
					cursor:,
				}}>
				{this.props.text}
			</li>
		)
	}
}

Todo.propTypes={
	onClick:PropTypes.func.isRequired,
	text:PropTypes.string.isRequired,
	completed:PropTypes.bool.isRequired
}
