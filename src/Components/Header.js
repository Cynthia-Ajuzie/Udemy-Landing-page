import React, {Component} from "react";
import Logo from './images/Logo.png'
import Categories from "./images/Categories.svg"
import Search from "./images/Search.png"
import Shopping from "./images/Shopping.svg"
import './Styles/Header.css'


class Header extends Component{
    render() {
        return (

                <header className="App-header">
                        <img src={Logo} className="App-logo" alt="logo.png" />

                    <a className="nav-bar">
                            <img src={Categories}
                             className="App-Cat" 
                             alt="Categories.svg"
                            /> 
                         <span className="cat-text">Categories</span>
                    </a>

                    <input type="text" className="input" placeholder="search for anything" />
                    
                    <div className="search-icon-div">
                        <img src={Search} alt="Search.png" className="search-icon"/>
                    </div>


                    <a href="#" className="for-business">
                        Udemy for Business
                    </a>
                    <a href="#" className="teach-udemy">
                        Teach on Udemy
                    </a>

                    <img src={Shopping} className="App-shopping" alt="Shopping.svg" />

                    <button className="Button1">
                        <p>Log In</p>                    
                    </button>

                    <button className="Button2">
                        <p>Sign Up</p>
                    </button>
                </header>

        )
    }

}
export default Header;