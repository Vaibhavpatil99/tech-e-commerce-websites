import React from 'react'
import { NavLink } from 'react-router-dom'
// import { useState } from 'react'
function Navbar() {
    // const [open, setOpen] = useState(false);
    return (
        <div>
            <nav className=" flex items-center mx-24 my-8 justify-between relative inline-block text-left">
                
                <h2 className="text-3xl cursor-pointer hover:text-blue-800">SAMSUNG</h2>

                <div className="flex">
                    <NavLink to="/" className="text-2xl cursor-pointer mx-4 hover:bg-black hover:text-white rounded-full px-4 py-1" >Home</NavLink>
                    <NavLink to="/mobiles" className="text-2xl cursor-pointer mx-4 hover:bg-black hover:text-white rounded-full px-4 py-1" >Mobiles</NavLink>
                    <NavLink to="/laptops" className="text-2xl cursor-pointer mx-4 hover:bg-black hover:text-white rounded-full px-4 py-1" >Laptops</NavLink>
                    <select name="" id=""></select>
                    <div>
                  
                   </div>

                </div>
                <div className="flex justify-center items-center">
                    <NavLink to="/" className="text-2xl cursor-pointer mx-4 hover:bg-black hover:text-white rounded-full px-4 py-1" >Contact Us</NavLink>
                    <NavLink to="/login" className="text-2xl cursor-pointer mx-4 hover:bg-black hover:text-white rounded-full px-4 py-1" >Log In</NavLink>
                    <NavLink to="/cart" className="cursor-pointer px-4 py-1" ><img className='h-8' src="../images/shopping-cart.png" alt="" /></NavLink>

                </div>
            </nav>
        </div>
    )
}

export default Navbar
