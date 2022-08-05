import React from 'react'
import "./Box.css"

export const Box = ({value,onClick}) => {
  const style = value === "X" ? "box x" : "Box o";
  return (
    <button className={style} onclick={onClick}>{value}</button>
  )
}
