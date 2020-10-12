import React from 'react'
import dynamic from 'next/dynamic'


const Page= dynamic(()=>import("../../views/Notifications"),{
  ssr:false
})
function Notifications() {
  return (
   <Page />
  )
}

export default Notifications
