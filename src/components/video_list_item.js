import React from 'react';

const VideoListItem = (props) => {
	return <li className={props.video.kind}>Video {props.video.id.videoId}</li>
};

export default VideoListItem;