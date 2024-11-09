import * as React from "react";

// import { Body } from '@react-email/body'
// import { Button } from '@react-email/button'
// import { Container } from '@react-email/container'
// import { Img } from '@react-email/img';
// import { Text } from '@react-email/text'

import { Section } from "@react-email/section";
import { Head } from '@react-email/head'
import { Html } from '@react-email/html'

import { render } from '@react-email/render'

import styles from '@/app/home.module.css';

import Header from '@/app/components/header';
import Welcome from '@/app/components/welcome';
import Slide from '@/app/components/slide';
import Icons from '@/app/components/icons';
import Footer from '@/app/components/footer';
export function View() {
  return (
    <section className={styles.view}>
      {/* <div> */}
        <Letter />
      {/* </div> */}
    </section>
  );
}

export function Letter() {
  return (
    <Section style={{ 
      maxWidth: "600px", 
      // minHeight: "calc(90vh-40px)", 
      margin: "20px auto", 
      boxSizing: "border-box", 
      backgroundColor: "azure"
    }}>
      <Header />
      <Welcome />
      <Slide />
      <Icons />
      <Footer />
    </Section>
  )
}

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <Html>
    <Head />
    <Letter />
  </Html>
);

export default EmailTemplate;


// const htmlTest = render(<Letter />, {
//   pretty: true
// })
// console.log("html: ", htmlTest);
