import { faCircleUser, faEnvelope, faFile } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import ClientCommunication from './ClientCommunication';
import Taksflow from './Taksflow';
import QuotationCard from './Quotation';

const TabPackage = () => {
    const [tab, setTab] = useState(0);

    const TabHandle = (num) => {
        setTab(num);
    };

    return (
        <div className='bg-white border rounded-lg overflow-hidden'>
            {/* Tab Headers */}
            <ul className='flex gap-0'>
                <li 
                    className={`text-center w-1/4 m-0 py-2 text-white cursor-pointer ${tab === 0 ? "bg-red-600" : "bg-sky-800"}`}
                    onClick={() => TabHandle(0)}
                >
                    <strong className='block text-base'><FontAwesomeIcon icon={faEnvelope} /></strong>
                    <span className='text-xs uppercase'>Client Communication</span>
                </li>
                <li 
                    className={`text-center w-1/4 m-0 py-2 text-white cursor-pointer ${tab === 1 ? "bg-red-600" : "bg-sky-800"}`}
                    onClick={() => TabHandle(1)}
                >
                    <strong className='block text-base'><FontAwesomeIcon icon={faCircleUser} /></strong>
                    <span className='text-xs uppercase'>Task/Followups</span>
                </li>
                <li 
                    className={`text-center w-1/4 m-0 py-2 text-white cursor-pointer ${tab === 2 ? "bg-red-600" : "bg-sky-800"}`}
                    onClick={() => TabHandle(2)}
                >
                    <strong className='block text-base'><FontAwesomeIcon icon={faFile} /></strong>
                    <span className='text-xs uppercase'>Quotation</span>
                </li>
                <li 
                    className={`text-center w-1/4 m-0 py-2 text-white cursor-pointer ${tab === 3 ? "bg-red-600" : "bg-sky-800"}`}
                    onClick={() => TabHandle(3)}
                >
                    <strong className='block text-base'><FontAwesomeIcon icon={faCircleUser} /></strong>
                    <span className='text-xs uppercase'>Query Log</span>
                </li>
            </ul>

            {/* Tab Content */}
            <div className='py-1'>
                {tab === 0 && <ClientCommunication />}
                {tab === 1 && <Taksflow />}
                {tab === 2 && <div> <QuotationCard /></div>}
                {tab === 3 && <div>Query Log Content</div>}
            </div>
        </div>
    );
};

export default TabPackage;
