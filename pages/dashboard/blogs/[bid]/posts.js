import React from 'react'
import dynamic from 'next/dynamic'


const Page= dynamic(()=>import("../../../../views/DashboardPosts"),{
  ssr:false
})
function Posts() {
  return (
   <Page />
  )
}

export default Posts
