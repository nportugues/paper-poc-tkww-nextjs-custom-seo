import '../styles/globals.css'
import dynamic from 'next/dynamic'

const AppShell = dynamic(async () => {
  const APP_BRAND = process.env.APP_BRAND;
  const res = await import('../components/Application')

  if (APP_BRAND === 'tk') {
    return res.TKApp
  }
 
  return res.WWApp
})

function MyApp({ Component, pageProps }) {
  return <AppShell><Component {...pageProps} /></AppShell>
}

export default MyApp
