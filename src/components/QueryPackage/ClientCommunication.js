import { faCircleUser, faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import TextEditor from './Editor'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import CancelQuery from './CancleQuery'
import { use } from 'react'
import AccordianQuary from './AccordianQuary'

const ClientCommunication = () => {
    const [accordian , setAccordion] = useState(false)
    const AccordianHandle = () =>{
        setAccordion(!accordian)
    } 
  return (
    <div className='p-0'>
        <ul className='flex gap-4 p-1 px-2 bg-sky-950'>
            <li className='text-white text-sm'><span><FontAwesomeIcon icon={faUser}/></span>  prai9644@gmail.com</li>
            <li className='text-white text-sm'><span><FontAwesomeIcon icon={faUser}/></span>  karan.sharma@viaggioo.com</li>
            <li className='text-white text-sm'><span><FontAwesomeIcon icon={faUser}/></span>  sarthak@viaggioo.com</li>
        </ul>
        <div className='mt-2 p-2'>
            <div className='mb-3'>
            <label className='text-sm text-black' >CC Mails</label>
            <input className="w-full border shadow-sm rounded-sm mt-1 p-1" type="text"/>
            </div>
            <div className='mb-3'>
            <label className='text-sm text-black'>Attachment</label>
            <input className="w-full border shadow-sm rounded-sm mt-1 p-1" type="file"/>
            </div>
            <div>
                <TextEditor />
            </div>
            <div className='my-2'>
                <ul>
                    <li className='grid grid-cols-12 gap-1 items-center' onClick={AccordianHandle}>
                        <div className='col-span-11 p-2 pr-0 border-l-4 border-red-500 flex gap-2 items-center  bg-stone-100'>
                            <span className='text-sm text-black'><FontAwesomeIcon icon={faCircleUser}/> #FIT000019 - Viaggio World Pvt Ltd - Thailand Family Package
                            </span>
                            <span className='bg-green-700 relative p-1 rounded-2xl text-xs text-white px-2 cursor-pointer group'>view seen time
                            <div className='w-[10rem] left-0 right-0 mx-auto bg-green-700 p-2 absolute hidden bottom-[25px] border group-hover:block'>
                                <h3 className='text-sm text-white'>Time</h3>
                                <p className='text-sm text-white'>16 Jan 2025 17:43:34</p>
                            </div>
                            </span>
                            <span className='text-sm text-black'>
                            14-01-2025 17:34:41</span>
                        </div>
                        <div className='col-span-1 text-sm gap-1 flex items-center cursor-pointer'>
                            <FontAwesomeIcon icon={faShare}/> 
                            <span>Repley</span>
                        </div>
                    </li>
                    {accordian && <div>
                        <AccordianQuary />
                    </div>}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ClientCommunication