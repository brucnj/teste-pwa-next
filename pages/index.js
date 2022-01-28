import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [activeMedia, setMedia] = useState(false);
  
  useEffect(() => {
    async function media(){
      if(activeMedia){
        const videoMedia = await navigator.mediaDevices.getUserMedia({
          video: true
        });
    
        document.querySelector('video').srcObject = new MediaStream(videoMedia);
      }
    }

    media();
  });


  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <Link href="/lp/kwid">
          <a className="px-10 py-5 mx-auto text-lg font-bold leading-7 text-white bg-stone-900">Ir para Landing Kwid</a>
        </Link>

        <button onClick={() => setMedia(true)} className="px-10 py-5 mx-auto mt-10 text-lg font-bold leading-7 text-white bg-stone-900"> Abrir Camera</button>
        <video autoPlay></video>
      </div>
    </div>
  )
}
