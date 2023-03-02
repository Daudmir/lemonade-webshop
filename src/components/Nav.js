import { Link, Outlet } from 'react-router-dom'
import React from 'react'

function Nav() {
  return (
    <>
    <Link to="/ProductPage" >ProductPage</Link>
    <Outlet />
    </>
  )
}

export default Nav