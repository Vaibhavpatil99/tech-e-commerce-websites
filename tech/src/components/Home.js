// import React from 'react'
import React, { useEffect, useState } from 'react'
import laptop from "../images/laptop.png"
import phones from "../images/phones.png"
import phone from "../images/phone.png"
// import slide1 from "../images/slide1.jpg"
import slide2 from "../images/slide2.png"
import slide3 from "../images/slide3.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { NavLink } from 'react-router-dom'
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import axios from 'axios'


function Home() {


  const [data, setData] = useState()
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



  return (

    <div>
      <Swiper

cssMode={true}
effect={"fade"}
navigation={true}
autoplay={{
  delay: 500,
  disableOnInteraction: false,
}}

pagination={{
  clickable: true,
}}
mousewheel={true}
keyboard={true}
modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
className="mySwiper "

        // spaceBetween={50}
        // slidesPerView={1}
        // centeredSlides
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={swiper => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="flex items-center justify-center">
            <img src={slide2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center">
            <img src={slide3} alt="" />
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}
      </Swiper>


      <div className="m-12">
        <h2 className="flex justify-center items-center text-5xl font-semibold">This Month's Picks</h2>

      </div>
      <div className="grid grid-cols-2 mx-12">
        <div className=" bg-gray-200 rounded-2xl">
          <img src={laptop} alt="" />
        </div>
        <div className="grid grid-cols-2 gap-12 mx-12">
          <div className="w-72 flex flex-col justify-center items-center border bg-gray-200 rounded-2xl">
            <img className="w-20" src={phones} alt="" />
            <h2 className="text-xl font-semibold" >S21 Ultra </h2>
            <NavLink to="/mobiles" className='bg-black text-white text-lg px-4 py-1 rounded-full'>Buy Now</NavLink>
          </div>
          <div className="w-72 flex flex-col justify-center items-center border bg-gray-200 rounded-2xl">
            <img className="w-20" src={phone} alt="" />
            <h2 className="text-xl font-semibold" >S21 Ultra </h2>
            <NavLink to="/mobiles" className='bg-black text-white text-lg px-4 py-1 rounded-full'>Buy Now</NavLink>

          </div>
          <div className="w-72 flex flex-col justify-center items-center border bg-gray-200 rounded-2xl">
            <img className="w-20" src={phones} alt="" />
            <h2 className="text-xl font-semibold" >S21 Ultra </h2>
            <NavLink to="/mobiles" className='bg-black text-white text-lg px-4 py-1 rounded-full'>Buy Now</NavLink>

          </div>
          <div className="w-72 flex flex-col justify-center items-center border bg-gray-200 rounded-2xl">
            <img className="w-20" src={phone} alt="" />
            <h2 className="text-xl font-semibold" >S21 Ultra </h2>
            <NavLink to="/mobiles" className='bg-black text-white text-lg px-4 py-1 rounded-full'>Buy Now</NavLink>

          </div>
        </div>
      </div>


      <div className='w-8/12 ml-72 '>
        <h2 className="flex justify-center items-center text-5xl font-semibold my-12">Mobile</h2>

        <div className='border border-xl rounded-xl'>
          <Swiper
            cssMode={true}
            effect={"fade"}
            navigation={true}
            autoplay={{
              delay: 500,
              disableOnInteraction: false,
            }}

            pagination={{
              clickable: true,
            }}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            className="mySwiper "
          >


            {data?.map((e, index) => (

              <SwiperSlide>
                <div className='flex justify-center flex-col items-center '>

                  <img className="h-96" src={e.img} alt="" />
                  <h2 className="text-3xl font-semibold">{e.Dname}</h2>
                  <NavLink to="/mobiles" className='bg-black text-white text-lg px-4 py-1 rounded-full my-12'>Buy Now</NavLink>

                </div>

              </SwiperSlide>

            ))}

            {/* <SwiperSlide>
              Slide 2
            </SwiperSlide>
            <SwiperSlide>
              Slide 3
            </SwiperSlide>
            <SwiperSlide>
              Slide 4
            </SwiperSlide> */}

          </Swiper>
        </div>
      </div>

            <div className='bg-black text-white text-3xl font-bold text-center pt-12'>SAMSUNG</div>
      <div className='bg-black text-white flex justify-around h-48 pb-12'>
        {/* <h2>hello there</h2> */}
        <div className='flex flex-col justify-around'>
          <h2 className='text-gray-300 text-lg font-bold'>Where To Buy</h2>
          <p>See Authorized Retailers</p>
        </div>
        <div className='flex flex-col justify-around'>
          <h2 className='text-gray-300 text-lg font-bold'>Samsung Rewards</h2>
          <p>Join Now</p>
          <p>Learn More</p>
          <p>Manage Account</p>
        </div>
        <div className='flex flex-col justify-around'>
          <h2 className='text-gray-300 text-lg font-bold'>Product Details</h2>
          <NavLink to="/data">Register Your Product</NavLink>
        </div>
        <div className='flex flex-col justify-around'>
          <h2 className='text-gray-300 text-lg font-bold'>News And Info</h2>
          <p>Press Releases</p>
          <p>About Samsung</p>
          <p>Product support</p>
        </div>

      <hr />
      </div>
      <div className='bg-black text-white pl-20'>
        <p>Copyright ⓒ 1995-2022 SAMSUNG All Rights reserved.</p>
        <p>Please dispose of e-waste and plastic waste responsibly.</p>

      </div>
      
      <div className='bg-black text-white pl-20 pt-12'>
        <p>For more information or e-waste pick up, please call 1800 40 SAMSUNG (7267864) or 1800 5 SAMSUNG (7267864) or click here for more details.</p>
        <p>Please dispose of e-waste and plastic waste responsibly.</p>

      </div>

    </div>

  )
}

export default Home
