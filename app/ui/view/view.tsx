

import * as React from "react";

// import { Body } from '@react-email/body'
// import { Button } from '@react-email/button'
// import { Container } from '@react-email/container'
// import { Img } from '@react-email/img';
// import { Text } from '@react-email/text'

import { Section } from "@react-email/section";
import { Head } from '@react-email/head'
import { Html } from '@react-email/html'

// import { render } from '@react-email/render'

import styles from '@/app/home.module.css';

import Header from '@/app/components/header';
import Photo from '@/app/components/photo';
import Textbox from '@/app/components/textbox';
import Btn from '@/app/components/btn';
import Slide from '@/app/components/slide';
import Icons from '@/app/components/icons';
import Footer from '@/app/components/footer';
export function View({ newsletter }) {
  return (
    <section className={styles.view}>
      <div>
        <Letter newsletter={newsletter} />
      </div>
    </section>
  );
}

export function Letter({ newsletter }) {
  // console.log(newsletter);
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
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName, 
  newsletter
}) => {
  console.log(firstName);
  return(
    <Html>
      <Head />
      <Letter newsletter={newsletter} />
    </Html>
  )
};

export default EmailTemplate;


// const htmlTest = render(<Letter />, {
//   pretty: true
// })
// console.log("html: ", htmlTest);
