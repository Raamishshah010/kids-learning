import React, { useState } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

import userCardImg from './assets/userCardImg.svg';
import musicCardImg from './assets/musicCardImg.svg';
import stickerCardImg from './assets/stickerCardImg.svg';
import piano from './assets/piano.mp3';

import {
    FiGrid,
    FiMusic,
    FiImage,
    FiAlignJustify,
    FiPower,
    FiArrowLeft
} from "react-icons/fi";
import { Dropdown, Table } from 'react-bootstrap';


const Dashboard = () => {
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
                    <FiArrowLeft/>
                </div>
                <div className="sidebarLogo">
                    <img src="/Logo.svg" width="100" height="100px" alt="" />
                </div>

                <div className="sidebarLinks">

                    <div className="sidebarLink active">
                        <Link className="sidebarLinkText active " to="/dashboard"><span className="sidebar-icon"><FiGrid /></span> Dashboard</Link>
                    </div>

                    <div className="sidebarLink">
                        <Link className="sidebarLinkText" to="/music"><span className="sidebar-icon"><FiMusic /></span> My Music</Link>
                    </div>

                    <div className="sidebarLink">
                        <Link className="sidebarLinkText" to="/sticker"><span className="sidebar-icon"><FiImage /></span> Stickers</Link>
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
                    <h5 className='mb-5'>Hello Admin,</h5>
                    <div className=" row topCards">

                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="topCard">
                                <div className="topCardImg">
                                    <img src={userCardImg} alt="" />
                                </div>
                                <div className="topCardContent">
                                    <h5>5000+</h5>
                                    <p>Users</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="topCard">
                                <div className="topCardImg">
                                    <img src={musicCardImg} alt="" />
                                </div>
                                <div className="topCardContent">
                                    <h5>1,200+</h5>
                                    <p>Musics</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="topCard">
                                <div className="topCardImg">
                                    <img src={stickerCardImg} alt="" />
                                </div>
                                <div className="topCardContent">
                                    <h5>400+</h5>
                                    <p>Stickers</p>
                                </div>
                            </div>
                        </div>


                    </div>

                    {/* RECENT MUSIC TABLE */}
                    <div className="recentMusic">
                        <h5>Recently upload music</h5>

                        <div className="recentMusicTable">
                            <Table className='dashboardTable' responsive>
                                <thead>
                                    <tr>
                                        <th>Music Image</th>
                                        <th>Music Name</th>

                                        <th>Music Audio</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td><img src="/Logo.svg" width="40px" height="40px" alt="" /></td>
                                        <td>Rhythm and Blues Music.</td>

                                        <td>
                                            <audio controls>
                                                <source src={piano} type="audio/ogg" />
                                                <source src={piano} type="audio/mpeg" />
                                                Your browser does not support the audio element.
                                            </audio>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><img src="/Logo.svg" width="40px" height="40px" alt="" /></td>
                                        <td>Rhythm and Blues Music.</td>

                                        <td>
                                            <audio controls>
                                                <source src={piano} type="audio/ogg" />
                                                <source src={piano} type="audio/mpeg" />
                                                Your browser does not support the audio element.
                                            </audio>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><img src="/Logo.svg" width="40px" height="40px" alt="" /></td>
                                        <td>Rhythm and Blues Music.</td>

                                        <td>
                                            <audio controls>
                                                <source src={piano} type="audio/ogg" />
                                                <source src={piano} type="audio/mpeg" />
                                                Your browser does not support the audio element.
                                            </audio>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><img src="/Logo.svg" width="40px" height="40px" alt="" /></td>
                                        <td>Rhythm and Blues Music.</td>

                                        <td>
                                            <audio controls>
                                                <source src={piano} type="audio/ogg" />
                                                <source src={piano} type="audio/mpeg" />
                                                Your browser does not support the audio element.
                                            </audio>
                                        </td>
                                    </tr>

                                </tbody>
                            </Table>
                        </div>

                    </div>

                    {/* RECENT Sticker TABLE AND USERS*/}


                    <div className="row">


                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="recentMusic">
                                <h5>Recently Stickers</h5>

                                <div className="recentMusicTable">
                                    
                                </div>

                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="recentMusic">
                                <h5>Recently Users</h5>

                                <div className="recentMusicTable">
                                    
                                </div>

                            </div>
                        </div>


                    </div>

                </div>


            </div>

        </div>
    )
}

export default Dashboard