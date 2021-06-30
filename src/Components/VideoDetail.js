import React from 'react'

function VideoDetail({video}) {

        if(!video){
            return <div style={{margin:'20px 0'}}>Loading...</div>
        }
        return(
            <div>
            <div>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.id.videoId}`} title={video.snippet.title}></iframe>
            </div>
            <div className="ui segment">
            <h4 className="ui header">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
            </div>
            </div>
        )

}

export default VideoDetail
