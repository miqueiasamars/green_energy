import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { ContextProvider } from '../data/contexts/Context'
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
    <ContextProvider>    
      <Component {...pageProps} />   
    </ContextProvider>
    </>
    )
}

export default MyApp
