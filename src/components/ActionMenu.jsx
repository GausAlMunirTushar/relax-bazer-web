import React from 'react'

const ActionMenu = ({ menuTitle }) => {
  return (
    <div className='bg-primary rounded-xl px-5 py-6 cursor-pointer text-2xl flex justify-center items-center text-center text-white'>
        <p>{menuTitle}</p>
    </div>
  )
}

export default ActionMenu