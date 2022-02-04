import styles from '../styles/Home.module.css'
import Link from 'next/link'
import CameraModal from '../components/CameraModal';
import { useState } from 'react';

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState();
    function modalOpen(e) {
        if (isModalOpen) {
            setModalOpen(false);
        } else {
            setModalOpen(true);
        }

    }

  return (
    <>
      {isModalOpen && <CameraModal /> }
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

          {/* <button onClick={modalOpen} className="px-10 py-5 mx-auto mt-10 text-lg font-bold leading-7 text-white bg-stone-900">Abrir Câmera</button> */}

          <Link href="/camera">
            <a className="px-10 py-5 mx-auto mt-10 text-lg font-bold leading-7 text-white bg-stone-900">Abrir Câmera</a>
          </Link>
        </div>
      </div> 
    </>
  )
}
