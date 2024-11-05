import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const NavBar = () => {

    const [state, setVisible] = useState(false)

    return (
        <div className='flex items-center justify-between font-medium py-6'>
             
            <div>
                <img src={assets.logo} className='w-32' alt="" />
                <p className='text-xl relative bottom-[30px] ml-5'>HORIZON</p>
            </div>

            <ul className='hidden sm:flex gap-4'>
                <NavLink to='/' className='flex flex-col gap-1 items-center'>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.7px] bg-yellow-500 hidden'/>
                </NavLink>

                <NavLink to='/women' className='flex flex-col gap-1 items-center'>
                    <p>WOMEN</p>
                    <hr className='w-2/4 border-none h-[1.7px] bg-rose-500 hidden'/>
                </NavLink>

                <NavLink to='/men' className='flex flex-col gap-1 items-center'>
                    <p>MEN</p>
                    <hr className='w-2/4 border-none h-[1.7px] bg-blue-500 hidden'/>
                </NavLink>

                <NavLink to='/about' className='flex flex-col gap-1 items-center'>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.7px] bg-yellow-500 hidden'/>
                </NavLink>

                <NavLink to='/contact' className='flex flex-col gap-1 items-center'>
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.7px] bg-yellow-500 hidden'/>
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>
                <img src={assets.search} alt="" className='w-6 cursor-pointer'/>
                <div className='group relative'>
                    <img src={assets.user} alt="" className='w-6 cursor-pointer' />
                    <div className='group-hover:block absolute hidden dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            <p className='cursor-pointer hover:text-black'>Profile</p>
                            <p className='cursor-pointer hover:text-black'>Orders</p>
                            <p className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>
                </div>

                <Link to='/cart' className='relative'>
                    <img src={assets.cart} alt="" className='w-6 min-w-6'/>
                    <p className='bg-yellow-500 absolute left-4 rounded-full w-4 aspect-square right-[-5px] bottom-[-5px] leading-4 text-center text-[10px]'>0</p>
                </Link>

                <img onClick={()=>setVisible(true)} src={assets.menu} alt="" className='w-6 cursor-pointer sm:hidden'/>

            </div>

            {/* small screens sidebar */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${state ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-700'>
                    <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3'>
                        <img className='rotate-90 h-6 cursor-pointer' src={assets.back} alt="" />
                        <p>Return</p>
                    </div>
                    
                    <NavLink onClick={()=>setVisible(false)} to='/' className='py-2 pl-6 border'>
                        <p>HOME</p>
                    </NavLink>

                    <NavLink onClick={()=>setVisible(false)} to='/women' className='border py-2 pl-6'>
                        <p>WOMEN</p>
                    </NavLink>

                    <NavLink onClick={()=>setVisible(false)} to='/men' className='border py-2 pl-6'>
                        <p>MEN</p>
                    </NavLink>

                    <NavLink onClick={()=>setVisible(false)} to='/about' className='border py-2 pl-6'>
                        <p>ABOUT</p>
                    </NavLink>
                    
                    <NavLink onClick={()=>setVisible(false)} to='/contact' className='border py-2 pl-6'>
                        <p>CONTACT</p>
                    </NavLink>
                </div>
            </div>

        </div>
    );
}

export default NavBar;