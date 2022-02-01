import { Camera, CameraResultType } from '@capacitor/camera'
import { useState } from 'react'
import Image from 'next/image'

const CameraComponent = () => {
    const [imageReady, setImageReady] = useState({ isReady: false, url: "" })
    async function takePicture() {
        const image = await Camera.getPhoto({
            quality: 90,
            allowEditing: true,
            resultType: CameraResultType.Uri
        });
        var imageUrl = image.webPath;
        // imageElement.src = imageUrl;
        setImageReady({ isReady: true, url: imageUrl });
    };
    return(
        <>
            <button onClick={takePicture} className="px-10 py-5 text-white bg-stone-900"> Tirar Foto</button>
            {imageReady.isReady && 
                <>
                    <img alt="foto" src={imageReady.url} />
                </>
            }
        </>
    )
}

export default CameraComponent