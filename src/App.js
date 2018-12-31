import React, { Component } from 'react';
import './App.css';
import Todo from './Todo/Todo';
import TodoAdder from './TodoAdder/TodoAdder';

class App extends Component {
  state = {
  todods:[],
  taskName:""
  };

  completeTask=(event,index)=>{
    const todos =[...this.state.todods];
    todos[index].checked = "checked";
    this.setState({
      todods: todos
    });
  }

  addTodo = (taskName)=>{
    const todos = [...this.state.todods];
    if(this.state.taskName){
      todos.push({task:taskName, checked:""});
      this.setState({
        todods: todos
      });
    this.setState({
      taskName: ""
    });
    }
  }

  changeTaskName = (event) =>{
    const task = event.target.value;
    this.setState({
      taskName: task
    });
  }

  keyPressed(event){
    if(event.key==='Enter'){
      this.addTodo(this.state.taskName);
    }
  }

  render() {
    let myTodos = this.state.todods.map((t,index)=>{
        return (<Todo task={t.task} 
          click={(event)=>{this.completeTask(event,index)}}
          checked={t.checked} />);
    });
    return (
      <div className="App">
        <TodoAdder change={(event)=>{this.changeTaskName(event)}} taskName={this.state.taskName} click={(event)=>{this.addTodo(this.state.taskName)}} enterPressed={(event)=>this.keyPressed(event)}/>
        <ul>
          {myTodos}
        </ul>
      </div>
    );
  }
}

export default App;
