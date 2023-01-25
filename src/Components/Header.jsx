
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import axios from "axios"
import IconButton from '@mui/material/IconButton';


import {CiSearch} from "react-icons/ci"
import { useStore } from '../Store/StoreContext';
const Header = () => {
    const {dispatch,state} = useStore()
    const [country, setCountry] = React.useState('')
    const submit = (e) => {
e.preventDefault()
dispatch({type: "START_LOADER", payload: true})
axios.get(`http://universities.hipolabs.com/search?country=${country}`).then(({data})=>{
    dispatch({type: "CLOSE_LOADER", payload: false})  
    dispatch({type: "UNIVERSITIES", payload: data})
}).catch((err)=> {
    dispatch({type: "CLOSE_LOADER", payload: false})
})
    }
    console.log(state)
  return (
    
    <header className='bg-[#F8F8F8] w-full h-[200px] flex justify-center items-center'>
<Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      
      <InputBase value={country} onChange={(e)=>setCountry(e.target.value)}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Universities By Country"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton onClick={submit} type="button" sx={{ p: '10px' }} aria-label="search">
        <CiSearch />
      </IconButton>
      
      
    </Paper>

    </header>
  )
}

export default Header