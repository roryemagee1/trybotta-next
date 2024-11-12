import styles from '@/app/home.module.css';

import Form from '@/app/ui/panel/form';
 
import { POST } from '@/app/api/send/route';


export default function Panel({ newsletter }: any) {

  async function handleSubmit(subject: any, email: any, recipient: any, fromLine: any) {
    'use server';
  

    POST(newsletter, subject, email, recipient, fromLine);
  }

  return (
    <div className={styles.panel}>
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}

