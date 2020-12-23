import React from "react";
import classes from "./Display.module.css"

const Display = (props) => {

  return (
    <div className={classes.container} ref={props.refer}>
    {props.message.map(el => {
      return <li className={classes.list} key={el+Math.random()*10}>{el}</li>
    })}
    </div>
  )
}

export default Display;