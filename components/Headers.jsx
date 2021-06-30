import Link from 'next/link'

export const TKHeader = () => (
    <Link href="/">
        <div style={{cursor:'pointer', background: 'red', color: 'white', width: '100%', padding: '8px'}}>
        The Knot
        </div>
    </Link>
)

export const WWHeader = () => (
    <Link href="/">
        <div style={{cursor:'pointer', background: 'blue', color: 'white', width: '100%', padding: '8px'}}>
            Wedding Wire
        </div>
    </Link>
)