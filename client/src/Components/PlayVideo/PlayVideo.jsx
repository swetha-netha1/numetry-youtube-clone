import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import swetha from '../../assets/swetha2.jpg'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
  return (
    <div className='play-video'>
        <video src={video1} controls autoPlay muted></video>
         <h3>feel the nature..!</h3>
         <div className="play-video-info">
            <p>1532 Views &bull; 2 days ago</p>
            <div>
                <span><img src={like} alt=""/>125</span>
                <span><img src={dislike} alt=""/>2</span>
                <span><img src={share} alt=""/>share</span>
                <span><img src={save} alt=""/>save</span>

            </div>
         </div>
         <hr/>
         <div className="publisher">
            <img src={swetha} alt=""/>
            <div>
                <p>Swetha Netha</p>
                <span>5k Subscribers</span>
            </div>
            <button>Subscribe</button>
         </div>
         <div className="vid-description">
            <p>Channel to refresh yourself</p>
            <p>Please do subscribe..!</p>
            <hr/>
            <h4>13 comments</h4>
            <div className="comment">
                <img src={user_profile} alt=""/>
                <div>
                   <h3>Swetha Pottabathini <span>1 day ago</span></h3>
                   <p>Nature videos can be a perfect way to refresh yourself. These videos showcase serene landscapes, calming sounds, and vibrant wildlife, offering a peaceful escape and mental reset.</p>
                   <div className="comment-action">
                    <img src={like} alt=""/>
                    <span>244</span>
                    <img src={dislike} alt=""/>

                   </div>
                
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt=""/>
                <div>
                   <h3>Swetha Pottabathini <span>1 day ago</span></h3>
                   <p>Nature videos can be a perfect way to refresh yourself. These videos showcase serene landscapes, calming sounds, and vibrant wildlife, offering a peaceful escape and mental reset. </p>
                   <div className="comment-action">
                    <img src={like} alt=""/>
                    <span>244</span>
                    <img src={dislike} alt=""/>

                   </div>
                
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt=""/>
                <div>
                   <h3>Swetha Pottabathini <span>1 day ago</span></h3>
                   <p>Nature videos can be a perfect way to refresh yourself. These videos showcase serene landscapes, calming sounds, and vibrant wildlife, offering a peaceful escape and mental reset.</p>
                   <div className="comment-action">
                    <img src={like} alt=""/>
                    <span>244</span>
                    <img src={dislike} alt=""/>

                   </div>
                
                </div>
            </div>
         </div>
    </div>
  )
}

export default PlayVideo
