import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {

  const [cartItem, setCartItem] = useState();
  // const [itemQuantity, setitemQuantity] = useState();
  // let [total, setTotal] = useState();
  // console.log(cartItem.price)
  // setitemQuantity(

  const getcartitems = () => {
    axios.get('http://localhost:3003/getcartitems').then(res => setCartItem([...res.data])).catch(err => console.log(err))
  }
  useEffect(() => {
    getcartitems()
  }, [])
  // )

  let t = 0
  cartItem && cartItem?.length != 0 && cartItem.map((item) => { t = t + item.price * item.quantity })



  const handleQuantity = (e, index) => {
    let item = cartItem[index]
    item.quantity = parseInt(e.target.value)
    console.log(item)
    axios.put(`http://localhost:3003/updatequanntity/${item._id}`, item).then(res => { console.log(res); getcartitems() }).catch(err => console.log(err))


  }

  const handleRemoveItem = (e, index) => {
    let item = cartItem[index]
    console.log(item._id)
    axios.delete(`http://localhost:3003/deleteItem/${item._id}`)
    .then((res)=>{
      console.log(res);
      getcartitems();
    })
  }

  return (
    <>

      <div>
        <div className='flex justify-center items-center my-12'>
          <img src="../images/shopping-cart.png" alt="" className='h-8' />
          <h2 className='text-3xl font-bold tracking-widest px-2'>My Cart</h2>

        </div>
      </div>

      {/* if cartItem is undefine        */}

      {
        !cartItem &&
        <div className='flex justify-center items-center'>

          <img src="../images/loading-buffering.gif" alt="" />

        </div>

      }



      {/* if cartItem is empty        */}

      {cartItem?.length === 0 &&
        <div className='flex flex-col justify-center items-center my-8'>

          <img src="../images/emptyCart.png" alt="" className='h-72' />
          <h2 className='text-xl my-8'>Your Cart is Empty!</h2>
          <Link className='border px-3 py-1 rounded-lg text-lg bg-black text-white ' to="/" >Continue Shopping</Link>
        </div>}



      <div>

        <div className='w-full flex'>

          <div className='w-8/12'>

            {cartItem && cartItem?.length != 0 && cartItem.map((item, index) =>

              <div className='  mx-2 grid grid-cols-6'>

                <img src={item.img} alt="" className='h-32' />

                <div>
                  <h2 className='text-lg font-bold'>{item.Dname}</h2>
                </div>

                <div>
                  <h2 className='text-lg font-semibold'>Each</h2>
                  {item.price}
                </div>

                <div>
                  <h2 className='text-lg font-semibold'>Quantity</h2>
                  <select name="" id="" value={item.quantity} onChange={(e) => handleQuantity(e, index)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                  </select>
                </div>

                <div>
                  <h2 className='text-lg font-semibold'>Total</h2>
                  {item.price * item.quantity}

                </div>
                <div>
                  <button className='border px-2 py-1 rounded-lg  bg-red-500 my-2 text-white ' onClick={(e) => handleRemoveItem(e, index)} >Remove</button>
                </div>
              </div>



            )}

          </div>

            {cartItem && cartItem?.length != 0 &&
          <div className='w-4/12  mx-2'>

              <div>
                <h2 className='text-3xl font-bold text-center'>Billing</h2>
                <div className='flex justify-between text-lg '>
                  <div>All Products</div>
                  <div>

                    {cartItem.map((item, index) =>
                      <h2>{(item.price * item.quantity)}</h2>

                    )}
                  </div>
                </div>
                <div className='flex justify-between text-lg font-semibold'>
                  <div>Sub-Total</div>
                  <div>{t}</div>
                </div>
                
                <div className='flex justify-between text-lg'>
                  <div>TAX</div>
                  <div className='text-red-500'>0.00</div>
                </div>
                
                
                <div className='flex justify-between text-lg'>
                  <div>Delivery Charges</div>
                  <div className='text-green-500'>0.00</div>
                </div>
                
                
                <div className='flex justify-between text-2xl font-bold'>
                  <div>Total Amount</div>
                  <div>{t}</div>
                </div>
                
              </div>


          </div>
            }

        </div>

      </div>

    </>
  )
}

export default Cart