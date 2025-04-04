import React from 'react';
import { Link } from 'react-router-dom';
import './VideoCard.css';

function VideoCard({ thumbnail, title, channel, channelImage, views, timestamp }) {
  return (
    <div className="video-card">
      <Link to={`/video/${title.replace(/\s+/g, '-').toLowerCase()}`}>
        <img src={thumbnail} alt={title} className="video-thumbnail" />
      </Link>
      <div className="video-info">
        <img src={channelImage} alt={channel} className="channel-image" />
        <div className="video-details">
          <h3 className="video-title">{title}</h3>
          <p className="channel-name">{channel}</p>
          <p className="video-stats">{views} • {timestamp}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;