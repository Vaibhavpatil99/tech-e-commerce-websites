import React from 'react'
import { useState } from 'react'
import axios from "axios"


function Data() {

  // const [specInput, setSpecInput] = useState([
  //   { specs: "" }

  // ])

  // console.log(specInput)

  const [deviceData, setDeviceData] = useState({
    Dname: "",
    price: "",
    img: ""

  })

  const [selectCategory, setSelectCategory] = useState()
  const [currentSpec, setCurrentSpec] = useState()
  const [specList, setSpecList] = useState([])



  // const specInputAdd = (e) => {
  //   setSpecInput([...specInput, e.target.value
  //   ])
  // }

  // const specInputRemove = (index) => {
  //   const specs = [...specInput];
  //   specs.splice(index, 1);
  //   setSpecInput(specs);
  // }

  // const handleSpecsChange = (e, index) => {
  //   const { name, value } = e.target
  //   const specs = [...specInput];
  //   specs[index][name] = value;
  //   setSpecInput(specs);
  // }



  const handleAddSpec = () => {
    setSpecList([...specList, currentSpec])
    setCurrentSpec("")
  }
  const handleRemoveSpec = (id) => {
    let temp = specList
    temp.splice(id, 1)
    setSpecList([...temp])
  }
  const handleEmptyInput = () => {
    alert("Please fill Specification before Adding")
  }


  const deviceDataChange = (e) => {
    setDeviceData({ ...deviceData, [e.target.name]: e.target.value })
  }
  // console.log(deviceData)

  const selectChange = (e) => {
    setSelectCategory(e.target.value)
  }
  const submit = (e) => {

    // e.preventDefault();
    // console.log(deviceData)
    // console.log({ category: selectCategory, Dinfo: deviceData, spec: specInput })

    // axios.post("http://localhost:3003", { category: selectCategory, Dinfo: deviceData, spec: specInput })
    axios.post("http://localhost:3003", { Dname: deviceData.Dname, price: deviceData.price, img: deviceData.img, category: selectCategory, spec: specList })
      .then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })

  }


  return (
    <>
      {/* <form action="" onSubmit={submit} className='w-full '> */}
      <div className='w-full '>
        <div className=' mx-32 border text-center rounded shadow-xl p-8 bg-gray-300 h-70vh'>
          <div className='flex flex-col justify-around h-80'>
            <div className='flex justify-between'>
              <div className=' flex justify-center items-center'>
                <label className='text-xl' htmlFor="input">Category</label>
                <select name="" id="" className='outline-none border rounded p-1 mx-4' onChange={selectChange} >
                  <option>Select Category</option>
                  <option value="Mobile" >Mobile</option>
                  <option value="Laptop">Laptop</option>
                  <option value="TV">TV</option>
                </select>
              </div>

              <div className=' flex justify-center items-center'>
                <label className='text-xl' htmlFor="input">Device Name</label>
                <input type="text" className='outline-none border rounded p-1 mx-4' name='Dname' value={deviceData.Dname} onChange={deviceDataChange} />
              </div>

            </div>
            <div className='flex justify-between'>


            <div className=' flex justify-center items-center'>
                <label className='text-xl' htmlFor="input">Image URL</label>
                <input type="text" className='outline-none border rounded p-1 mx-4' name='img' value={deviceData.img} onChange={deviceDataChange} />
              </div>



              <div className=' flex justify-center items-center'>
                <label className='text-xl' htmlFor="input">Price</label>
                <input type="number" className='outline-none border rounded p-1 mx-4' name='price' value={deviceData.price} onChange={deviceDataChange} />
              </div>
            </div>
            <div className='flex justify-center'>

              


              <div className=' flex justify-center '>
                <label className='text-xl'>Add Specification</label>
                <div>

                  <input type="text" onChange={(e) => setCurrentSpec(e.target.value)} value={currentSpec} className='outline-none border rounded p-1' />
                  <button type="submit" onClick={!currentSpec ? handleEmptyInput : handleAddSpec} className='border rounded p-1 bg-green-500 text-white' >Add</button>
                  <div className='flex flex-wrap'>
                    {specList.map((spec, e) => <div className='flex bg-white m-1 rounded items-center justify-center'>
                      <p>{spec}</p>
                      <p onClick={() => handleRemoveSpec(e)} className="bg-black text-white rounded px-1 m-1 cursor-pointer">X</p>
                    </div>)}
                  </div>
                </div>
                {/* <div>
                {specInput.map((specData, index) => (
                  <div key={index} className='my-2 '>
                    <div className='flex my-2'>
                      <input type="text" className='outline-none border rounded p-1' name='specs' value={specData.specs} onChange={(e) => (handleSpecsChange(e, index))} />
                      {specInput.length > 1 &&
                        <button type='button' className='border rounded p-1 bg-red-500 text-white' onClick={() => (specInputRemove(index))} >Remove</button>
                      }
                    </div>
                    {specInput.length - 1 === index && specInput.length < 8 &&
                      <button type='button' className='border rounded p-1 bg-green-500 text-white' onClick={specInputAdd}>add More</button>}
                  </div>
                ))}
              </div> */}
              </div>


            </div>
          </div>
            <button type='submit' className='border rounded px-5 py-2 bg-black text-white text-xl ' onClick={submit}>Submit</button>
        </div>
      </div>
    </>



  )
}

export default Data