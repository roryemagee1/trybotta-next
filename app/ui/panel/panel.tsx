import styles from '@/app/home.module.css';

import Form from '@/app/ui/panel/form';
 
import { POST } from '@/app/api/send/route';


export default function Panel({ newsletter }) {

  async function handleSubmit(subject, email, recipient, fromLine) {
    'use server';
  

    POST(newsletter, subject, email, recipient, fromLine);
  }

  return (
    <div className={styles.panel}>
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}

