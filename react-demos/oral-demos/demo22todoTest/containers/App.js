import React,{Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import {addTodo,completeTodo,setVisibilityFilter,VisibilityFilters} from '../actions'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'

class App extends Component {
	render(){
		const {dispatch,visibleTodos,visibilityFilter}=this.props
		return (
			<div>
			<AddTodo 
				onAddClick={text=>
					dispatch(addTodo(text))
				}/>
			<TodoList
				todos={this.props.visibleTodos}
				onTodoClick={index=>
					dispatch(completeTodo(index))
				}/>
			<Footer 
				filter={visibilityFilter}
				onFilterChange={nextFilter=>
					dispatch(setVisibilityFilter(nextFilter))}
				/>
			</div>
		)
	}
}