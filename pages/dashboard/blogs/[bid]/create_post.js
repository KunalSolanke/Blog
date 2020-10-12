import React from 'react'
import dynamic from 'next/dynamic'


const Page= dynamic(()=>import("../../../../views/CreatePost"),{
  ssr:false
})
function CreatePost() {
  return (
   <Page />
  )
}

export default CreatePost
