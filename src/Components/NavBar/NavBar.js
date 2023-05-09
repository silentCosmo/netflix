import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"

function NavBar() {
  return (
    <div className='navbar'>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="NetFlix Logo" />
      <div className='items-left'>
        <ul>
          <Link to = "/" className="us"><li>Home</li></Link>
          <Link to = "/tv-shows" className='us'><li>TV Shows</li></Link>
          <Link to = "/movies" className="us"><li>Movies</li></Link>
          <Link to = "/recently-added" className="us"><li>Recently Added</li></Link>
          <Link to = "/my-list" className="us"><li>My List</li></Link>
        </ul>
      </div>
      {/* Center Space */}
      <div className="items-right">
        
        {/* Search Toggle */}
        <ul>
        <li> <Link to= "/search" className='us'> <i class="fa-solid fa-magnifying-glass"></i> </Link></li>
        <li>KIDS</li>
        <li>DVD</li>
        <li>
          <span className='notification'> 
          <i class="fa-solid fa-bell"></i>
          <span className="badge">3</span></span>
        </li>
        </ul>
      </div>


      <img className='avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
      {/* Menu Icon */}
      {/* <div className="menu">
        <i class="fa-sharp fa-solid fa-bars fa-xl"></i>
      </div> */}
    </div>
  )
}

export default NavBar