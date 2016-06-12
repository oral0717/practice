import React,{PropTypes} from 'react'

const Todo=(onClick,completed,text)=>(
	<li
		onClick={onClick}
		style={{
			textDecoration:completed?'line-through':'none'
		}}
	>
		{text}
	</li>
)
Todo.propTypes={
	onClick:PropTypes.func.isRequird,
	completed:PropTypes.bool.isRequird,
	text:PropTypes.string.isRequird
}

export default Todo