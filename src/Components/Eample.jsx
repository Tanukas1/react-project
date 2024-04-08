import React,{useState} from 'react';

export default function Eample() {
    const[count,setCount]= useState(0);

    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }

  return (
   <div >
        <h2>Counter:{count}</h2>
        <button onClick={increment}>Increament</button>
        <button onClick={decrement}>Decrement</button>
   </div>
  )
}
