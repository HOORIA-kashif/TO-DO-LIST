"use client"


import React, { useState } from 'react'

const page = () => {
  const [task, settask] = useState("")
  const[desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e)=>{
   e.preventDefault();
   setmainTask([...mainTask,{task,desc}])

  console.log(mainTask)
   settask("")
   setdesc("")
  }
  const deleteHandler = (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
  }
  let renderTask = <h2 className='uppercase font-semibold'>no task availible</h2>
 if(mainTask.length>0){
  renderTask = mainTask.map((t, i)=>{
    return(
     <li key={i} className='list-none flex  justify-between mb-5'>
       <div className='flex  items-center justify-between  w-2/3 '>
        <h5 className='text-2xl font-semibold'>{t.task}</h5>
        <h6 className='text-xl font-semibold'>{t.desc}</h6>
      </div>
      <button onClick={()=>{
        deleteHandler(i)
      }}

       className='uppercase bg-red-500 px-5 py-3 rounded text-white'>Delete</button>
     </li>
    )
})
 }
  return (
   <>
   <h1 className='bg-black text-white p-5 text-bold text-5xl text-center uppercase '>hooria's todo list</h1>
   <form onSubmit={submitHandler}>
    <input type='text' className='border-zinc-800 border-4 m-5 text-xl px-5 py-2 uppercase' placeholder='enter task here!' value={task}
    onChange={(e)=>{
     settask(e.target.value)
    }}></input>
    <input type='text' className='border-zinc-800 border-4 m-5 text-xl px-5 py-2 uppercase' placeholder='enter description here!' value={desc} onChange={(e)=>{
     setdesc(e.target.value)
    }}></input>
    <button className='bg-black rounded text-white text-2xl font-bold p-4 uppercase  m-5'>add task</button>
   </form>
   <hr></hr>
   <div className='bg-slate-200 p-8'>
    <u1>{renderTask}</u1>
   </div>
   </>
  )
}

export default page
