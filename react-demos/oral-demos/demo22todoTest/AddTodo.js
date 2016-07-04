import React,{ findDOMNode,Component,PropTypes } from 'react'

export default class AddTodo extends Component{
	render(){
		return (
			<div>
				<input type='text' ref='input'/>
				<button onClick={ e => this.handleClick(e)}>
					增加
				</button>
			</div>
		)
	}

	handleClick(e){
		const node=findDOMNode(this.refs.input)
		const text=node.value.trim()
		this.props.onAddClick(text)//？onAddClick(来源)
		node.value=''
	}
}
AddTodo.propTypes={
	onAddClick: PropTypes.func.isRequired
}
