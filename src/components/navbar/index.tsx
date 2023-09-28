import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo.jpg'

interface MobileNavProps {
  open: boolean
  setOpen: (open: boolean) => void
}

function MobileNav({ open, setOpen }: MobileNavProps) {
  const location = useLocation()
  return (
    <div
      className={`top-0 left-0 h-screen w-screen bg-white transform fixed z-40 flex flex-col justify-center items-center md:hidden transition-all duration-300 ease-in-out ${
        open
          ? '-translate-x-0'
          : '-translate-x-full transition-transform duration-300 ease-in-out filter drop-shadow-md'
      }`}
    >
      <div className="flex items-center justify-center filter drop-shadow-md h-20">
        <NavLink to="/">
          <img
            src={logo}
            alt="logo"
            className=" h-16 w-16 rounded-full object-cover"
          />
        </NavLink>
      </div>
      <div className="flex flex-col ml-4">
        <NavLink
          to="/blog"
          className={`text-xl font-normal my-4 text-[#142f4d] ${
            location.pathname === '/blog' ? 'border-bottom-2' : ''
          }`}
          onClick={() => setTimeout(() => setOpen(!open), 300)}
        >
          Home
        </NavLink>
        <NavLink
          className={`text-xl font-normal my-4 text-[#142f4d] ${
            location.pathname === '/galeria' ? 'border-bottom-2' : ''
          }`}
          to="/"
          onClick={() => setTimeout(() => setOpen(!open), 300)}
        >
          Galeria
        </NavLink>
        <NavLink
          className={`text-xl font-normal my-4 text-[#142f4d] ${
            location.pathname === '/sobre' ? 'border-bottom-2' : ''
          }`}
          to="/"
          onClick={() => setTimeout(() => setOpen(!open), 300)}
        >
          Sobre
        </NavLink>
      </div>
    </div>
  )
}

export function Navbar() {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <nav className="flex bg-white filter drop-shadow-md px-4 py-4 h-20 items-center max-w-7xl w-full mx-auto top-0 left-1/2 transform -translate-x-1/2 z-50 fixed">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-3/12 flex items-center">
        <NavLink className="text-2xl font-semibold md:mx-8" to="/">
          <img
            src={logo}
            alt="logo"
            className=" h-16 w-16 rounded-full object-cover"
          />
        </NavLink>
      </div>
      <div className="w-9/12 flex justify-end items-center">
        <div
          className="z-50 flex relative hover:cursor-pointer w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open)
          }}
        >
          <span
            className={`h-1 w-full bg-[#167368] rounded-lg transform transition duration-300 ease-in-out ${
              open ? 'rotate-45 translate-y-3.5' : ''
            }`}
          />
          <span
            className={`h-1 w-full bg-[#f20a17] rounded-lg transition-all duration-300 ease-in-out ${
              open ? 'w-0' : 'w-full'
            }`}
          />
          <span
            className={`h-1 w-full bg-[#f6e404] rounded-lg transform transition duration-300 ease-in-out ${
              open ? '-rotate-45 -translate-y-3.5' : ''
            }`}
          />
        </div>

        <div className="hidden md:flex">
          <NavLink
            to="/blog"
            className={`text-[#142f4d] text-lg font-semibold md:mx-8 ${
              location.pathname === '/blog' ? 'border-b-2' : ''
            }`}
          >
            Home
          </NavLink>
          <NavLink
            to="/galeria"
            className={`text-[#142f4d] text-lg font-semibold md:mx-8 ${
              location.pathname === '/galeria' ? 'border-b-2' : ''
            }`}
          >
            Galeria
          </NavLink>
          <NavLink
            to="/sobre"
            className={`text-[#142f4d] text-lg font-semibold md:mx-8 ${
              location.pathname === '/sobre' ? 'border-b-2' : ''
            }`}
          >
            Sobre
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
