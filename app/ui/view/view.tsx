import * as React from "react";

import { Section } from "@react-email/section";
import { Head } from '@react-email/head'
import { Html } from '@react-email/html'

// import { render } from '@react-email/render'

import styles from '@/app/home.module.css';
export function View({ newsletter }: any) {
  return (
    <section className={styles.view}>
      <div>
        <Letter newsletter={newsletter} />
      </div>
    </section>
  );
}

export function Letter({ newsletter }: any) {
  return (
    <Section style={{
      minWidth: "280px",
      // maxWidth: "600px",
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
      backgroundColor: "#f0f2f5"
    }}>
      <Section style={{ 
        maxWidth: "600px",
        // minHeight: "calc(90vh-40px)", 
        margin: "0 auto", 
        boxSizing: "border-box", 
        backgroundColor: "gray"
      }}>
        {newsletter ? newsletter : null}
      </Section>
    </Section>
  )
}


interface EmailTemplateProps {
  firstName: string;
  newsletter: any;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName, 
  newsletter
}) => {
  return (
    <Html>
      <Head />
      <p>{firstName},</p>
      <p></p>
      <p>Click the dots to check out the newsletter, below: </p>
      <Letter newsletter={newsletter} />
    </Html>
  )
};

export default EmailTemplate;


// const htmlTest = render(<Letter />, {
//   pretty: true
// })
// console.log("html: ", htmlTest);


