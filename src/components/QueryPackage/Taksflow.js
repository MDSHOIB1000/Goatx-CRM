import React from 'react'

const Taksflow = () => {
    return (
        <div className='py-1'>
            <ul className='p-0 bg-green-600 border border-white flex'>
                <li className='p-2 w-[120px] text-white border border-white text-center'>
                    Task ID
                </li>
                <li className='p-2 w-[120px] text-white border border-white text-center'>
                Task Type
                </li>
                <li className='p-2 w-[120px] text-white border border-white text-center'>
                Assign To
                </li>
                <li className='p-2 w-[120px] text-white border border-white text-center'>
                Date
                </li>
                <li className='p-2 w-[120px] text-white border border-white text-center'>
                Remark
                </li>
            </ul>
        </div>
    )
}

export default Taksflow