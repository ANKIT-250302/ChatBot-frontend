import React from 'react'

const Layout = ({main}) => {
  return (
    <div className='p-2 md:p-4 flex gap-4 h-screen w-screen bg-[#F4F9FD]'>
        <div className='w-48 p-4 rounded-3xl h-full bg-white drop-shadow-sm'>
            NavBar
        </div>
        <div className='w-full flex flex-col gap-4'>
            <div className='flex justify-between'>
                <div className='bg-white drop-shadow-sm py-2 px-2 w-[20em] rounded-xl'>Search</div>
                <div className='bg-white drop-shadow-sm py-2 px-2 w-[20em] rounded-xl'>profile</div>
            </div>
            <div className='flex w-full h-full border'>
                content
            </div>
        </div>
    </div>
  )
}

export default Layout
