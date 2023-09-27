import React from 'react'

const Header = ({children}) => {
  return (
      <div className='bg-gray-800 flex items-center py-10'>
          <div className="max-w-md mx-auto w-full">
              <h1 className='text-blue-600 text-center text-4xl font-bold mb-5'>Search Awesome Photos</h1>
              {children}
          </div>
    </div>
  )
}

export default Header