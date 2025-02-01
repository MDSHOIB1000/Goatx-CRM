import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'


import logo from "../../../assets/image/logo/gotax.png"
import profile from "../../../assets/image/products/profile.jpg"
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleLeft, faEnvelope, faFileExcel, faHandshake } from '@fortawesome/free-regular-svg-icons'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

import { faBullseye, faCircleUser, faFileFragment, faFileInvoice, faKey, faList, faMoneyCheckDollar, faPhoneVolume, faRecycle, faSquareH, faSquarePollVertical, faTableCells } from '@fortawesome/free-solid-svg-icons'
import { faIntercom } from '@fortawesome/free-brands-svg-icons'
function Navigation({ setIsAuthenticated, isAuthenticated }) {
    const navigate = useNavigate()

    const handleLogOut = () => {
        setIsAuthenticated(false)
        console.log(isAuthenticated, "Outer");
        if (isAuthenticated) {
            navigate(`/login`)
            window.location.reload(true);


        } else {
            navigate(`/dashboard`)
        }

    };
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
                        <div>
                        <Link to={"/"} className="flex shrink-0 items-center">
                                <img className="h-12 w-auto" src={logo} alt="Your Company" />
                            </Link>
                        </div>
                        <div className="flex flex-1 items-center justify-center">
                           
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex justify-between">

                                    <Link
                                        to="#"
                                        className="rounded-md px-3 py-2 text-sm font-medium text-white uppercase"
                                        aria-current="page"
                                    >
                                        <span className='px-1'>
                                            <FontAwesomeIcon icon={faEnvelope} className="text-xs text-white" />
                                        </span>
                                        <span>
                                            Mail
                                        </span>
                                    </Link>

                                    <Link to={"travel/query"} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white uppercase">
                                        <span className='px-1'>
                                            <FontAwesomeIcon icon={faList} className="text-xs text-white" />
                                        </span>
                                        <span>
                                            Qurrey
                                        </span>
                                    </Link>
                                    <Popover className="relative">
                                        {({ open }) => (
                                            <>
                                                <PopoverButton className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white uppercase">
                                                    <FontAwesomeIcon icon={faRecycle} className="text-xs text-white px-1" />
                                                    Operations
                                                </PopoverButton>
                                                <AnimatePresence>
                                                    {open && (
                                                        <PopoverPanel static>
                                                            <motion.div
                                                                initial={{ opacity: 0, y: -10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                exit={{ opacity: 0, y: -10 }}
                                                                transition={{ duration: 0.3 }}
                                                                className="absolute mt-4 bg-headerBg p-5 text-white rounded w-[185px] shadow-lg"
                                                            >
                                                                <Link to="/daily-duty-sheet" className='py-1 flex items-center'>
                                                                    <FontAwesomeIcon icon={faTableCells} className="text-xs text-white px-2" /> Daily Duty Sheet
                                                                </Link>
                                                                <Link to="/invoice" className='py-1 flex items-center'>
                                                                    <FontAwesomeIcon icon={faFileInvoice} className="text-xs text-white px-2" /> Invoice
                                                                </Link>
                                                                <Link to="/quotation" className='py-1 flex items-center'>
                                                                    <FontAwesomeIcon icon={faList} className="text-xs text-white px-2" /> Quotation
                                                                </Link>
                                                            </motion.div>
                                                        </PopoverPanel>
                                                    )}
                                                </AnimatePresence>
                                            </>
                                        )}
                                    </Popover>
                                    <Popover className="relative">
                                        {({ open }) => (
                                            <>
                                                <PopoverButton className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white uppercase">
                                                    <FontAwesomeIcon icon={faRecycle} className="text-xs text-white px-1" />
                                                    Sale
                                                </PopoverButton>
                                                <AnimatePresence>
                                                    {open && (
                                                        <PopoverPanel static>
                                                            <motion.div
                                                                initial={{ opacity: 0, y: -10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                exit={{ opacity: 0, y: -10 }}
                                                                transition={{ duration: 0.3 }}
                                                                className="absolute mt-4 bg-headerBg p-5 text-white rounded w-[185px] shadow-lg"
                                                            >
                                                                <Link to="/sale/dsr" className='py-1 flex items-center'>
                                                                    <FontAwesomeIcon icon={faTableCells} className="text-xs text-white px-2" /> DSR
                                                                </Link>
                                                                <Link to="/sale/calls" className='py-1 flex items-center'>
                                                                    <FontAwesomeIcon icon={faFileInvoice} className="text-xs text-white px-2" /> Calls
                                                                </Link>
                                                                <Link to="/sale/meeting" className='py-1 flex items-center'>
                                                                    <FontAwesomeIcon icon={faList} className="text-xs text-white px-2" /> Meeting
                                                                </Link>
                                                                <Link to="/" className='py-1 flex items-center'>
                                                                    <FontAwesomeIcon icon={faList} className="text-xs text-white px-2" /> Sales
                                                                </Link>
                                                            </motion.div>
                                                        </PopoverPanel>
                                                    )}
                                                </AnimatePresence>
                                            </>
                                        )}
                                    </Popover>

                                    <Link to={"#"} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white uppercase"><span className='px-1'>
                                        <FontAwesomeIcon icon={faKey} className="text-xs text-white" />

                                    </span>
                                        <span>
                                            Master
                                        </span></Link>

                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                            <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">View notifications</span>
                                <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                </svg>
                            </button>
                            <div className="relative ml-3 group bg-black px-4 py-2">
                                <div className='flex items-center'>
                                    <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="absolute -inset-1.5" />

                                        <img className="size-8 rounded-full" src={profile} alt='profile-img' />

                                    </button>
                                    <div className='mx-3 '>
                                        <span className=" text-white">Karan</span>
                                        <div className=" text-white">admin@gmail.com</div >
                                    </div>
                                </div>

                                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 focus:outline-hidden hidden group-hover:block" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
                                    <Link to={"/profile"} className=" px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0">
                                        <span className='text-headerBg'>
                                            <FontAwesomeIcon icon={faCircleUser} className='px-2' />
                                        </span>
                                        <span className='uppercase'>Your Profile</span>
                                    </Link>
                                    <button className=" px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-2" onClick={handleLogOut}>
                                        <span className='text-headerBg'>
                                            <FontAwesomeIcon icon={faCircleLeft} className='px-2' />
                                        </span>
                                        <span className='uppercase'>Log out</span>
                                    </button>
                                </div>
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