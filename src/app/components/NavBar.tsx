import React from 'react'
import ButtonLink from './Button'

const NavBar = () => {
  const routes=[
    {text:"Home",href:"/pages/home"},
    {text:"Login",href:"/pages/login"},
    {text:"Contact",href:"/pages/contact"},
    {text:"Services",href:"/pages/services"},
    {text:"Users",href:"/pages/users"},
    {text:"Posts",href:"/pages/reactQuery/post"}
  ]
  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-between bg-gray-800 p-4 shadow-md text-white">
      <h1 className="text-2xl font-bold text-blue-400">My Web</h1>
      <div className="flex space-x-4">
        {routes.map((route, index) =>(
        <ButtonLink key={index} text={route.text} href={route.href}></ButtonLink>))}
      </div>
    </div>
  )
}

export default NavBar
