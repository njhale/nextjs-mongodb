import './global.css'
import type { AppProps } from 'next/app'
import { useEffect, useRef } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  let loaded = useRef(false)
  let dark = useRef(false)

  useEffect(() => {
    if ( !loaded.current ) {
      loaded.current = true;

      if ( window.location.href.match(/[?&]light/) ) {
        dark.current = false
      } else if ( window.location.href.match(/[?&]dark/) ) {
        dark.current = true
      } else {
        const watch = window.matchMedia('(prefers-color-scheme: dark)')
        if ( watch.matches ) {
          dark.current = true
        }

        watch.addEventListener('change', (e) => {
          dark.current = !!e.matches
          sync()
        })
      }

      sync()

    }
  });

  function sync() {
    if ( dark.current ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return <Component {...pageProps} />
}
