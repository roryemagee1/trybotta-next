
'use client';

import styles from '@/app/home.module.css';
import { museoModerno } from '@/app/fonts/fonts';
import { usePathname } from 'next/navigation';

import Link from 'next/link';
export default function Header() {
  const pathname = usePathname();

  return (
    <div className={styles.headerbar}>
      <header>
        <h1 className={`${museoModerno.className} ${styles.trybotta}`}>trybotta</h1>
        <nav>
          <Link
            href="/"
          >
            <h2 className={`${museoModerno.className} ${styles.navitem} ${pathname === "/" && styles.navitemactive}`}>Blog</h2>
          </Link>
          <Link
            href="/newsletter"
          >
            <h2 className={`${museoModerno.className} ${styles.navitem} ${pathname === "/newsletter" && styles.navitemactive}` }>Newsletter</h2>
          </Link>
        </nav>
      </header>
      <div className={styles.headerspacer} />
    </div>
  )
}