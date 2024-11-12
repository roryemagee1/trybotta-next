
'use client';

import styles from '@/app/home.module.css';
import { museoModerno, roboto } from '@/app/fonts/fonts';
import { usePathname } from 'next/navigation';

import Link from 'next/link';
export default function Header() {
  const pathname = usePathname();

  return (
    <div className={styles.headerbar}>
      <header>
        <h1 className={`${roboto.className} ${styles.trybotta}`}>trybotta</h1>
        <nav>
          <Link
            href="/"
          >
            <span className={`${roboto.className} ${styles.navitem} ${pathname === "/" && styles.navitemactive}`}>Blog</span>
          </Link>
          <Link
            href="/newsletter"
          >
            <span className={`${roboto.className} ${styles.navitem} ${pathname === "/newsletter" && styles.navitemactive}` }>Newsletter</span>
          </Link>
        </nav>
      </header>
      <div className={styles.headerspacer} />
    </div>
  )
}