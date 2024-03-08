import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { CrossButton, LeftArrow } from "../icons/AllIcons";

export const navLinks = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "/projects",
    title: "Projects",
  },
  {
    id: "/skills",
    title: "Skills",
  },
  {
    id: "/contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <main className="bg-slate-400 dark:bg-slate-900 dark:text-white min-h-screen pt-10 ">
      <nav className="w-full flex py-4 justify-between items-center navbar  md:px-20 fixed z-[1] top-0 backdrop-blur-md">
        <NavLink to="/">
          <h1 className="px-3 text-2xl font-semibold font-serif text-white" >KULDEEP</h1>
        </NavLink>

        <ul className="list-none md:flex hidden justify-end items-center flex-1 ">
          {navLinks.map((nav, index) => (
            <li
              key={index}
              className={`font-poppins font-semibold text-xl cursor-pointer text-[16px]  ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} `}

            >
              <NavLink to={nav.id} className={({ isActive }) => isActive ? "text-white transition duration-1000" : " text-yellow-200 border-blue-900 duration-100 hitesh relative"}>
                {nav.title}
              </NavLink>
            </li>
          ))} 
        </ul>


        <div className="md:hidden z-10 bg-indigo-600 mr-1 flex flex-col items-end absolute right-0 top-3 rounded-xl">

          <button className="w-[44px] h-[44px] p-2 transform-all duration-300 cursor-pointer"
            onClick={() => setToggle(!toggle)}>

          {toggle?<CrossButton/>:<LeftArrow/>}
          </button>
          <div
            className={` right-0   overflow-hidden md:hidden ${!toggle ? " customy h-0 w-0 " : " customx w-40 h-72"
              } `}
          >
            <ul className="py-10 px-2 flex justify-end items-start text-xl flex-col gap-5 ">
              {navLinks.map((nav) => (
              <NavLink to={nav.id} className={({ isActive }) => {return `${isActive ? "text-indigo-800" : "text-indigo-500"} w-full`}}>
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer bg-indigo-100 rounded px-2 py-1 overflow-hidden `}

                >
                  
                    {nav.title}
                </li>
              </NavLink>
              ))}
            </ul>
          </div>
        </div>



      </nav>
      <Outlet />
    </main>

  );
};

export default Navbar;