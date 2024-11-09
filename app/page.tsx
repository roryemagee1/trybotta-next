// import Image from "next/image";
import styles from '@/app/home.module.css';
import { museoModerno } from '@/app/fonts/fonts';

import Panel from '@/app/ui/panel/panel';
import { View } from '@/app/ui/view/view';

export default function Home() {
  return (
    <div className={styles.home}>
      <header>
        <h1 className={`${museoModerno.className} ${styles.trybotta}`}>trybotta</h1>
        <nav>
          <h2 style={{ textDecoration: "underline"}} className={`${museoModerno.className} ${styles.navbar}`}>Emailer</h2>
          <h2 className={`${museoModerno.className} ${styles.navbar}`}>About</h2>
          <h2 className={`${museoModerno.className} ${styles.navbar}`}>Settings</h2>
        </nav>
      </header>
      <div className={styles.headerspacer} />
      <main>
        <Panel />
        <div className={styles.panelspacer} />
        <View />
      </main>
    </div>
  );
}

// div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
// main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"
