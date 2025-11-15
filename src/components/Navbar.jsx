import React from 'react'
import logo from '../assets/logo.svg'

export default function Navbar(){
    return (
<div className="flex item-center justify-between px-6 py-4 border-b border-gray-200">
        
 <   div className="flex item-center items-center px-6 py-4 gap-6 ml-25"> 
        {/* Logo */}
        <img src={logo} alt="logo" className='h-6' />

         <div>
         {/* middle links */}
        <ul className='flex gap-6 text-Black font-bold text-sm'>
            <li >Products</li>  
            <li>Solutions</li>  
            <li>Docs</li>
            <li>Pricing</li>
            <li>Comapny</li>

            <li></li>
        </ul>
        </div>
 </div>



<div className='mr-30'>

        {/* right button  */}

        <div className="flex gap-4">
            <button className='text-Black font-bold text-sm'>Sign in</button>
            <button className='bg-gradient-to-b from-blue-500 to-blue-800 text-white px-2 py-1 rounded-md'>Start building</button>
        
        </div>
        </div>
</div>
             
);

}
