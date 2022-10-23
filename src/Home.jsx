import Tabs from'@mui/material/Tabs';
import Tab from'@mui/material/Tab';
import Todolist from "./App.js";
import { AppBar } from '@mui/material';
import React, {useState} from 'react';

const Home =()=>{
    const [value, setValue] = useState('one');

    const handleChange = (event, value) => {  
        setValue(value);}
    
    return(
        <div> 
        
    <Tabs value={value} onChange={handleChange}>
        <Tab value="one" label="HOME" />
        <Tab value="two"label="TODOS" />
        </Tabs>
       
        {value === 'one' && <div>Tervetuloa</div>}   
        {value === 'two' && <Todolist/>} 
         
     </div>
    )
}
export default Home;