import React from "react";
import "./Header.css";
import logo from "../images/logo.svg";
import nav from "../images/icon-hamburger.svg";

function Header() {
    function navBar() {
        const navImg = document.getElementsByClassName("nav-btn")[0];
        const right = document.getElementsByClassName("right-header")[0];
        if (right.style.visibility === "hidden") {
            right.style.visibility = "visible";
        } else {
            right.style.visibility = "hidden";
            navImg.style.visibility = "visible";
        }
    }

    React.useEffect(() => {
        const navImg = document.getElementsByClassName("nav-btn")[0];
        const right = document.getElementsByClassName("right-header")[0];
        if (window.innerWidth < 1200) {
            navImg.style.visibility = "visible";
            right.style.visibility = "hidden";
        } else {
            right.style.visibility = "visible";
            navImg.style.visibility = "hidden";
        }
        
        function responsiveNav() {
            if (window.innerWidth < 1200) {
                navImg.style.visibility = "visible"; 
            } else {
                right.style.visibility = "visible";
                navImg.style.visibility = "hidden";
            }
        };

        window.addEventListener('resize', responsiveNav);
        
        const header = document.querySelector('.header');

        window.addEventListener('scroll', () => {
            let y = 0 + (window.scrollY || window.pageYOffset) / 1000;
            header.style.background = `rgba(0,0,0,${y})`;
        });
    });

    return (
        <>
            <nav className="header">
                <div className="left-header">
                <img src={logo} className="logo" alt="logo"/>
                </div>
                <div className="right-header">
                    <ul className="header-menus">
                        <li>
                            <button className="menu">ABOUT</button>
                        </li>
                        <li>
                            <button className="menu">CAREERS</button>
                        </li>
                        <li>
                            <button className="menu">EVENTS</button>
                        </li>
                        <li>
                            <button className="menu">PRODUCTS</button>
                        </li>
                        <li>
                            <button className="menu">SUPPORT</button>
                        </li>
                    </ul>
                </div>
            </nav><img src={nav} className="nav-btn" alt="nav" onClick={navBar}/>
        </>
    );
}

export default Header;