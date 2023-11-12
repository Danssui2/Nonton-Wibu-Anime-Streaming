import React from 'react'

function Card({ img, title, func }) {
  return (
    <div className='flex flex-col gap-4 w-48' onClick={() => func()}>
      <div className='flex justify-center h-64 w-48 items-center'>
        <img src={img} alt="" className='rounded-md h-full w-auto object-cover' />
      </div>
      <h4 className='font-semibold w-48 text-center whitespace-nowrap overflow-hidden'>{title}</h4>
    </div>
  )
}

export default Card