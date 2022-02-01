import '../styles/globals.css'
import { defineCustomElements } from '@ionic/pwa-elements/loader';


function MyApp({ Component, pageProps }) {
  defineCustomElements();

  return (
    <>
      <Component {...pageProps} />
     </>
  )
}

export default MyApp
