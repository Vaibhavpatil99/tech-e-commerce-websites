import React, { useState } from 'react'


function Login() {

    const [Data, setData] = useState({
        Name: "",
        Email: "",
        Phone: "",
    });
   

    const changeData = (e) => {
        setData({ ...Data, [e.target.name]: e.target.value })
        console.log(Data);
    };

    const submit = (e) => {
        e.preventDefault();
       

    };


    return (
        <>
            <form onSubmit={submit}>
                <div className='flex flex-col justify-center items-center min-h-full'>
                 
                    <div className='border shadow-lg rounded-lg bg-gray-300'>
                        <div className='m-4 flex flex-col'>
                            <label className='m-2' htmlFor="">Enter Your Name</label>
                            <input className='outline-none border rounded-lg px-4 py-2 shadow' type="text" placeholder='Enter Name' onChange={changeData} name="Name" />
                        </div>
                        <div className='m-4 flex flex-col'>
                            <label className='m-2' htmlFor="">Enter Your Email</label>
                            <input className='outline-none border rounded-lg px-4 py-2 shadow' type="text" placeholder='Enter Email' onChange={changeData} name="Email" />
                        </div>
                        <div className='m-4 flex flex-col'>
                            <label className='m-2' htmlFor="">Enter Your Phone Number</label>
                            <input className='outline-none border rounded-lg px-4 py-2 shadow' type="text" placeholder='Enter Phone Number' onChange={changeData} name="Phone" />
                        </div>
                        <div className='m-4'>
                            <button type="submit" className='outline-none border rounded-lg px-4 py-2 bg-white shadow'>Click Me</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Login