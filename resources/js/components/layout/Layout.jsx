import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom';


const Layout = ({children}) => {
  return (
    <div>
<Header/>
<Sidebar />
{children}
    </div>
  )
}

export default Layout
