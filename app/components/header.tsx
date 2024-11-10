// import { Body } from '@react-email/body'
// import { Button } from '@react-email/button'
// import { Container } from '@react-email/container'
// import { Img } from '@react-email/img';
// import { Text } from '@react-email/text'
import { Heading } from '@react-email/heading'
import { Section } from '@react-email/section';
export default function Header({ fields }) {
  // console.log("header: ", fields);
  return (
    <Section style={{height: "4rem", backgroundColor: fields.backgroundColor }} >
      <Heading as={fields.hTag} style={{ textAlign: fields.textAlign, fontSize: fields.hTag === "h1" ? "3rem" : "2rem", fontWeight: "800", margin: "5px 10px", color: fields.color}}>{fields.headerText}</Heading>
    </Section>
  )
}

// #292f36