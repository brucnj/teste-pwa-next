import AudioRecorder from "../components/AudioRecorder";
import CameraComponent from "../components/CameraComponent";
import ShareComponent from "../components/ShareComponent";
import styles from '../styles/Home.module.css'
import Geolocalizacao from "../components/Geolocalizacao";

export default function Features() {
    return(
        <div className={styles.container}>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                <div>
                    <h2 className="mb-5 text-3xl font-bold">Gravador de áudio</h2>
                    <AudioRecorder />
                </div>
                <div>
                    <h2 className="mb-5 text-3xl font-bold">Botão Compartilhar</h2>
                    <ShareComponent title="See cool stuff" text="Really awesome thing you need to see right meow" url="https://google.com" />
                </div>
                <div>
                    <h2 className="mb-5 text-3xl font-bold">Câmera</h2>
                    <CameraComponent />
                </div>
                <div>
                    <h2 className="mb-5 text-3xl font-bold">Teste Vibração</h2>
                    <button onClick={() => {navigator.vibrate(1000)}} className="px-10 py-5 text-white bg-stone-900">Teste de Vibração</button>
                </div>
                <div>
                    <h2 className="mb-5 text-3xl font-bold">Geolocalização</h2>
                    <Geolocalizacao />
                </div>
            </div>
        </div>
    )
}