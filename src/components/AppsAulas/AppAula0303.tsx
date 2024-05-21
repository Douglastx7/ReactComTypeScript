import React from 'react'
import videoSrc from '../../videos/video.mp4';

const AppAula0303 = () => {
  const video = React.useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = React.useState(false);

  React.useEffect(() => {

  }, []) 

  function forward() {
    if(!video.current) return;
      video.current.currentTime += 2;
  }

  function changePlayBackRate(speed: number) {
    if(!video.current) return;
    video.current.playbackRate = speed
  }
  function mute() {
    if(!video.current) return;
    video.current.muted = !video.current.muted;
  }
  async function pictureInPicture() {
    if(!video.current) return;
    if(document.pictureInPictureElement) {
       await document.exitPictureInPicture();
    }else {
       await video.current.requestPictureInPicture();
    }
  }
  return (
    <div>
        <div className='flex'>
            {  playing ? <button onClick={() => video.current?.pause()}>Pause</button> 
              : <button onClick={() => video.current?.play()}>Play</button>
            }
            <button onClick={forward}>+ 2s</button>
            <button onClick={() => changePlayBackRate(1)}>1x</button>
            <button onClick={() => changePlayBackRate(2)}>2x</button>
            <button onClick={mute}>M</button>
            <button onClick={pictureInPicture}>PiP</button>
        </div>
        <video
         controls
        ref={video} 
        src={videoSrc} 
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        ></video>
    </div>
  )
}

export default AppAula0303;