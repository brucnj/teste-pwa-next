import '../styles/globals.css'
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { useEffect } from 'react/cjs/react.development';
import React from 'react'

function MyApp({ Component, pageProps }) {

    return (
      <>
        <Component {...pageProps} />
       </>
    )
}

export default MyApp
