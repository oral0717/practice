import React,{propTypes,} from 'react'
/*
function todoApp(state=initialState,action){
	switch (action.type){
		case SET_VISIBILITY_FILTER:
			return Object.assign({},state,{
				visibilityFilter:action.filter
			})
		default:
			return state
	}
}

function todoApp(state=initialState,action){
	switch (action.type){
		case SET_VISIBILITY_FILTER:
			return {...state,visibilityFilter:action.filter}
		default:
			return state
	}
}
*/
export function addTodo(text){
	return {
		type:'ADD_TODO',
		text
	}
}

import {addTodo} from './actionCreators'
dispatch(addTodo('Use React'))

/**/
export function addTodo(text){
	return {
		type:'ADD_TODO',
		text
	}
}
export function editTodo(id,text){
	return {
		type:'EDIT_TODO',
		text,
		id
	}
}
export function removeTodo(id){
	return {
		type:'REMOVE_TODO',
		id
	}
}


function makeActionCreator(type,...argNames){
	return function(...args){
		let action={type}
		argNames.forEach((arg,index)=>{
			action[argNames[index]]=args[index]
		})
		return action
	}
}
const ADD_TODO='ADD_TODO'
const EDIT_TODO='EDIT_TODO'
const REMOVE_TODO='REMOVE_TODO'
export const addTodo=makeActionCreator(ADD_TODO,'todo')
export const editTodo=makeActionCreator(EDIT_TODO,'id','todo')
export const removeTodo=makeActionCreator(REMOVE_TODO,'id')

/**/



































