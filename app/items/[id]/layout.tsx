import React from 'react'

function DetailLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='mx-40 px-20 pt-10 max-w-screen-xl bg-white'>
      {children}
    </div>
  )
}

export default DetailLayout