import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const navLink = [

        <Link to='/'>Home</Link>,
        <Link to='#home#about'>About</Link>,
        <Link to='#home/#projects'>My Projects</Link>,
        <Link to='#home/#skils'>Skils</Link>,
        <Link to='#home/#contact'>Contact Us</Link>,
    ];


    return (
        <div class="navbar bg-base-content text-warning">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li tabindex="0">

                            {navLink}
                        </li>
                    </ul>
                </div>
                <a class="btn btn-outline ">Imran Ahmed</a>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li tabindex="0">

                        {navLink}
                    </li>

                </ul>
            </div>

        </div>
    );
};

export default NavBar;