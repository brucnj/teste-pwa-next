import Script from 'next/script'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Camera, CameraResultType } from '@capacitor/camera';


export default function Home() {
  // Teste 7
  // const [camera, setCamera]= useState(false)
  //  useEffect(() => {
  //     if(camera){
  //       const takePicture = async () => {
  //         const image = await Camera.getPhoto({
  //           quality: 90,
  //           allowEditing: true,
  //           resultType: CameraResultType.Uri
  //         });
        
  //         // image.webPath will contain a path that can be set as an image src.
  //         // You can access the original file using image.path, which can be
  //         // passed to the Filesystem API to read the raw data of the image,
  //         // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
  //         var imageUrl = image.webPath;
        
  //         // Can be set to the src of an image now
  //         imageElement.src = imageUrl;
  //       };
  //     }
  //   })
  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container}>
          <Link href="/lp/kwid">
            <a className="px-10 py-5 mx-auto text-lg font-bold leading-7 text-white bg-stone-900">Ir para Landing Kwid</a>
          </Link>

          <br />
          <br />

          <Link href="/features">
            <a className="px-10 py-5 mx-auto text-lg font-bold leading-7 text-white bg-stone-900">Features PWA</a>
          </Link>
        </div>
      </div> 
    </>
  )
}
