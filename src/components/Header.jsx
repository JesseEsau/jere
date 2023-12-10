import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Lion from "../assets/lion.png";

export const Header = () => {

  const [darkMode, setDarkMode] = useState(false);
  const [hidden, setHidden] = useState(true);

  const activeClass = "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500";
  const inActiveClass = "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";

  

  useEffect(() => {
    if(darkMode){
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

  }, [darkMode]);

  const sun = <svg aria-hidden="true" data-toggle-icon="sun" className="w-6 h-6 text-white rounded-md m-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>;
  const moon = <svg aria-hidden="true" data-toggle-icon="moon" className="w-6 h-6 rounded-md m-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>;


    return (
        
          <nav className="bg-gray-200 border-gray-200 dark:bg-gray-900 shadow-md shadow-gray-300 dark:shadow-gray-700 sticky top-0 left-0 right-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              
              <Link to="/" className="flex items-center">
                  <img src={Lion} className="h-8 mr-3" alt="Flowbite Logo" />
                  <span className="self-center text-2xl font-bold whitespace-nowrap text-green-800 dark:text-yellow-300">Jere </span>
              </Link>

              <div>
                <button onClick={() => setDarkMode(!darkMode)} className="w-10 h-10  hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg" >
                    { darkMode ? sun : moon}
                </button>
                <button onClick={() => setHidden(!hidden)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
              </div>
              <div className={`${hidden ? "hidden" : "" } w-full md:block md:w-auto`} id="navbar-default">
                
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <NavLink onClick={() => setHidden(!hidden)} to="/" className={({isActive}) => isActive ? activeClass : inActiveClass } aria-current="page" end>Home</NavLink>
                  </li>
                  <li>
                    <NavLink onClick={() => setHidden(!hidden)} to="/history" className={({isActive}) => isActive ? activeClass : inActiveClass } >History</NavLink>
                  </li>
                  <li>
                    <NavLink onClick={() => setHidden(!hidden)} to="/location" className={({isActive}) => isActive ? activeClass : inActiveClass } >Location</NavLink>
                  </li>
                  <li>
                    <NavLink onClick={() => setHidden(!hidden)} to="/clans" className={({isActive}) => isActive ? activeClass : inActiveClass } >Clans</NavLink>
                  </li>
                  <li>
                    <NavLink onClick={() => setHidden(!hidden)} to="/kingship" className={({isActive}) => isActive ? activeClass : inActiveClass } >Kingship</NavLink>
                  </li>
                  <li>
                    <NavLink onClick={() => setHidden(!hidden)} to="/associations" className={({isActive}) => isActive ? activeClass : inActiveClass } >Associations</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

        
    )
}
