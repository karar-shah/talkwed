import React from 'react'
import { twMerge } from 'tailwind-merge'

const Container = ({className='',children}:{className?:string,children:React.ReactNode}) => {
  return (
    <div className={twMerge(`max-w-[1280px] mx-auto px-6`,className)}>{children}</div>
  )
}

export default Container