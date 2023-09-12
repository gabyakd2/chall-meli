import React from 'react'

function DetailLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='mx-auto max-w-screen-xl'>
      {children}
    </div>
  )
}

export default DetailLayout