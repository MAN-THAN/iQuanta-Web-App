import Image from 'next/image';

const VideoComponent = () => {
  return (
    <div className="vjs-container">
    {/* <img src="http://video-js.zencoder.com/oceans-clip.png" alt="Video Thumbnail" width="640" height="264" /> */}
    <video id="example_video_1" className="video-js vjs-default-skin vjs-big-play-centered"
      controls preload="auto" width="640" height="264"
      poster="http://video-js.zencoder.com/oceans-clip.png"
      data-setup='{"example_option":true}'>
      <source src="https://www.youtube.com/watch?v=SlzK9fFFO0M" type="video/mp4" />
      <source src="http://video-js.zencoder.com/oceans-clip.webm" type="video/webm" />
      <source src="http://video-js.zencoder.com/oceans-clip.ogv" type="video/ogg" />
    </video>
  </div>
  );
};

export default VideoComponent;