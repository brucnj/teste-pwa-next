import AudioRecorder from "../components/AudioRecorder";
import CameraComponent from "../components/CameraComponent";
import ShareComponent from "../components/ShareComponent";
import styles from '../styles/Home.module.css'

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
                    <ShareComponent title="See cool stuff" text="Really awesome thing you need to see right meow" url="https://google.com" dialogTitle="Shre with buddies" />
                </div>
                <div>
                    <h2 className="mb-5 text-3xl font-bold">Câmera</h2>
                    <CameraComponent />
                </div>
            </div>
        </div>
    )
}