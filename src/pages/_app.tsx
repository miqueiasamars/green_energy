import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import TagManager from 'react-gtm-module'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {

// useEffect(()=>{

//   const tagManagerArgs: {
//     gtmId: string;
//   } = {
//     gtmId: 'GTM-WVCXCWP',
//   };

//   TagManager.initialize(tagManagerArgs)

// },[])

  return (
    <>     
      <Component {...pageProps} />   
  
    </>
    )
}

export default MyApp
