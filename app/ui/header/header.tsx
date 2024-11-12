
import styles from '@/app/home.module.css';
import { museoModerno } from '@/app/fonts/fonts';

import Link from 'next/link';
export default function Header() {
  return (
    <div className={styles.navbar}>
      <header>
        <h1 className={`${museoModerno.className} ${styles.trybotta}`}>trybotta</h1>
        <nav>
          <Link
            href="/"
          >
            <h2 style={{ textDecoration: "underline"}} className={`${museoModerno.className} ${styles.navbar}`}>Blog</h2>
          </Link>
          <Link
            href="/newsletter"
          >
            <h2 className={`${museoModerno.className} ${styles.navbar}`}>Newsletter</h2>
          </Link>
        </nav>
      </header>
      <div className={styles.headerspacer} />
    </div>
  )
}