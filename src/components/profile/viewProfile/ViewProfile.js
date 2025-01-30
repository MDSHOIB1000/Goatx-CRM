import React from 'react'
import profile from "../../../assets/image/products/profile.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faPencil } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
function ViewProfile() {
    const handleCopy = () => {
        // Get the input element by its value
        const inputValue = document.querySelector('input').value;
        // Use the Clipboard API to copy the text
        navigator.clipboard.writeText(inputValue).then(() => {
            alert('Copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };
    return (
        <>
            <div className='border rounded-lg shadow p-4 m-4'>
                <div className='shadow p-2  my-4  bg-headerBg  text-white flex justify-between'>
                    <h3 className='uppercase'>
                        <span className=''>My Profile</span>
                    </h3>
                    <Link to="/profile/edit-profile" className='text-white'>
                        <span>
                            EDIT PROFILE
                        </span>
                        <span className='bg-white text-headerBg px-2 mx-2 rounded'>
                            <FontAwesomeIcon icon={faPencil} />
                        </span>
                    </Link>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4"'>
                    <div className='border rounded-lg shadow p-4 m-4'>
                        <div className='lg:flex gap-2'>
                            <div className='mb-4 border p-2 sm:m-0 sm:w-1/4 '>
                                <img src={profile} alt='profile' className='rounded-full' width={"100%"} />
                            </div>
                            <div className='border w-full p-4'>
                                <div className='border px-2 mb-2'>
                                    <span><b>Name :</b></span>
                                    &nbsp;
                                    <span>Karan</span>
                                </div>
                                <div className='text-end'>
                                    <span className=" mb-1 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10 ring-inset">
                                        MESSAGE
                                    </span>
                                </div>
                                <div className='border px-2 mb-2'>
                                    <span><b>Designation :</b></span>
                                    &nbsp;
                                    <span>Sales Person</span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='border rounded-lg shadow p-4 m-4'>
                        <div className='border px-2 mb-2'>
                            <span><b>E-mail :</b></span>
                            &nbsp;
                            <span>karan.sharma@viaggioo.com
                            </span>
                        </div>

                        <div className='border px-2 mb-2'>
                            <span><b>Mobile :</b></span>
                            &nbsp;
                            <span>9810582289 | 9810582289
                            </span>
                        </div>
                        <div className='border px-2 mb-2'>
                            <span><b>Location :</b></span>
                            &nbsp;
                            <span>C-264 S/F VIVEK VIHAR DELHI
                            </span>
                        </div>
                    </div>

                </div>
                <div className='shadow p-2  my-4  bg-headerBg  text-white'>
                    <h3 className='uppercase'>
                        <span className=''>Profile Info
                        </span>
                    </h3>
                </div>
                <div className='grid grid-cols-1  gap-4"'>
                    <div className='border rounded-lg shadow p-4 m-4'>
                        <span className='underline'> <b><i>Web Service Link
                        </i></b></span>
                        <div className='sm:flex gap-3'>
                            <div className='border-2 my-3 w-5/6'>
                                <input
                                    type="text"
                                    value={"https://crm.viaggioo.com/landingpageenquiry.sys?name=xxxxx&email=xxxxx&phone=xxxxx&destination=xxxxx&checkin=xxxxx&checkout=xxxxx&totalpax=xxxxx"}
                                    className="border-none rounded-md focus:outline-none focus:ring-0 focus:border-none w-full py-2 px-5"
                                    readOnly
                                />
                            </div>
                            <div className='border-2 my-3 w-1/6 cursor-copy' onClick={handleCopy}>
                                <div className='bg-headerBg text-white text-center'>
                                    <small><b>copy</b></small>
                                </div>
                                <div className='bg-headerBg text-white text-center'>
                                    <small><b>
                                        <FontAwesomeIcon icon={faCopy} />
                                    </b></small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewProfile
