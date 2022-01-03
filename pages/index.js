import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <Link href="/lp/kwid">
          <a className="bg-stone-900 py-5 px-10 mx-auto text-white text-lg font-bold leading-7">Ir para Landing Kwid</a>
        </Link>
      </div>
    </div>
  )
}
