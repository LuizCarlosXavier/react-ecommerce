import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const NavBar = () => {
    return (
        <div className='flex items-center justify-between font-medium py-6'>
             
            <div>
                <img src={assets.logo} className='w-32' alt="" />
                <p className='ml-4 text-xl relative bottom-[30px] ml-5'>HORIZON</p>
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

        </div>
    );
}

export default NavBar;