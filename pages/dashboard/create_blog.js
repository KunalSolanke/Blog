import React from 'react'
import dynamic from 'next/dynamic'


const Page= dynamic(()=>import("../../views/CreateBlog"),{
  ssr:false
})
function CreateBlog() {
  return (
   <Page />
  )
}

export default CreateBlog
