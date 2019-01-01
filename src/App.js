import React, { Component } from 'react';
import './App.css';
import Todo from './Todo/Todo';
import TodoAdder from './TodoAdder/TodoAdder';
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
    // this.state = {
    //   name: cookies.get('name') || 'Ben'
    // };
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
      todos.push({task:taskName, checked:""});
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

export default withCookies(App);
