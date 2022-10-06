import './App.css';
import React, {useState} from 'react';
import { AgGridReact } from'ag-grid-react'
import'ag-grid-community/dist/styles/ag-grid.css'
import'ag-grid-community/dist/styles/ag-theme-material.css';
import  {useRef} from 'react';


function Todolist() {
  const [todo, setTodo] = useState({description: '', date: '', priority:''});
  const [todos, setTodos] = useState([]);
  const gridRef = useRef();
  const columnDefs = [
        {
        field: 'description',
        filter: true,
        floatingFilter: true
    },{
      field: 'date',
      filter: true,
      floatingFilter: true
  },{
    field: 'priority',
    filter: true,
    floatingFilter: true
}
];

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    setTodos([...todos, todo]);
  }
  const columns = [  
    { field: "description", sortable: true, filter: true,floatingFilter: true,animateRows:true },  
    { field: "date", sortable: true, filter: true,floatingFilter: true,animateRows:true  },  
    { field: "priority", sortable: true, filter: true,floatingFilter: true,animateRows:true ,
    cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'} }
  ]
  const deleteTodo = () => {
    if (gridRef.current.getSelectedNodes().length > 0) 
    {    setTodos(todos.filter((todo, index) =>      
      index !== gridRef.current.getSelectedNodes()[0].childIndex))  }
      else {    alert('Select row first');  
    }}

  return (
    <div>
      <header className='App-header'>ToDolist</header>
      <div className='App-div'>
      <input type="text" onChange={inputChanged} placeholder="Description" name="description" value={todo.description}/>
      <input type="text" onChange={inputChanged} placeholder="Date" name="date" value={todo.date}/>
      <input type="text" onChange={inputChanged} placeholder="Priority" name="priority" value={todo.priority}/>
      <button onClick={addTodo}>Add</button>
      <button onClick={deleteTodo}>Delete</button>
      </div>
      <div className="ag-theme-material"style={{height: '700px', width: '70%', margin: 'auto'}} >
      <AgGridReact
      animateRows={true}
      columnDef={columnDefs} 
      ref={gridRef.current}
      onGridReady={ params => gridRef.current = params.api }
      rowSelection="single"
      columnDefs={columns}
      rowData={todos}>
       
      </AgGridReact>
      </div>
    </div>
  );
};

export default Todolist;