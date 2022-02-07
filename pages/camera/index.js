import { Fragment, useState, useEffect } from 'react'
import PhotoModal from '../../components/PhotoModal';

const pictureUrl = [];
export default function Camera(){
    const [canvaTemplate, setCanvaTemplate] = useState(0);
    var imageCapture;

    
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
        constraints['video'] = { facingMode: "environment" };
            
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
                console.log(canvas.toDataURL('image/jpeg'));
                pictureUrl.push(canvas.toDataURL('image/jpeg'));
            });
    }

    function nextStep(){
        document.getElementById('photoCanva').style.display = "none";
        document.getElementById('canvaOn').style.display = "none";
        document.getElementById('player').style.display = "block";
        document.getElementById('canvaPhoto').style.display = "block";

        camera()
        setCanvaTemplate(canvaTemplate + 1);
        // document.location.reload(true)
    }

    if(canvaTemplate > 16){
        document.getElementById('player').style.display = "none";
        document.getElementById('canvaPhoto').style.display = "none";
        document.getElementById('canvaTemplate').style.display = "none";
        document.getElementById('photoCanva').style.display = "none";
        document.getElementById('canvaOn').style.display = "none";

        console.log(pictureUrl)
    }
  
    return (
        <>
            <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full">
                    <video id="player" autoPlay className="relative w-screen h-screen min-w-full min-h-full pointer-events-none" style={{ objectFit: 'cover' }}></video>
                    <div id="canvaPhoto" className="absolute grid grid-cols-2">
                        <img id="canvaTemplate" className='w-96 h-96' />
                        <button onClick={getPhoto} className="bottom-0 h-20 px-10 py-5 mx-auto mb-10 text-xl text-white rounded-lg" style={{ background: '#787d62' }}>Tirar Foto</button>
                    </div>        
                    
                    <div>
                        <canvas id="photoCanva" className='w-full h-full mb-10'></canvas>
                        <div id="canvaOn">
                            <button onClick={() => { document.location.reload(true) }} className="px-10 py-5 mr-10 text-lg text-black bg-stone-200">Tirar Foto Novamente</button>
                            <button onClick={nextStep} className="px-10 py-5 text-lg text-white bg-indigo-700 ">Ir para próxima Foto</button>
                        </div>
                    </div>

                    <div>
                        {pictureUrl.map((picture) => {
                            <img src={picture} />
                        })}
                    </div>
            </div>
        </>
    )
}