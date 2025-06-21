import '../collection.css';
import React from "react";
import searchSvg from '../assets/images/search.svg';
import logoSvg from '../assets/images/logo.svg';
import shoppingSvg from '../assets/images/shopping.svg';
import userSvg from '../assets/images/user.svg';
import { menuOptions } from "../data/headerLinks";


const TopHeader = () => {
    return (
        <div className=" ">
            <div className="top-section d-flex justify-content-between border-bottom">
                <img src={searchSvg} />
                <img src={logoSvg} />
                <div className="d-flex justify-content-between"> 
                    <p className="mb-0">
                        <img src={userSvg}  className="me-2"/>
                        Account
                    </p>
                    <p className="ps-3 mb-0">
                        <img src={shoppingSvg} className="me-2"/>
                        Shopping
                    </p>
                </div>
            </div>
            <Menu />
        </div>
    );
}

const Menu = () => {
    return (
        <div className="menu d-flex">
            <ul className="d-flex list-unstyled m-0 p-0 flex-fill  justify-content-between">
                {
                    menuOptions.map((option, index) => (
                        <li key={index} className="me-3">
                            <a href="#" className="text-decordation-na fs-4 text-dark">{option}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default TopHeader;