import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
// import { useSelector, useDispatch } from "react-redux";
// import { addToCart } from "../actions/index"

function Mobiles() {

    const [data, setData] = useState()
    const [cartAnime, setCartAnime] = useState(false);
    useEffect(
        () =>
            axios.get("http://localhost:3003/data")
                .then((res) => {
                    setData(res.data);
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);

                }), []
    );






    const submit = (product) => {
        const updated = { quantity: 1, ...product }
        // console.log(updated)
        axios.post('http://localhost:3003/addtocart', updated).then(res => console.log(res)).catch(err => console.log(err))

        Swal.fire(
            `${updated.Dname}`,
            'Added to cart',
            'success'
        )

    }



    return (
        <div className='bg-gray-100 py-4'>
            {/* {data?.map((e, index) => ( */}
            {data?.filter(fil => fil.category === "Mobile").map((e, index) => (
                <div className=" flex bg-white rounded-xl shadow-lg mx-32 my-4">
                    {/* {console.log(e)} */}

                    <div className="w-3/12 flex justify-center items-center  m-4 p-4">
                        <img className="h-48" src={e.img} alt="" />
                    </div>
                    <div className="w-6/12  m-4 p-4">
                        <h2 className="text-3xl font-semibold">{e.Dname}</h2>
                        <div>
                            {e.spec.map((specs) => (
                                <h2>{specs}</h2>
                            ))}
                        </div>
                        <div className='text'>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center w-3/12 m-4 p-4">
                        <h2 className="text-3xl font-semibold">{e.price}₹</h2>
                        <div className='flex justify-around items-center text-white text-lg'>
                            <button className='bg-blue-400 p-2 rounded mx-1' onClick={() => (submit(e))} >Add To Cart</button>
                            {/* <button className='bg-yellow-300 p-2 rounded mx-1'>Buy Now</button> */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Mobiles
