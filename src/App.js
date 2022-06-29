import './App.css';
import NavBar from './components/NavBar'
import TodoData from './data/TodoData';
import TodoList from './components/TodoList'
import { Component } from "react";

class App extends Component {

  // step 1: Default State is empty
  state = {
    TodoData: TodoData,
    TaskName: "",
    Description: "",
    Completed: false
  }

  // step 2: when event happens change State Object above, in step 1.
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  }

  // step 3: Prevent the default State above, which would keep it empty
  handleSubmit = (event) => {
    event.preventDefault()

    // 4. Setting up a schema object of key:value pairs to insert in JSX render below
    const newTodo = {
      TaskName: this.state.TaskName,
      Description: this.state.Description,
      Completed: this.state.Completed
    }
    console.log(newTodo);
    this.setState({
      TodoData: [newTodo, ...this.state.TodoData],
      TaskName: "",
      Description: "",
      Completed: false
    })
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <br></br>
        <header className="App-header">TO-DO LIST</header>
        <br></br> 
        <form onSubmit={this.handleSubmit}>

          <label htmlFor="TaskName">Todo Name</label>
          <input type="text" value={this.state.TaskName} onChange={this.handleChange} id="TaskName" />

          <label htmlFor="Description">Description</label>
          <input type="text" value={this.state.Description} onChange={this.handleChange} id="Description" />

          <label htmlFor="Completed">Completed?</label>
          <input type="checkbox" value={this.state.Completed} onChange={this.handleChange} id='Completed' />

          <input type="submit" />
        </form>
        
        <TodoList TodoData={this.state.TodoData} />

      </div>
    );
  }
}
export default App;
