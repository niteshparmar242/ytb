import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({videos, onVideoSelect}) => {
    
        const videolist = videos.map((video) => {
            return <VideoItem 
            video = {video}
            key= {video.id.videoId}
            descreption = {video.snippet.title} 
            onVideoSelect={onVideoSelect}
            image={video.snippet.thumbnails.default.url}/>
        });
   
    
    
    return (
        <>
        <div>
            {videolist}
        </div>
        </>
    )
}

export default VideoList
