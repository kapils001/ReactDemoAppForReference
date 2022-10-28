import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeTextColor } from './ThemeSlice';


export const Theme = () => {

const dispatch =useDispatch();
const [color, setcolor] =useState("white")  
    return (
    <div>
        <input type="text" className='form-text' onChange={(e) => setcolor(e.target.value)}/>
        <button className='button' onClick={() => dispatch(changeTextColor(color))}>Change Colour</button>
       
    </div>
  )
}
