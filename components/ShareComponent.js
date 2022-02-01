import { Share } from '@capacitor/share'

const ShareComponent = ({ title, text, url, dialogTitle }) => {
    const share = async () =>{
        await Share.share({
            title: title,
            text: text,
            url: url,
            dialogTitle: dialogTitle
        });
    }

    return(
        <>
            <button onClick={share} className='px-10 py-5 text-white bg-stone-900'>Compartilhar</button>
        </>
    )
}

export default ShareComponent