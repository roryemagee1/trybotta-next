import * as React from "react";
// import Image from 'next/image'
// import {
//   Body,
//   Button,
//   Container,
//   Head,
//   Hr,
//   Html,
//   Img,
//   Preview,
//   Section,
//   Text,
// } from '@react-email/components';
// import { Img } from '@react-email/components';
// import { Img } from "@react-email/img";

import styles from '@/app/home.module.css';

import Header from '@/app/components/header';
import Welcome from '@/app/components/welcome';
import Slide from '@/app/components/slide';
import Icons from '@/app/components/icons';
import Footer from '@/app/components/footer';
export function View() {
  return (
    <section className={styles.view}>
      <div>
        <Header />
        <Welcome />
        <Slide />
        <Icons />
        <Footer />
      </div>
    </section>
  );
}



interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <Header />
    <Welcome />
    <Slide />
    <Icons />
    <Footer />
  </div>
);

export default EmailTemplate;
