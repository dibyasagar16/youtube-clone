import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({ setSidebar }) => {

    //Error handling for the Navbar component (onClick even handler for the menu icon)

    const handleMenuClick = () => {
        try {
            setSidebar(prev => !prev);
        } catch (error) {
            console.error('Error toggling sidebar', error)
        }
    };

    return (
        <nav className="flex-div">
            <div className="nav-left flex-div">
                <img
                    className='menu-icon'
                    src={assets.menu_icon}
                    alt=""
                    onClick={handleMenuClick}
                />
                <Link to='/'>
                    <div className='logo-div'>
                        <img
                            src={assets.logo_icon}
                            alt=""
                        />
                        <p>YouTube Clone</p>
                    </div>
                </Link>
            </div>

            <div className="nav-middle flex-div">
                <div className='search-box flex-div'>
                    <input
                        type="text"
                        placeholder='Search'
                    />
                    <img
                        src={assets.search_icon}
                        alt=""
                    />
                </div>

            </div>

            <div className="nav-right flex-div">
                <img
                    src={assets.upload_icon}
                    alt=""
                />
                <img
                    src={assets.more_icon}
                    alt=""
                />
                <img
                    src={assets.notification_icon}
                    alt=""
                />
                <img
                    src={assets.jack_icon}
                    alt=""
                    className='user-icon'
                />
            </div>

        </nav>
    )
}

export default Navbar