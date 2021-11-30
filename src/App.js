import './App.css';
import { Component } from 'react';
import axios from 'axios';
class App extends Component {
  state = {todos:[]};
  async componentDidMount(){
    let result = await axios.get("https://jsonplaceholder.typicode.com/todos")
    this.setState({todos:result.data})
    console.log(result)
    console.log('testiris')

  }
 render(){
  return (
    <div className="container">
           <ul className="list-group">

     {this.state.todos.length>0 ?<div>{this.state.todos.map((todo)=>
     <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
      {todo.title}
       <span className="">
         <input type="checkbox" checked={todo.completed}/>
       </span>
     </li>
 
     )}</div>: <div className="spinner-border text-primary" role="status">
   <span className="visually-hidden">Loading...</span>
 </div>}
 </ul>
    </div>
 
  
   );
 }
}

export default App;
