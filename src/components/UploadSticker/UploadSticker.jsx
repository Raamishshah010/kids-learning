import React, { useState } from 'react'
import { Link } from 'react-router-dom';



import {
    FiGrid,
    FiMusic,
    FiImage,
    FiAlignJustify,
    FiPower,
    FiArrowLeft,
    
} from "react-icons/fi";
import { Dropdown } from 'react-bootstrap';


import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["JPG", "PNG", "GIF"];

const UploadSticker = () => {

    const [file, setFile] = useState(null);


    const handleChange = (file) => {
        setFile(file);
    };



    const [style, setStyle] = useState("sidebar")

    const toggleMenu = () => {
        setStyle('showMenu');
        console.log(file);
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

                    <h5 className='mb-5'>Add New Sticker</h5>

                    <div className="addMusicContainer">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <FileUploader handleChange={handleChange} name="file" types={fileTypes} />

                            </div>
                            
                            <div className="col-sm-12 col-md-12 col-lg-12 mt-2">
                                <button className="btn btn-custom">Upload Sticker</button>

                            </div>



                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default UploadSticker