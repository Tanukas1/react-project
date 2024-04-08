import React from 'react'
import react, {useState} from 'react'

export default function index() {
    const[count,setCount]= useState(0);
  return (
    <div className="container my-5">
        <div className="card shadow text-center my-5">
            <div className="card-body">
                <h1>SIMPLE COUNTER</h1>
                <div className="my-5">
                    <h2 className="">{count}</h2>
                    <button type="button" class="btn btn-info mx-3" onClick={() => setCount(count+1)}> Increment</button>
                    <button type="button" class="btn btn-success mx-3 " onClick={() => setCount(count-1)}>Decrement</button>
                    <button type="button" class="btn btn-danger mx-3" onClick={()=>setCount(0)}>Reset</button>
                </div>
            </div>
        </div>
    </div>
  )
}



// return (
//     <div className=''>
//         <div className='container p-5'>
//             <div className='card p-5 m-5 shadow'>
//                 <form>
//                     <h2 className='text-center'>Todo List</h2>
                   
//                     <div className='row p-5'>
//                         <div className='col'>
//                             <input type="text" class="form-control" placeholder='Enter a new task' ></input>
//                         </div>
//                         <div className='col'>
//                             <button type="button" className='btn btn-success' >Add Todo</button>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </div>
//   )