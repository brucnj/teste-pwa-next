import Script from 'next/script'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  //Teste  6
  useEffect(() => {
    var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    video = document.getElementById("video"),
    videoObj = { "video": true },
    errBack = function (error) {
      console.log("Video capture error: ", error.code);
    };

    // Put video listeners into place
    if (navigator.getUserMedia) { // Standard
        navigator.getUserMedia(videoObj, function (stream) {
            video.src = stream;
            video.play();
        }, errBack);
    } 

    document.getElementById("snap")
            .addEventListener("click", function() {
    setInterval(function(){
      context.drawImage(video, 0, 0, 640, 480);
    },1)
  });
  }, []);

  //Teste 5
  // const [source, setSource] = useState("");
  // const handleCapture = (target) => {
  //   if(target.files) {
  //     if(target.files.length !== 0 ){
  //       const file = target.files[0];
  //       const newUrl = URL.createObjectURL(file);
  //       setSource(newUrl);
  //     }
  //   }
  // }

  //Teste 4
  // const [activeMedia, setMedia] = useState(false);
  // useEffect(() => {
  //   async function media(){
  //     if(activeMedia){
  //       const videoMedia = await navigator.mediaDevices.getUserMedia({
  //         audio: false,
  //         video: true
  //       });
  //       const videoTracks = videoMedia.getVideoTracks()
  //       const track = videoTracks[0]
  //       alert(`Getting video from: ${track.label}`)
  //       document.querySelector('video').srcObject = new MediaStream(videoMedia);
  //     }
  //   }

  //   media();
  // });

  
  return (
    <>
      {/* Teste 6 */}
      <div className={ styles.container }>
        <video id="video" width="640" height="480" autoPlay></video>
        <button id="snap">Snap Photo</button>
        <canvas id="canvas" width="640" height="480"></canvas>
      </div>


      {/* Teste 5 - Abre a câmera do dispositivo (mobile apenas) e anexa a foto */}
      {/* <div className={styles.container}>
        <h5>Teste de Câmera</h5>
        {source &&
          <div className="flex justify-center border-black border-1">
            <img src={source} alt={"snap"}></img>
          </div>
        } 
        <input 
          accept='image/*'
          type="file"
          capture="environment"
          onChange={(e) => handleCapture(e.target)} />
      </div> */}

      {/* Teste 4 - abre a câmera e exibe o vídeo (não funciona PWA, somente Desktop) */}
      {/* <Script src="https://webrtc.github.io/adapter/adapter-latest.js"></Script>
      <div className={styles.container}>
        <div className={styles.container}>
          <Link href="/lp/kwid">
            <a className="px-10 py-5 mx-auto text-lg font-bold leading-7 text-white bg-stone-900">Ir para Landing Kwid</a>
          </Link>

          <button onClick={() => setMedia(true)} className="px-10 py-5 mx-auto mt-10 text-lg font-bold leading-7 text-white bg-stone-900">Abrir Camera</button>
          <video autoPlay></video>

          <input type="file" accept="image/*" capture="camera" />
        </div>
      </div> */}
    </>
  )
}
