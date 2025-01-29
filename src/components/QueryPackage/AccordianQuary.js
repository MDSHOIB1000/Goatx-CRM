import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { height } from '@fortawesome/free-solid-svg-icons/faPen'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Colors } from 'chart.js'
import React from 'react'
import TravelInquiry from './TravelInquiry'

const AccordianQuary = () => {
    return (
        <div className='mt-2'>
            <div>
                <div className='mb-3'>
                    <label className='text-sm text-black' >CC Mails</label>
                    <input className="w-full border shadow-sm rounded-sm mt-1 p-1" type="text" />
                </div>
                <div className='mb-3'>
                    <label className='text-sm text-black'>Attachment</label>
                    <input className="w-full border shadow-sm rounded-sm mt-1 p-1" type="file" />
                </div>
                <div className='mb-3'>
                    <textarea className="w-full border shadow-sm rounded-sm mt-1 p-1 h-16 overflow-auto" type="file" />
                </div>
                <div className="flex gap-2 my-3">
                    <button className="px-3 text-white rounded hover:bg-red-700 py-1 bg-red-500"> <FontAwesomeIcon icon={faXmark} /> Cancle</button>
                    <button className="px-3 text-white rounded hover:bg-green-700 py-1 bg-green-500"> save <FontAwesomeIcon icon={faPaperPlane} /></button>
                </div>
                <div className='flex gap-2 my-2 items-center' >
                <label className='text-sm text-black'>CC Mails</label>
                <div className='text-white p-2 bg-blue-950 text-xs rounded-md'>admin@viaggioo.com</div>
                <div className='text-white p-2 bg-blue-950 text-xs rounded-md'>sarthak@viaggioo.com</div>
                </div>
            </div>
            <TravelInquiry />
        </div>
    )
}

export default AccordianQuary