import React from 'react'

const Page = () => {
  return (
    <div className="flex h-screen items-center justify-center"> 

    <div className="relative z-10 bg-neutral-300 h-40 w-40 flex items-center justify-center p-1 rounded-lg overflow-hidden">
      <div className="bg-white relative z-20 h-full w-full rounded-[4px]"></div>
      <div className="[background-image:conic-gradient(at_center,transparent,theme(colors.blue.500),transparent_80%)] animate-spin scale-150 absolute inset-0 h-full w-full"></div>
    </div>

    </div>
   
  )
}

export default Page