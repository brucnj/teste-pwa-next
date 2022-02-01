import { Camera, CameraResultType } from '@capacitor/camera'
import { useState } from 'react/cjs/react.development';

export default function CameraComponent(){
    const [imageReady, setImageReady] = useState({ isReady: false, url: "" })
    const takePicture = async () => {
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
                    <img src={imageReady.url} />
                </>
            }
        </>
    )
}