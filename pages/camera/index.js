import { Fragment, useState, useEffect } from 'react'
import PhotoModal from '../../components/PhotoModal';

export default function Camera(){
    const [canvaTemplate, setCanvaTemplate] = useState(0);
    var imageCapture;

    const pictureUrl = []
    
    function changeCanva(){
        console.log
        const images = [
            "/canvasPhoto/bancoFrontal.svg",
            "/canvasPhoto/bancosFrontais.svg",
            "/canvasPhoto/botoesLateralVolante.svg",
            "/canvasPhoto/displayMultimidia.svg",
            "/canvasPhoto/farois.svg",
            "/canvasPhoto/frente.svg",
            "/canvasPhoto/frenteLateral.svg",
            "/canvasPhoto/lateralEsquerda.svg",
            "/canvasPhoto/lateralReta.svg",
            "/canvasPhoto/portaDireita.svg",
            "/canvasPhoto/simMarca.svg",
            "/canvasPhoto/traseira.svg",
            "/canvasPhoto/traseiraLateral.svg",
            "/canvasPhoto/velocimetro.svg",
            "/canvasPhoto/visaoBancos.svg",
            "/canvasPhoto/visaoVolante.svg",
            "/canvasPhoto/volante.svg"
        ]
        const moldura = document.getElementById('canvaTemplate');
        moldura.src = images[canvaTemplate];
    }

    function drawCanvas(canvas, img) {
        canvas.width = getComputedStyle(canvas).width.split('px')[0];
        canvas.height = getComputedStyle(canvas).height.split('px')[0];
        let ratio  = Math.min(canvas.width / img.width, canvas.height / img.height);
        let x = (canvas.width - img.width * ratio) / 2;
        let y = (canvas.height - img.height * ratio) / 2;
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
        canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height,
            x, y, img.width * ratio, img.height * ratio);
      }

      function camera(){
        const getMedia = function getUserMedia(constraints){ 
            // if Promise-based API is available, use it
            if (navigator.mediaDevices) {
              return navigator.mediaDevices.getUserMedia(constraints);
            }
              
            // otherwise try falling back to old, possibly prefixed API...
            var legacyApi = navigator.getUserMedia || navigator.webkitGetUserMedia ||
              navigator.mozGetUserMedia || navigator.msGetUserMedia;
              
            if (legacyApi) {
              // ...and promisify it
              return new Promise(function (resolve, reject) {
                legacyApi.bind(navigator)(constraints, resolve, reject);
              });
            }
        }
          
        if (!navigator.mediaDevices && !navigator.getUserMedia && !navigator.webkitGetUserMedia &&
            !navigator.mozGetUserMedia && !navigator.msGetUserMedia) {
            alert('User Media API not supported.');
            return;
        }
          
        var constraints = {};
        constraints['video'] = true;
            
        getMedia(constraints)
            .then(function (stream) {
            var mediaControl = document.querySelector('video');
                
            if ('srcObject' in mediaControl) {
                mediaControl.srcObject = stream;
            } else if (navigator.mozGetUserMedia) {
                mediaControl.mozSrcObject = stream;
            } else {
                 mediaControl.src = (window.URL || window.webkitURL).createObjectURL(stream);
            }
            mediaControl.play();
            const track = stream.getVideoTracks()[0];
            imageCapture = new ImageCapture(track);
            changeCanva();
        })
        .catch(function (err) {
            alert('Error: ' + err);
        });
    }

    useEffect(() => {
        document.getElementById('photoCanva').style.display = "none";
        document.getElementById('canvaOn').style.display = "none";
        camera();
    });

    function getPhoto(){
        imageCapture.grabFrame()
            .then(imageBitmap => {
                document.getElementById('player').style.display = "none";
                document.getElementById('canvaPhoto').style.display = "none";
                document.getElementById('canvaOn').style.display = "block";

                const canvas = document.getElementById('photoCanva');
                canvas.style.display = "block";

                drawCanvas(canvas, imageBitmap);
                
                // modalOpen(imageBitmap);
            });
    }

    function nextStep(){
        const canva = document.getElementById('photoCanva');
        console.log(canva.toDataURL());
        pictureUrl.push({ img: canva.toDataURL()});
        console.log(pictureUrl);

        canva.style.display = "none";
        document.getElementById('canvaOn').style.display = "none";
        document.getElementById('player').style.display = "block";
        document.getElementById('canvaPhoto').style.display = "block";

        camera()
        setCanvaTemplate(canvaTemplate + 1);
        // document.location.reload(true)
    }


  
    return (
        <>
            {/* {isModalOpen.open && <PhotoModal imageBitmap={isModalOpen.img} />} */}
            <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full">
                    <video id="player" autoPlay className="relative w-screen h-screen min-w-full min-h-full pointer-events-none" style={{ objectFit: 'cover' }}></video>
                    <div id="canvaPhoto" className="absolute">
                        {/* <svg className="w-96 h-96" viewBox="0 0 318 231" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 217C14 231 34 230 58 214M58 214C48.4336 206.98 46.0252 202.771 44.5 195C35.5 147.5 27.5 88.5005 2 58.0005M58 214C80.5 228 104.5 229.5 136 229.5H185C204 229.5 214.5 228 230 224C235 219.5 237.557 219.406 244 218C259.5 215 293.5 199.5 316 175M2 207C4.5 210 16.5 210.5 17.5 182V143C17.5 129 13.5 109.001 1 90.0005M316 161C303.755 171.321 296.729 176.959 281 184C275.416 186.5 273 185.5 272.5 180C271.68 139.315 266 108.001 252.5 78.0005V70.0005C252.5 66.1964 253.125 63.1962 254.225 61M2 6.50051C75.5 -11.4999 270.5 25 317 69.0005C298.888 57.5243 288.365 56.6429 269.5 56.5005H261C258.113 56.5005 255.727 58.0003 254.225 61M254.225 61C251.447 60.1044 248.707 59.2311 246 58.3798M65 33C66.3673 30.5275 67.5708 29.6335 71 29.5C137.191 30.4593 182.217 38.3204 246 58.3798M65 33C43.9308 24.9547 29.6484 23.3374 2 23M65 33C61 47 74.5 66 83 75C87.25 79.5 85.5 80.5 100 81C114.5 81.5 122 87 137.5 86.5C150.034 86.2074 162 83 169 82.5C176 82 223.5 86.5 228 85C232.5 83.5 246 58.3798 246 58.3798M245 169C248 164.5 246.5 161.5 240 161.5L113 160C109 160 101 162.5 98 168L82 201C81.5 202.5 82 204 84 204.5C130.532 211.241 156.093 211.121 204 206.5C212 205.5 217.5 203.5 224 196.5C232.829 185.856 237.445 179.808 245 169Z" stroke="black" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg> */}
                        <img id="canvaTemplate" className='w-96 h-96' />
                        <button onClick={getPhoto} className="bottom-0 px-10 py-5 mx-auto mb-10 text-xl text-white rounded-lg" style={{ background: '#787d62' }}>Tirar Foto</button>
                    </div>        
                    
                    <div>
                        <canvas id="photoCanva" className='w-full h-full mb-10'></canvas>
                        <div id="canvaOn">
                            <button onClick={() => { document.location.reload(true) }} className="px-10 py-5 mr-10 text-lg text-black bg-stone-200">Tirar Foto Novamente</button>
                            <button onClick={nextStep} className="px-10 py-5 text-lg text-white bg-indigo-700 ">Ir para próxima Foto</button>
                        </div>
                    </div>
            </div>
        </>
    )
}