import React, {Component} from 'react';

class Todos extends Component {
	constructor(){
		super();
	}
	

	render(){
		return(
			<div className="todoTask">
				<input className="inputs" type="checkbox"/>
				<p className="task">Lorem ipsum</p>
			</div>
		)
	}
}

export default Todos;