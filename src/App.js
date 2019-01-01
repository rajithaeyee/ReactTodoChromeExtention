import React, { Component } from 'react';
import './App.css';
import Todo from './Components/Todo/Todo';
import TodoAdder from './Components/TodoAdder/TodoAdder';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    const { cookies } = props;
    this.state = {
      todods:cookies.get('tasks')?cookies.get('tasks'):[],
      taskName:""
      };
  }
  

  completeTask=(event,index)=>{
    const { cookies } = this.props;
    const todos =[...this.state.todods];
    todos[index].checked = "checked";
    const tasksList=JSON.stringify(todos);
    cookies.set('tasks',tasksList);
    this.setState({
      todods: todos
    });
  }

  addTodo = (taskName)=>{
    const { cookies } = this.props;
    
    const todos = [...this.state.todods];
    if(this.state.taskName){
      console.log(cookies.get('tasks'));
      todos.unshift({task:taskName, checked:""});
      const tasksList=JSON.stringify(todos);
        cookies.set('tasks',tasksList);
      //console.log( stringArr);
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

  deleteTask(event, index){
    const { cookies } = this.props;
    const todos =[...this.state.todods];
    todos.splice(index, 1);

    const tasksList=JSON.stringify(todos);
    cookies.set('tasks',tasksList);

    this.setState({
      todods: todos
    });
  }

  render() {
    let myTodos = this.state.todods.map((t,index)=>{
        return (<Todo task={t.task} 
          click={(event)=>{this.completeTask(event,index)}}
          checked={t.checked}
          delete={(event) => {this.deleteTask(event, index)}} />);
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

export default withCookies(App);
