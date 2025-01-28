import React, { useEffect, useState } from 'react'
import './Recommended.css'
import { assets } from '../../assets/assets'
import { valueConverter } from '../../data'
import { Link } from 'react-router-dom'
import { api_key } from '../../Utils/Config'


const Recommended = ({ categoryId }) => {

    const [apiData, setapiData] = useState([])

    const fetchData = async () => {

        const relatedVideoURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=5&regionCode=IN&videoCategoryId=${categoryId}&key=${api_key}`

        await fetch(relatedVideoURL)
            .then(res => res.json())
            .then(data => setapiData(data.items))
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <div className='recommended'>
            {
                apiData.map((item, index) => {
                    return (
                        <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-vid-list">
                            <img src={item.snippet.thumbnails.medium.url} alt="" />
                            <div className='vid-info'>
                                <h4>{item.snippet.title}</h4>
                                <p>{item.snippet.channelTitle}</p>
                                <p>{valueConverter(item.statistics.viewCount)}</p>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Recommended