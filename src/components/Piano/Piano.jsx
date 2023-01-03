import React, { useState } from 'react'
import { Link } from 'react-router-dom';



import {
    FiGrid,
    FiMusic,
    FiImage,
    FiAlignJustify,
    FiPower,
    FiArrowLeft,
    FiEdit,
    FiTrash2,
} from "react-icons/fi";
import { Dropdown } from 'react-bootstrap';
const Piano = () => {

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

                    <div className="sidebarLink active">
                        <Link className="sidebarLinkText active" to="/music"><span className="sidebar-icon"><FiMusic /></span> My Music</Link>
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

                    <h5 className='mb-5'>My Musics</h5>
                    <div className="uploadBtn">
                        <Link className="uploadLink" to="/upload-music">+ Upload New Music</Link>
                    </div>

                    <div className="tab_Links">
                        <Link className="tab_link " to='/music'>Songs</Link>
                        <Link className="tab_link active" to='/piano'>Piano Lessons</Link>
                    </div>


                    <div className="row">

                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="musicCard">
                                <div className="musicCardImg">
                                    <img src="https://images.unsplash.com/photo-1514119412350-e174d90d280e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGlhbm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                </div>
                                <div className="musicCardContent">
                                    <div className="titleFlex">
                                        <h5>Channa Mereya - Lyric Video | Ae Dil Hai Mushkil |</h5>
                                        <Dropdown>
                                            <Dropdown.Toggle className='dropDownBtn' id="dropdown-basic">
                                                ...
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item > <span className="musicCardIcon"><FiEdit /></span> Edit</Dropdown.Item>
                                                <Dropdown.Item ><span className="musicCardIcon"><FiTrash2 /></span> Delete</Dropdown.Item>

                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <p>1:23 mins</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="musicCard">
                                <div className="musicCardImg">
                                    <img src="https://images.unsplash.com/photo-1514119412350-e174d90d280e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGlhbm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                </div>
                                <div className="musicCardContent">
                                    <div className="titleFlex">
                                        <h5>Channa Mereya - Lyric Video | Ae Dil Hai Mushkil |</h5>
                                        <Dropdown>
                                            <Dropdown.Toggle className='dropDownBtn' id="dropdown-basic">
                                                ...
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item > <span className="musicCardIcon"><FiEdit /></span> Edit</Dropdown.Item>
                                                <Dropdown.Item ><span className="musicCardIcon"><FiTrash2 /></span> Delete</Dropdown.Item>

                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <p>1:23 mins</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="musicCard">
                                <div className="musicCardImg">
                                    <img src="https://images.unsplash.com/photo-1514119412350-e174d90d280e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGlhbm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                </div>
                                <div className="musicCardContent">
                                    <div className="titleFlex">
                                        <h5>Channa Mereya - Lyric Video | Ae Dil Hai Mushkil |</h5>
                                        <Dropdown>
                                            <Dropdown.Toggle className='dropDownBtn' id="dropdown-basic">
                                                ...
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item > <span className="musicCardIcon"><FiEdit /></span> Edit</Dropdown.Item>
                                                <Dropdown.Item ><span className="musicCardIcon"><FiTrash2 /></span> Delete</Dropdown.Item>

                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <p>1:23 mins</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="musicCard">
                                <div className="musicCardImg">
                                    <img src="https://images.unsplash.com/photo-1514119412350-e174d90d280e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGlhbm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                </div>
                                <div className="musicCardContent">
                                    <div className="titleFlex">
                                        <h5>Channa Mereya - Lyric Video | Ae Dil Hai Mushkil |</h5>
                                        <Dropdown>
                                            <Dropdown.Toggle className='dropDownBtn' id="dropdown-basic">
                                                ...
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item > <span className="musicCardIcon"><FiEdit /></span> Edit</Dropdown.Item>
                                                <Dropdown.Item ><span className="musicCardIcon"><FiTrash2 /></span> Delete</Dropdown.Item>

                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <p>1:23 mins</p>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>


            </div>

        </div>
    )
}

export default Piano