import React,{useState, useContext} from 'react'
import { ColorContext } from '../../example/Ex10_div'

const ColorList = () => {

  const data = useContext(ColorContext)

  return (
    <div style={{display:'flex'}}>
            <div style={{
                width : '100px',
                height : '100px',
                backgroundColor:'red'
                 }}
                 onClick={() => data.setColor('red')}></div>
            <div style={{
                width : '100px',
                height : '100px',
                backgroundColor:'orange'
            }}
            onClick={() => data.setColor('orange')}></div>
            <div style={{
                width : '100px',
                height : '100px',
                backgroundColor:'yellow'
            }}
            onClick={() => data.setColor('yellow')}></div>
            <div style={{
                width : '100px',
                height : '100px',
                backgroundColor:'green'
            }}
            onClick={() => data.setColor('green')}></div>
             <div style={{
                width : '100px',
                height : '100px',
                backgroundColor:'blue'
            }}
            onClick={() => data.setColor('blue')}></div>

    </div>
  )
}

export default ColorList