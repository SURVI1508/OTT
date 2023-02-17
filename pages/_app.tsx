import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from 'react-redux';
import storage from '../components/Redux/storage'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={storage}>
        <Component {...pageProps} />
      </Provider>
    </>
  )

}
