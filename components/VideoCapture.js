import { useEffect, useState } from "react";

const VideoCapture = () => {
    const [videoCapture, setVideoCapture] = useState({ access: false });
    const [stream, setStream] = useState({ stream: "" })

    function getVideo(){
        setVideoCapture({ access: true });
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((streamResult) => {
                const video = document.getElementById('player');
                streamResult.getVideoTracks();
                video.srcObject = streamResult;
                setStream({ stream: streamResult })
            });
    }

    function getPhoto(){
        const capturer = new ImageCapture(stream.stream.getVideoTracks()[0]);
        capturer.takePhoto()
            .then((photo) => {
                var img = document.getElementById("image");
                img.src = URL.createObjectURL(photo);
            });
    }

    return(
        <>
            <button onClick={getVideo} className="px-10 py-5 mx-auto text-lg font-bold leading-7 text-white bg-stone-900">Começar a gravar</button>
            {videoCapture.access && 
                <>
                    <video id="player" controls autoPlay style={{ height: '180px', width: '240px' }}></video>
                    <button onClick={getPhoto} className="px-10 py-5 mx-auto text-lg font-bold leading-7 border border-stone-900"></button> 
                    <img id='image' width={240} height={180}></img>
                </>
            }
        </>
    )
}

export default VideoCapture