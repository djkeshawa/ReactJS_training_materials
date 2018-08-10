import React, { Component } from 'react';

export class Todo extends Component {
  constructor(props){
    super();
    this.state = {
      todos:[],
      newTodo:''
    };
  }
  handleChnage(e){
    const {value} = e.target;
    this.setState({newTodo:value});
  }

  handleClick(e){
    e.preventDefault();
    const todos = [...this.state.todos,this.state.newTodo];
    this.setState({todos,newTodo:''});
  }

  removeTodo(i){
    this.state.todos.splice(i,1);
    const todos = [...this.state.todos];
    this.setState({todos,newTodo:''});
  }

  render() {
    return (
      <div>
        <form>
        <input onChange={this.handleChnage.bind(this)} value={this.state.newTodo} type='text' placeholder='new todo'/>
        <button onClick={this.handleClick.bind(this)}>create</button>
        </form>
        <ul>
          {this.state.todos.map((todo,index) => (<li onClick={()=>this.removeTodo.call(this,index)}>{todo}</li>))}
          </ul>
        </div>
    );
  }
}
