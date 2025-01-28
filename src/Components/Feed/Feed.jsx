import React, { useEffect, useState } from "react";
import "./Feed.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { valueConverter } from "../../data";
import moment from 'moment'
import { api_key } from "../../Utils/Config";


const Feed = ({ category }) => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const videoLists_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=IN&videoCategoryId=${category}&key=${api_key}`;

        try {
            const response = await fetch(videoLists_URL);
            if (!response.ok) {
                throw new Error("Something went wrong");
            }
            const data = await response.json();
            setData(data.items);
        } catch (error) {
            console.error("Error fetching data", error);
        }

    };

    useEffect(() => {
        fetchData();
    }, [category]);

    return (
        <div className="feed">
            {data.map((item, index) => {
                return (
                    <Link
                        to={`video/${item.snippet.categoryId}/${item.id}`}
                        className="card"
                        key={index}
                    >
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <h2>{item.snippet.title}</h2>
                        <h3>{item.snippet.channelTitle}</h3>
                        <p>{valueConverter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()} </p>
                    </Link>
                );
            })}
        </div>
    );
};

export default Feed;






