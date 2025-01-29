import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import CancelQuery from './CancleQuery'
import AddTask from './AddTask'

const MakeQuary = () => {
    const [isOpen ,setIsOpen] = useState(false)
    const [isadd,setIsadd] = useState(false)

    const handleOpen = ()=>{
        setIsOpen(!isOpen) 
    }
    const handleAdd = ()=>{
        setIsadd(!isadd) 
    }
  return (
    <div className=''>
        <button onClick={()=>handleOpen()} className='p-2 w-full mb-2 text-sm uppercase border-2 border-stone-100 border-l-4 border-l-red-700 rounded-tl-md rounded-br-md'>
            <span className='text-red-500'><FontAwesomeIcon icon={faXmark}/> </span>
        Make Query Cancel
        </button>
        <button onClick={()=>handleOpen()} className='p-2 mb-2 w-full text-sm uppercase border-2 border-stone-100 border-l-4 border-l-red-700 rounded-tl-md rounded-br-md'>
            <span className='text-red-500'><FontAwesomeIcon icon={faXmark}/> </span>
        Make Query Lost
        </button>
        <button onClick={()=>handleAdd()} className='p-2 text-sm w-full bg-blue-700 text-white border-2 border-stone-100 border-l-4 border-l-yellow-400 rounded-tl-md rounded-br-md'>
            <span className='text-red-500'><FontAwesomeIcon icon={faXmark}/> </span>
            Add new task
        </button>
        <CancelQuery setIsOpen={setIsOpen} isOpen={isOpen}/>
        <AddTask  isadd={isadd} setIsadd={setIsadd}/>
    </div>
  )
}

export default MakeQuary