import React, { useState } from 'react'

function List() {
    const[activity,setActivity]= useState("");
    const[listData,setlistData]= useState([]);
    function addActivity(){
        // setlistData([...listData,activity])
        // console.log(listData)
        setlistData((listData)=>{
            const updatedList=[...listData,activity]
            console.log(updatedList)
            setActivity('');
            return updatedList
        })
    }
    // function removeActivity(i){
    //     const updatedListDta= listData.filter((elem, id)=>{
    //         return i!=id;
    //     })
    //     setlistData(updatedListDta);
    // }
  return (
   <div className=''>
    <div className='container'>
        <div className='card m-5 shadow p-5' style={{ width: "80%" }}>
            <h2 className='text-center'>TO DO LIST</h2>
            <form>
                <div className='row p-5'>
                    <div className='col'>
                        <input type="text" class="form-control"  value ={activity} placeholder="Add List" onChange={(e)=>setActivity(e.target.value)}/>
                    </div>
                    <div className='col-3'>
                        <button type="" className="btn btn-success w-50" onClick={addActivity}>ADD</button>
                    </div>
                </div>
                <p className=''>Here is your List: {""}</p>
                {listData!=[] && listData.map((data, i)=>{
                    return(
                        <>
                        <p key={i}>
                            <div className='listData'>{data}</div>
                            {/* <button type="" className='btn btn-danger' onClick={removeActivity(i)}>Remove</button> */}
                        </p>
                        </>
                    )
                })}
            </form>
        </div>
    </div>
   </div>
  )
}

export default List