import React from 'react'
import dynamic from 'next/dynamic'


const Page= dynamic(()=>import("../views/Dashboard"),{
  ssr:false
})
function dashboard() {
  return (
   <Page />
  )
}

export default dashboard
