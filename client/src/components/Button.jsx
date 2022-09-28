import React from 'react'
import { useStateContext } from '../contexts/ContextProvider'

const Button = ({icon,color,bgHoverColor, bgColor, text,borderRadius,size,width}) => {
  const {setIsClicked, initialState} = useStateContext()
  return (
    <button 
      type="button"
      onClick={()=>setIsClicked(initialState)}
      style={{ backgroundColor:bgColor, color, borderRadius}}
      className={`text-${size} w-${width} hover:drop-shadow-xl p-3 hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {text} {icon}
    </button>
  )
}

export default Button
