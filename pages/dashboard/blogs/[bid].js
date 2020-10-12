import React from 'react'
import dynamic from 'next/dynamic'


const Page= dynamic(()=>import("../../../views/BlogDashboard"),{
  ssr:false
})
function Blog() {
  return (
   <Page />
  )
}

export default Blog
