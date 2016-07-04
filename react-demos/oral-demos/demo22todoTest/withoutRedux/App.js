import React,{Component} from 'react'
import AddTodo from 'AddTodo'
import TodoList from 'TodoList'
import Footer from 'Footer'

export default class App extends Component{
	render(){
		<div>
			<AddTodo 
				onAddClick={text=>
					console.log('add todo',text)
			} />
			<TodoList 
				todos={[
					{
						text:'Use Redux',
						complete:true
					},{
						text:'Learn to connect it to React',
						complete:false
					}
				]} 
				onTodoClick={todo =>
					console.log('todo clicked',todo)
			} />
			<Footer 
				filter='SHOW_ALL' 
				onFilterChange={filter => 
					console.log('filter change',filter)
			} />
		</div>
	}
}