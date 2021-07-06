import React from 'react'
import Logo from '../images/logo.png';
import '../index.css';
import {FaBars, FaSearch, FaShoppingCart, FaUserPlus} from "react-icons/fa";
//Install react icons

const Header = () => {
    return (
        <header className="header flex items-center justify-between py-3 xl:mx-20">
            <div className="menu-btn flex">
                <div className="mx-4">
                    <FaBars />
                </div>
                <div>
                    <FaSearch />
                </div>
            </div>

            <div className="logo">
                <div>
                <img src={Logo} alt="Microsoft"/>
                </div>
                <ul>
                    <li className="cursor-pointer  hover:underline">Microsoft 365</li>
                    <li className="cursor-pointer  hover:underline">Office</li>
                    <li className="cursor-pointer  hover:underline">Windows</li>
                    <li className="cursor-pointer  hover:underline">Surface</li>
                    <li className="cursor-pointer  hover:underline">XBOX</li>
                    <li className="cursor-pointer  hover:underline">Deals</li>
                    <li className="cursor-pointer  hover:underline">Deal</li>
                    <li className="cursor-pointer  hover:underline">Support</li>
                </ul>
            </div>

            <div className="cart flex">
                <div>
                     <FaShoppingCart /> 
                </div>
                <div className="mx-4">
                    <FaUserPlus />
                </div>
            </div>
            <div className="sign-in">
                <ul>
                    <li className="cursor-pointer  hover:underline">All Microsoft</li>
                    <li className="cursor-pointer  hover:underline">Search</li>
                    <li className="cursor-pointer  hover:underline">Cart</li>
                    <li className="cursor-pointer  hover:underline">Sign In</li>
                </ul>
            </div>
        </header>
    );
}

export default Header
