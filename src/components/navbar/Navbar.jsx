import React, {useState} from 'react'
import './navbar.css'


function MenuList() {
    return (

        <div className="menu-list">
			<li><a href="https://fb.com/h">Home</a></li>
			<li><a href="https://fb.com/h">Posts</a></li>
			<li><a href="https://fb.com/h">Write</a></li>
			<li><a href="https://fb.com/h">Login</a></li>
			<li><a href="https://fb.com/h">Sign up</a></li>
			<li><a href="https://fb.com/h">Logout</a></li>
		</div>

    )
}

export default function Navbar() {

	const [show, setShow] = useState(false)

    return (
        <div className="nav-wrapper">
			<div className="container">
				<div className="logo"><a href="https://a.com">Robisko</a></div>
				<ul>
					<li><a href="https://fb.com/h">Home</a></li>
					<li><a href="https://fb.com/h">Posts</a></li>
					<li><a href="https://fb.com/h">Write</a></li>
					<li><a href="https://fb.com/h">Login</a></li>
					<li><a href="https://fb.com/h">Sign up</a></li>
					<li><a href="https://fb.com/h">Logout</a></li>
				</ul>
				<div className="menu-bar">
					<i className='bx bx-menu' onClick={() => setShow(currentShow =>  !currentShow)}></i>
				</div>
				{
					show ? <MenuList/> : null	
				}
				
			</div>
		</div>
    )
}