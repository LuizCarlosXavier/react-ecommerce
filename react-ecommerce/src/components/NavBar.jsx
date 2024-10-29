import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const NavBar = () => {
    return (
        <div className='flex items-center justify-between font-medium py-6'>
             
            <img src={assets.logo} className='w-32' alt="" />

            <ul className='hidden sm:flex gap-4'>
                <NavLink to='/' className='flex flex-col gap-1 items-center'>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.7px] bg-yellow-500'/>
                </NavLink>

                <NavLink to='/women' className='flex flex-col gap-1 items-center'>
                    <p>WOMEN</p>
                    <hr className='w-2/4 border-none h-[1.7px] bg-yellow-500'/>
                </NavLink>

                <NavLink to='/men' className='flex flex-col gap-1 items-center'>
                    <p>MEN</p>
                    <hr className='w-2/4 border-none h-[1.7px] bg-yellow-500'/>
                </NavLink>

                <NavLink to='/about' className='flex flex-col gap-1 items-center'>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.7px] bg-yellow-500'/>
                </NavLink>

                <NavLink to='/contact' className='flex flex-col gap-1 items-center'>
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.7px] bg-yellow-500'/>
                </NavLink>
            </ul>

        </div>
    );
}

export default NavBar;