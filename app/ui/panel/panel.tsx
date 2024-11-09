
import styles from '@/app/home.module.css';

import { POST } from '@/app/api/send/route';
export default function Panel() {

  async function handleSubmit() {
    'use server';

    POST();
  }

  return (
    <div className={styles.panel}>
      <h1>Panel</h1>
      <form action={handleSubmit}>
        <button>Send!</button>
      </form>
    </div>
  );
}

// className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"

