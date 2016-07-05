import {ADD_TODO,COMPLETE_TODO,SET_VISIBILITY_FILTER,VisibilityFilters} from './actions'
import {combineReducers} from 'redux'

const {SHOW_ALL} = VisibilityFilters

function visibilityFilter(state = SHOW_ALL,action){
	switch (action.type){
		case SET_VISIBILITY_FILTER:
			return action.filter
		default:
			return state
	}
}
function todos(state=[],action){
	switch (action.type){
		case ADD_TODO:
			return [
				...state,
				{
					text:action.text,
					completed:false
				}
			]
		case COMPLETE_TODO:
			return [
				...state.slice(0,action.index),//截取发生action前的数组
				Object.assign({},state[action.index],{//处理发生action的列表信息
					completed:true
				}),
				...state.slice(action.index+1)//截取发生action后的数组
			]
		default:
			return state
	}
}

const todoApp = combineReducers({
	visibilityFilter,
	todos
})

export default todoApp