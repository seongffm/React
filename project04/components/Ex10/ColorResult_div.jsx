import React,{useState, useContext} from 'react'
import { ColorContext } from '../../example/Ex10_div'

const ColorResult = () => {

  const data = useContext(ColorContext)

  return (
    <div>
            <div style={{
                width : '100px',
                height : '100px',
                backgroundColor: data.color
            }}></div>


    </div>
  )
}

export default ColorResult