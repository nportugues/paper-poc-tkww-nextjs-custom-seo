import Link from 'next/link'

export default function Home() {
  return (
   
     <Link href={'/paper'} shallow={true}>
       <a>Visit paper for TK</a>
      </Link>
  )
}
