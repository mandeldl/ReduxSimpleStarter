import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		//important for each child element to have a unique key
		return <VideoListItem key={video.etag} video={video} />
	});

	return (
		<ul className='col-md-4 list-group'>
			{videoItems}
		</ul>
	);
};

export default VideoList;