import React,{useState,useEffect} from "react";
import Display from "../Display/Display";
import classes from "./MyComponent.module.css" 

const MyComponent = () => {
  const contRef = React.useRef();

  const [text,setText] = useState();
  const [messages,setMessages] = useState([]);

  const changeHandler = (e) => {
     setText(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
     setMessages([
       ...messages,
       text
     ]);
     setText('');
  }

  const scrollToRef = () => {
    console.log("cont",contRef.current.scrollHeight);
    console.log("hih",contRef.current.clientHeight);
    const scrl = contRef.current.scrollHeight-contRef.current.clientHeight;
    contRef.current.scrollTo(0,scrl);
  }

  useEffect(()=>scrollToRef,[messages]);

  return(
    <div>
    <Display message={messages} refer={contRef}/>
    <form onSubmit={submitHandler}>
      <input className={classes.input} type="text" placeholder="enter your message" onChange={changeHandler} value={text}/>
      <button className={classes.btn} onClick={submitHandler}>send</button>
    </form>
    </div>
  )
}

export default MyComponent;