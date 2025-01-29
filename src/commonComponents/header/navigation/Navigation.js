import React from 'react'
import logo from "../../../assets/image/logo/gotax.png"
import profile from "../../../assets/image/products/profile.jpg"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faKey, faList, faMoneyCheckDollar, faRecycle } from '@fortawesome/free-solid-svg-icons'
function Navigation() {
    return (
        <>

            <nav className="bg-headerBg">
                <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="absolute -inset-0.5" />

                                <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center  sm:justify-start">
                            <div className="flex shrink-0 items-center">
                                <img className="h-12 w-auto" src={logo} alt="Your Company" />
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">

                                    <Link
                                        to="#"
                                        className="rounded-md px-3 py-2 text-sm font-medium text-white uppercase"
                                        aria-current="page"
                                    >
                                        <span className='px-2'>
                                            <FontAwesomeIcon icon={faEnvelope} className="text-white" />
                                        </span>
                                        <span>
                                            Mail
                                        </span>
                                    </Link>

                                    <Link to={"travel/query"} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white uppercase">
                                        <span className='px-2'>
                                            <FontAwesomeIcon icon={faList} className="text-white" />
                                        </span>
                                        <span>
                                            Qurrey
                                        </span>
                                    </Link>
                                    <Link to={"#"} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white uppercase">
                                        <span className='px-2'>
                                            <FontAwesomeIcon icon={faRecycle} className="text-white" />
                                        </span>
                                        <span>
                                            Operations
                                        </span>
                                    </Link>
                                    <Link to={"#"} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white uppercase">
                                        <span className='px-2'>
                                            <FontAwesomeIcon icon={faMoneyCheckDollar} className="text-white" />
                                        </span>
                                        <span>
                                            Sale
                                        </span>
                                    </Link>
                                    <Link to={"#"} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white uppercase"><span className='px-2'>
                                        <FontAwesomeIcon icon={faKey} className="text-white" />

                                    </span>
                                        <span>
                                            Master
                                        </span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">View notifications</span>
                                <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                </svg>
                            </button>
                            {/* Profile dropdown */}
                            <div className="relative ml-3">
                                <div>
                                    <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">Open user menu</span>
                                        <img className="size-8 rounded-full" src={profile} alt='profile-img' />
                                    </button>
                                </div>

                                {/* <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>

                                    <Link to={"#"} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0">Your Profile</Link>
                                    <Link to={"#"} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1">Settings</Link>
                                    <Link to={"#"} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-2">Sign out</Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile menu, show/hide based on menu state. */}
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                        <Link to={"#"} className="uppercase block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Mail</Link>
                        <Link to={"#"} className="uppercase block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Querry</Link>
                        <Link to={"#"} className="uppercase block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Operation</Link>
                        <Link to={"#"} className="uppercase block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Sale</Link>
                        <Link to={"#"} className="uppercase block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Master</Link>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navigation
