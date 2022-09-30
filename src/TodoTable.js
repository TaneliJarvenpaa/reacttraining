import React from 'react';
import App from './App';

  function TodoTable(props){
    return (
       <div>
       <table >
        <thead>
          <tr>
            <th>Decription</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {props.todos.map((todo, index) =>
          <tr key={index} >
            <td>{todo.desc}</td>
            <td>{todo.date}
            </td>
            <td><input type="submit" onClick={()=>props.deleteTodo(index)} value="Delete" /></td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
    )
}
export default TodoTable;