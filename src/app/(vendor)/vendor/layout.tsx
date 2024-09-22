import VendorHeader from '@/common/VendorHeader'
import VendorHeader2 from '@/common/VendorHeader2'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <VendorHeader />
      <VendorHeader2 />
      {children}
    </>
  )
}

export default layout