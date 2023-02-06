import React from 'react'
const Layout = (data) => {
    console.log(data,"polo");
  return (
    <div>{data.children}</div>
  )
}

export default Layout