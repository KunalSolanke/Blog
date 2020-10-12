
import React from 'react'
import dynamic from 'next/dynamic'


const Page= dynamic(()=>import("../../../../views/BlogDashboardAppearance"),{
  ssr:false
})
function Appearnce() {
  return (
   <Page />
  )
}

export default Appearnce
