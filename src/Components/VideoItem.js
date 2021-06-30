import React from 'react'
import './VideoItem.css'

function VideoItem(props) {
    return (
        <div>
            <div className="ui list" onClick={() =>props.onVideoSelect(props.video)}>
            <div className="item">
                <img src={ props.image } alt={props.video.id.videoId} />
            </div>
            <div className="ui content">
            <h4>{props.descreption}</h4>
        </div>
        </div>
        </div>
        
    )
}

export default VideoItem
