
import React from 'react'

const Section = () => {
  return (
    <div className='flex flex-col gap-5 mt-20 ml-20 md:flex-col md:mx-[20%] xl:flex-row   xl:justify-center  '>
    <div className='w-full bg-[#64826c] px-6 rounded-md pb-5 xl:w-2/6'>
      <img className='h-[100px] rounded-full mt-5'
      src='/public/girl.jpg' alt='girl' />
      <h1 className='text-xl py-3'>Say Hello</h1>
      <p>Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt
     ut labore et dolore magna aliqua.</p>
    </div>
  <form className='w-full xl:1/2'>
  <div className='flex gap-4'>
  <div className='flex flex-col mt-5 '>
  <label>First Name</label>
  <input className='outline-none border-b-2 border-b-[#5a7d62]' type='text' placeholder='Enter Your First Name' />
  </div>
 
    <div className='flex flex-col mt-5 '>
    <label>Last Name</label>
    <input className='outline-none border-b-2 border-b-[#5a7d62]' type='text' placeholder='Enter Your Last Name' />
    </div>
   
  </div>
  <div className='flex gap-4'>
  <div className='flex flex-col mt-5 '>
  <label>Email</label>
  <input className='outline-none border-b-2 border-b-[#5a7d62]' type='text' placeholder='Enter a Valid Email' />
  </div>
 
    <div className='flex flex-col mt-5 '>
    <label>Phone Number</label>
    <input className='outline-none border-b-2 border-b-[#5a7d62]' type='text' placeholder='Enter Your Phonr(+25079200127)' />
    </div>
   
  </div>
  <div className='flex flex-col mt-5'>
  <label>Message</label>
  <textarea className='outline-none border-b-2 border-b-[#5a7d62] w-[500px] '  placeholder='message' />
  </div>
   <button className='bg-[#5a7d62] hover:bg-[#9cc495] w-[500px] mt-8 py-2   text-white rounded-md'>SUBMIT</button>
  </form>
    </div>

  )
}

export default Section