import './App.css';
import React, {useState} from 'react';
import { AgGridReact } from'ag-grid-react'
import'ag-grid-community/dist/styles/ag-grid.css'
import'ag-grid-community/dist/styles/ag-theme-material.css';
import  {useRef} from 'react';
import Button from'@mui/material/Button';
import TextField from'@mui/material/TextField';
import Stack from'@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Home from "./Home.jsx";




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
    setTodo({description: '', date: '', priority: ''});
  }
  const yourChangeDateFunc = (event) => { 
    
      todo.date =setTodos([...todos, todo.date]);
      
      
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
      
      
      <div className='App-div'>
      <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
      <TextField type="text" onChange={inputChanged} placeholder="Description" name="description" value={todo.description}/>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
       
      <DesktopDatePicker
          label="Date"
          value={todo.date}
          
          onChange={date => yourChangeDateFunc(date)}
          renderInput={(params) => <TextField {...params} />}
        />
          </LocalizationProvider>
      <TextField type="text" onChange={inputChanged} placeholder="Priority" name="priority" value={todo.priority}/>
      <Button onClick={addTodo} variant="contained" >Add</Button>
      <Button onClick={deleteTodo} variant="contained">Delete</Button>
      </Stack>
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