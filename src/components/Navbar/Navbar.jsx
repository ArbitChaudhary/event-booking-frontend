// // import React, { useState } from 'react';

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const toggleMenu = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   return (
// //     <nav className="navbar">
// //       <div className="navbar-brand">Logo</div>
// //       <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
// //         <div className="navbar-start">
// //           <a className="navbar-item" href="#">Home</a>
// //           <div className="navbar-item has-dropdown is-hoverable">
// //             <a className="navbar-link" href="#">
// //               Services
// //             </a>
// //             <div className="navbar-dropdown">
// //               <a className="navbar-item" href="#">Service 1</a>
// //               <a className="navbar-item" href="#">Service 2</a>
// //               <a className="navbar-item" href="#">Service 3</a>
// //             </div>
// //           </div>
// //           <a className="navbar-item" href="#">About</a>
// //         </div>
// //       </div>
// //       <div className="navbar-end">
// //         <div className="navbar-item">
// //           <button className="navbar-burger" onClick={toggleMenu}>
// //             <span>This</span>
// //             <span>That</span>
// //             <span></span>
// //           </button>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;
//  import React from 'react'
// import "./navbar.css"
// import {CgChevronDown,CgSearch} from 'react-icons/cg'
// import { Link } from 'react-router-dom'
// import { useState, useEffect, useRef } from 'react'
// import Dropdown from './Dropdown'
// import HelpDrop from "./HelpDrop"
// // // import {}

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
// const toggle = () => setIsOpen(!isOpen);

//   const [dropdown, setDropdown] = useState(false)
//   const [helpDrop, setHelpDrop] = useState(false)
//   const handleDrop1 = () =>{
//     setDropdown( dropdown? false : true)
//   }
//   const handleHelp=()=>{
//     setHelpDrop(helpDrop ? false: true )
//   }
//   const [isopen, setIsopen] = useState(false)
//   const dropRef = useRef(false)

//   useEffect (()=>{
//     const handleOutsideClick=(e)=>{
//       if (dropRef.current && !dropRef.current.contains(e.target)){
//         setIsopen(false)
//       }
//     }
//     document.addEventListener('mousedown', handleOutsideClick)

//     return ()=>{
//       document.removeEventListener('mousedown', handleOutsideClick)
//     }
//   })
//   const handleMenuToggle = () => {
//     setIsopen(!isOpen);
//   };
//   return (
//     <div>
//       <div className='Navbar'>
//         <img src="assets/Funtastic-Events-Logo.png" alt="" className='logo'/>
//         <div className="search-icon">
//         <input type="text" className='nav-search' placeholder='Search...'/>
//         <CgSearch className="nav-search-icon"/>
//         </div>
//         <div className="menuList">
//           <Link to='/' className='link'> <li>Home</li></Link>
//           <Link to='/movies' className='link'> <li>movies</li></Link>
//           <Link to="/event" className='link'><li>events</li></Link>
//           <Link to="sports" className='link'><li>sports</li></Link>
//           <li onClick={handleDrop1} ref={dropRef}> organize <CgChevronDown /> 
//           { dropdown && <Dropdown /> }
//           </li> 
//            <div className='al' onClick={toggle}>
//             <li onClick={toggle}>contact organizer</li>
//              <li>my tickets</li>
//              <li>help section</li>
//          </div> 

//          <li onClick={handleHelp}>Help <CgChevronDown /> 
//          {helpDrop && <HelpDrop /> } </li>
//           <Link to='signin' className='link'> <li className='nav-login'>login</li></Link>
//           <Link to='signup' className='link'> <li className='nav-login'>signup</li></Link>
//         </div>
//       </div>
//     </div>
//   )
// } 


import React from 'react';
import "./navbar.css";
import {CgChevronDown,CgSearch, CgMenu} from 'react-icons/cg';
import { CSSTransition } from 'react-transition-group';
import { useState, useEffect } from 'react';
import {RxCrossCircled} from 'react-icons/rx'

const Navbar = () => {
  const[menubar, setMenubar] =useState(false)
  const toggleMenu = () => {
    setMenubar(!menubar)
  }
  return (
    <nav className="header-main">
      <div className="logo">
      <a href="/"> <img src="assets/applogo.png" alt="Logo" className="logo-image" />
      </a>
      </div>

      <div className="search-icon">
 <input type="text" className='nav-search' placeholder='Search...'/>
 <CgSearch className="nav-search-icon"/>
</div>

      <ul className={ menubar ? "header-nav-list active" : 'header-nav-list'} onClick={toggleMenu} >
        <li className="header-nav-item">
          <a href="/event" className="header-link" data-spec="consumer-header-event-link">
            Events
          </a>
        </li>
        
        <li className="header-nav-item">
        <a href="/sports" className="header-link" data-spec="consumer-header-event-link">
            Sports
          </a>
        </li>
        <li className="header-nav-item">
          <a href="/movies" className="header-link" data-spec="consumer-header-directory-link">
            Movies
          </a>
        </li>
        <li className="header-nav-item">
          <a href="/create" className="header-link" data-spec="consumer-header-discovery-link">
            Create Events
          </a>
        </li>
        <li className="header-nav-item">
          <a href="/event-checkout" className="header-link" data-spec="consumer-header-discovery-link">
            myTickets
          </a>
        </li>
        <li className="header-nav-item">
          <a href="/signin" className="header-link" data-spec="consumer-header-discovery-link">
            Login
          </a>
        </li>
        <li className="header-nav-item">
          <a href="/signup" className="header-link" data-spec="consumer-header-discovery-link">
            Sign Up
          </a>
        </li>
      </ul>
      <CgMenu className='menu-bar active' onClick={toggleMenu}/>
    </nav>

  );
};

export default Navbar;
