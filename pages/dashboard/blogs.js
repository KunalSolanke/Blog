import React from 'react'
import dynamic from 'next/dynamic'


const Page= dynamic(()=>import("../../views/Blogs"),{
  ssr:false
})
function Blogs() {
  return (
   <Page />
  )
}

export default Blogs
