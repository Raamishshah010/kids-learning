import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Sticker.css'


import {
    FiGrid,
    FiMusic,
    FiImage,
    FiAlignJustify,
    FiPower,
    FiArrowLeft,
    
} from "react-icons/fi";
import { Dropdown } from 'react-bootstrap';
const Sticker = () => {

    const [style, setStyle] = useState("sidebar")

    const toggleMenu = () => {
        setStyle('showMenu')
    }

    const handleToggle = () => {
        setStyle('sidebar')
    }

    return (
        <div className="dashboard">
            {/* SIDEBAR */}
            <aside className={style}>
                <div className="toggleIcon" onClick={handleToggle}>
                    <FiArrowLeft />
                </div>
                <div className="sidebarLogo">
                    <img src="/Logo.svg" width="100" height="100px" alt="" />
                </div>

                <div className="sidebarLinks">

                    <div className="sidebarLink">
                        <Link className="sidebarLinkText " to="/dashboard"><span className="sidebar-icon"><FiGrid /></span> Dashboard</Link>
                    </div>

                    <div className="sidebarLink ">
                        <Link className="sidebarLinkText " to="/music"><span className="sidebar-icon"><FiMusic /></span> My Music</Link>
                    </div>

                    <div className="sidebarLink active">
                        <Link className="sidebarLinkText active" to="/sticker"><span className="sidebar-icon"><FiImage /></span> Stickers</Link>
                    </div>


                </div>

            </aside>

            {/* Main Menu */}

            <div className="main">
                <div className="navbar">
                    <div className="menuIcon" onClick={toggleMenu}>
                        <FiAlignJustify />
                    </div>

                    <div className="navbarDropdown">
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                                <img src="/user.png" width="30px" height="30px" alt="" />
                            </Dropdown.Toggle>



                            <Dropdown.Menu>
                                <Dropdown.Item >
                                <Link to="/" className='logoutLink'> <span className="logout_icon"><FiPower /></span> Log out</Link>
                                </Dropdown.Item>


                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>

                <div className="dashboardMain">

                    <h5 className='mb-5'>My Stickers</h5>
                    <div className="uploadBtn">
                        <Link className="uploadLink" to="/upload-sticker">+ Upload New Sticker</Link>
                    </div>

                    <div className="row">
                        
                        <div className="col-sm-12 col-md-6 col-lg-3 mt-5 stickerCard">
                            <img src="https://m.media-amazon.com/images/I/810myVGBf7L._AC_SX466_.jpg" width="200" height="200"alt="" />
                        </div>
                        
                        <div className="col-sm-12 col-md-6 col-lg-3 mt-5 stickerCard">
                            <img src="https://www.stickeryeti.eu/media/cms/stickers.jpg" width="200" height="200"alt="" />
                        </div>
                        
                        <div className="col-sm-12 col-md-6 col-lg-3 mt-5 stickerCard">
                            <img src="https://cdn.shopify.com/s/files/1/0074/1425/1609/products/21723396496_575994669.jpg?v=1610093503" width="200" height="200"alt="" />
                        </div>
                        
                        <div className="col-sm-12 col-md-6 col-lg-3 mt-5 stickerCard">
                            <img src="https://m.media-amazon.com/images/I/810myVGBf7L._AC_SX466_.jpg" width="200" height="200"alt="" />
                        </div>
                        
                        <div className="col-sm-12 col-md-6 col-lg-3 mt-5 stickerCard">
                            <img src="https://m.media-amazon.com/images/I/810myVGBf7L._AC_SX466_.jpg" width="200" height="200"alt="" />
                        </div>
                        
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Sticker