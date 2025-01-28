import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import { assets } from '../../assets/assets'
import { valueConverter } from '../../data';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { api_key } from '../../Utils/Config';

const PlayVideo = () => {

    const { videoId } = useParams();

    const [apiData, setapiData] = useState(null);

    const [channelData, setChannelData] = useState(null);

    const [commentData, setCommentData] = useState([]);

    const fetchVideoData = async () => {
        // Fetchting Video Data.
        const videoDetailsURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${api_key}`
        await fetch(videoDetailsURL)
            .then(res => res.json())
            .then(data => {
                if (data.items && data.items.length > 0) {
                    setapiData(data.items[0]);
                } else {
                    console.error("No video data found.")
                }
            })
            .catch(error => console.error("Error fetching video data:", error));
    }

    const fetchChannelData = async () => {
        // Fetching Channel Details
        const channelDataURL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${api_key}`
        await fetch(channelDataURL)
            .then(res => res.json())
            .then(data => {
                if (data.items && data.items.length > 0) {
                    setChannelData(data.items[0]);
                } else {
                    console.error("No channel data found");
                }
            }).catch((error) => console.error("Error getting channel data", error));

        // Fetching Comments 
        const commentURL = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${api_key}`;
        await fetch(commentURL)
            .then(res => res.json())
            .then(data => setCommentData(data.items))
    }

    useEffect(() => {
        fetchVideoData();
    }, [videoId])

    useEffect(() => {
        if (apiData && apiData.snippet?.channelId) {
            fetchChannelData();
        }
    }, [apiData])

    return (
        <div className='play-video'>
            {/* <video src={assets.video_vid} controls autoPlay muted></video> */}

            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

            <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
            <div className="play-vid-info">
                <p>
                    {apiData ? valueConverter(apiData.statistics.viewCount) : "16K"} views
                    &bull; {""}
                    {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
                </p>
                <div>
                    <span><img src={assets.like_icon} alt="" />{apiData ? valueConverter(apiData.statistics.likeCount) : "155"}</span>
                    <span><img src={assets.dislike_icon} alt="" /></span>
                    <span><img src={assets.share_icon} alt="" />Share</span>
                    <span><img src={assets.save_icon} alt="" />Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={channelData ? channelData.snippet.thumbnails.default.url : ""} alt="" />
                <div>
                    <p>{apiData ? apiData.snippet.channelTitle : "Channel Name"}</p>
                    <span>{channelData ? valueConverter(channelData.statistics.subscriberCount) : "1M"} Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid-description">
                <p>{apiData ? apiData.snippet.description : "Description Here"}</p>
                <p>Subscribe GreateStack to watch more tuitorials on web developements.</p>
                <hr />
                <h4>{apiData ? valueConverter(apiData.statistics.commentCount) : "102"} Comments</h4>

                {commentData.map((item, index) => {
                    return (
                        <div key={index} className="comment">
                            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                            <div>
                                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span></h3>
                                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                                <div className="comment-action">
                                    <img src={assets.like_icon} alt="" /><span>{valueConverter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                    <img src={assets.dislike_icon} alt="" />
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default PlayVideo