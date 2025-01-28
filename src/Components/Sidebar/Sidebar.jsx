import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'


const Sidebar = ({ sidebar, category, setCategory }) => {

    const handleCategoryClick = (newCategory) => {
        try {
            setCategory(newCategory);
        } catch (error) {
            console.error('Error setting category', error)
        }
    }


    return (
        <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
            <div className='sortcut-links'>
                <div className={`side-link ${category === 0 ? "active" : ""}`} onClick={() => handleCategoryClick(0)}>
                    <img src={assets.home_icon} alt="" /><p>Home</p>
                </div>
                <div className={`side-link ${category === 20 ? "active" : ""}`} onClick={() => handleCategoryClick(20)}>
                    <img src={assets.game_icon} alt="" /><p>Gaming</p>
                </div>
                <div className={`side-link ${category === 2 ? "active" : ""}`} onClick={() => handleCategoryClick(2)}>
                    <img src={assets.automobiles_icon} alt="" /><p>Automobiles</p>
                </div>
                <div className={`side-link ${category === 17 ? "active" : ""}`} onClick={() => handleCategoryClick(17)}>
                    <img src={assets.sports_icon} alt="" /><p>Sports</p>
                </div>
                <div className={`side-link ${category === 24 ? "active" : ""}`} onClick={() => handleCategoryClick(24)}>
                    <img src={assets.entertainmaint_icon} alt="" /><p>Entertainmaint</p>
                </div>
                <div className={`side-link ${category === 28 ? "active" : ""}`} onClick={() => handleCategoryClick(28)}>
                    <img src={assets.tech_icon} alt="" /><p>Technology</p>
                </div>
                <div className={`side-link ${category === 10 ? "active" : ""}`} onClick={() => handleCategoryClick(10)}>
                    <img src={assets.music_icon} alt="" /><p>Music</p>
                </div>
                <div className={`side-link ${category === 22 ? "active" : ""}`} onClick={() => handleCategoryClick(22)}>
                    <img src={assets.blogs_icon} alt="" /><p>Blogs</p>
                </div>
                <div className={`side-link ${category === 25 ? "active" : ""}`} onClick={() => handleCategoryClick(25)}>
                    <img src={assets.news_icon} alt="" /><p>News</p>
                </div>
                <hr />
            </div>
            <div className="subscribed-list">
                <h3>Subscribed</h3>
                <div className="side-link">
                    <img src={assets.jack_icon} alt="" /><p>Pewdipie</p>
                </div>
                <div className="side-link">
                    <img src={assets.simon_icon} alt="" /><p>Mr. Beast</p>
                </div>
                <div className="side-link">
                    <img src={assets.tom_icon} alt="" /><p>Justin Bieber</p>
                </div>
                <div className="side-link">
                    <img src={assets.megan_icon} alt="" /><p>5 mins Craft</p>
                </div>
                <div className="side-link">
                    <img src={assets.cameron_icon} alt="" /><p>Nas Daily</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar