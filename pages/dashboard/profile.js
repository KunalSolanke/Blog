import React from 'react'
import dynamic from 'next/dynamic'


const Page= dynamic(()=>import("../../views/Profile"),{
  ssr:false
})
function Profile() {
  return (
   <Page />
  )
}

export default Profile
