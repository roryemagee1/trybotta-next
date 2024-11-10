'use client';

import styles from '@/app/home.module.css';
import { useState, useId } from 'react';
export default function Form({ handleSubmit }) {
  const [ subject, setSubject ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ recipient, setRecipient ] = useState("");
  const [ fromLine, setFromLine ] = useState("");
  const id = useId();

  const handleSubmitWithParams = handleSubmit.bind(null, subject, email, recipient, fromLine);

  return (
    <form className={styles.formpanel} action={handleSubmitWithParams}>
      <div>
        <label htmlFor={id + "-subject"}>Subject</label>
          <input
            name="subject"
            id={id + "-subject"}
            type="textbox"
            placeholder="Enter email subject"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            required
          >
        </input>
      </div>
      <div>
        <label htmlFor={id + "-email"}>Email</label>
          <input
            name="email"
            id={id + "-email"}
            type="email"
            placeholder="Enter email to send letter to"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          >
        </input>
      </div>
      <div>
        <label htmlFor={id + "-recipient"}>Recipient</label>
          <input
            name="recipient"
            id={id + "-recipient"}
            type="textbox"
            placeholder="Enter recipient name"
            value={recipient}
            onChange={(event) => setRecipient(event.target.value)}
            required
          >
        </input>
      </div>
      <div>
        <label htmlFor={id + "-from"}>From</label>
          <input
            name="from"
            id={id + "-from"}
            type="textbox"
            placeholder="Enter your name or organization"
            value={fromLine}
            onChange={(event) => setFromLine(event.target.value)}
            required
          >
        </input>
      </div>
      <button>Send!</button>
    </form>
  )
}