import { useRef, useState } from "react"
import styles from '../styles/Home.module.css'

export default function AudioRecorder(){
    const [stream, setStream] = useState({ access: false, recorder: null, error: "" });
    const [recording, setRecording] = useState({ active: false, available: false, url: "" });
    const chunks = useRef([]);
    function getAccess() {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then((mic) => {
                let mediaRecorder;
                try{
                    mediaRecorder = new MediaRecorder(mic, { mimeType: 'audio/webm' });
                }
                catch(err){
                    console.log(err);
                }
                const track = mediaRecorder.stream.getTracks()[0];
                track.onended = () => console.log("ended");

                mediaRecorder.onstart = function() {
                    setRecording({ active: true, available: false, url: "" });
                };
                mediaRecorder.ondataavailable = function(e) {
                    chunks.current.push(e.data);
                };
                mediaRecorder.onstop = async function() {
                    const url = URL.createObjectURL(chunks.current[0]);
                    chunks.current = [];
                    setRecording({ active: false, available: true, url });
                };

                setStream({ ...stream, access: true, recorder: mediaRecorder });
            })
            .catch((error) => {
                setStream({ ...stream, error });
            });
    }

    return(
        <> 
        {stream.access ? (
            <div>
                <button className={recording.active ? styles.recording : "px-10 py-5 border border-stone-900"} onClick={() => !recording.active && stream.recorder.start()}>
                    Começar a Gravar
                </button>
                <button onClick={() => stream.recorder.stop()} className="px-10 py-5 ml-10 border border-stone-900">Parar de Gravar</button>
                <br />
                {recording.available && <audio className="mx-auto my-5" controls src={recording.url} />}
            </div>
        ) : (
            <button onClick={getAccess} className="px-10 py-5 text-white bg-stone-900">Gravar Áudio</button>
        )}
        </>
    )
}