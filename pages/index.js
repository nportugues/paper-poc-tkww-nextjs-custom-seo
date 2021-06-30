import dynamic from 'next/dynamic'

const HomePage = dynamic(() => {
  const APP_BRAND = process.env.APP_BRAND;

  if (APP_BRAND === 'tk') {
    return import('./tk/homepage')
  }
 
  return import('./ww/homepage')  
})

export default function Home() {
  return <HomePage />
}
