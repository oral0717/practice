import React from 'react'
import {render} from 'react-dom'
import Greeter from './Greeter'
import Button from './Button'
import Tabs from './Tabs'
import Counter from './Counter'

render(
	<div>
		<Greeter />
		<Button />
		{/* <Tabs
			classPrefix={'tabs'}
			defaultActiveIndex={0}
			className='tabs-bar'
			children={[
				<TabPane key={0} tab={'Tab 1'}>第一个Tab里的内容</TabPane>,
				<TabPane key={1} tab={'Tab 2'}>第二个Tab里的内容</TabPane>,
				<TabPane key={2} tab={'Tab 3'}>第三个Tab里的内容</TabPane>
			]}
		> */}
		<Tabs
			classPrefix={'tabs'}
			defaultActiveIndex={0}
			className='tabs-bar'
		>
		</Tabs>
		<Counter />
	</div>,
	document.getElementById('root')
)
