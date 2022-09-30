import './App.css';
import React, {useState} from 'react';

function App() {
  const [todo,setTodo]=useState({desc: '', date: ''});
  const [todos,setTodos]=useState([]);

  const addTodo=(event) =>{
    event.preventDefault();
    setTodos([...todos, todo]);
   

  }
  
  
  
  const inputChanged=(event)=>{
    setTodo({...todo, [event.target.name]: event.target.value});
  }
  

  const deleteTodo=(index)=>{
    setTodos(todos.filter((todo, i) => i !== index))
  }


    return (
    <div className="App">
      <header className="App-header">Simple TodoList</header>

      <form className="form" >
      <fieldset>
    <legend>
      <h2>
        Add todo:
      </h2>
    </legend>
        
        <label>Description: 
                <input type="text"  name="desc" value={todo.desc} onChange={inputChanged}/>
        </label>
        <label>Date:
                <input type="date" name="date" value={todo.date} onChange={inputChanged}/>
        </label>
        <input type="submit" value="Add" onClick={addTodo}/>
        </fieldset>
      </form>
      
      <table >
        <thead>
          <tr>
            <th>Decription</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) =>
          <tr key={index} >
            <td>{todo.desc}</td>
            <td>{todo.date}
            </td>
            <td><input type="submit" onClick={()=>deleteTodo(index)} value="Delete" /></td>
            </tr>
          )}
        </tbody>
      </table>
      
    </div>
  );
}

export default App;
