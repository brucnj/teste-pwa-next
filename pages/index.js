import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container}>
          <Link href="/lp/kwid">
            <a className="px-10 py-5 mx-auto text-lg font-bold leading-7 text-white bg-stone-900">Ir para Landing Kwid</a>
          </Link>

          <br />
          <br />

          <Link href="/features">
            <a className="px-10 py-5 mx-auto text-lg font-bold leading-7 text-white bg-stone-900">Features PWA</a>
          </Link>
        </div>
      </div> 
    </>
  )
}
