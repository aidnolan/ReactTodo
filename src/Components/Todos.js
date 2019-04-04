import React, {Component} from 'react';

class Todos extends Component {
	constructor(){
		super();
		this.state = {
			todoValue: "",
			todoItems: []
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event){
		const {name, value} = event.target; 
		this.setState({
			[name]: value 
		});
	}

	render(){
		return(
			<div>
				<input
					type="text"
					name="todoValue"
					placeholder="New Item"
					onChange={this.handleChange}
				/>
				<p>{this.state.todoValue}</p>
			</div>
			)
	}
}

export default Todos;