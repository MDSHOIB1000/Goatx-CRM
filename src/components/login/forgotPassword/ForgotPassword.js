import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function ForgotPassword() {
    const navigate = useNavigate()
    return (
        <>
            <form>
                <div
                    className="space-y-4 border-white-600 p-5 rounded-tl-2xl rounded-br-2xl border border-white"
                    style={{
                        backgroundColor: "rgba(250, 250, 250, 0.4)",
                    }}
                >
                    <div className="border-b border-gray-900/10 pb-6">
                        <h2 className="text-base/7 font-semibold text-gray-900 uppercase">
                            Welcome Back Goatx CRM
                        </h2>
                        <p className="mt-1 text-sm/6 text-gray-600 uppercase">
                            <i>Reset Your Password !</i>
                        </p>

                        <div className="mt-5">
                            <div className="sm:col-span-4">
                                <label
                                    htmlFor="email"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"

                                        autoComplete="email"
                                        className="block w-full rounded-md bg-transparent border-2 border-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <button
                                    type="button"
                                    className="flex mt-5  items-center justify-between gap-2 px-4 py-2 text-sm font-semibold text-pink-500 bg-transparent border border-pink-500 rounded-md hover:bg-pink-500 hover:text-white focus:ring-2 focus:ring-pink-300 focus:outline-none"
                                >
                                    <span>SEND OTP</span>
                                    <span><FontAwesomeIcon icon={faPaperPlane} /></span>
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            type="button"
                            className="uppercase rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={() => navigate(`/login`)}
                        >
                            BACK TO LOGIN
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ForgotPassword
