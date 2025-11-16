import React from 'react'

const Container = ({children ,className}: {children: React.ReactNode, className?: string}   ) => {
  return (
    <div className={`md:max-w-7xl px-2 mx-auto my-0 lg:p-0 relative w-full md:mx-auto bg-white z-0 ${className} overflow-x-hidden`}>
        
        {children}
        <div className="md:block hidden">
        <div
        className="absolute top-0 z-10 -left-0 w-[0.5px] h-full bg-black/10"
      ></div>

      <div
        className="absolute top-0 z-10 -right-0 w-[0.5px] h-full bg-black/10"
      ></div>
      </div>
      </div>
  )
}

export default Container