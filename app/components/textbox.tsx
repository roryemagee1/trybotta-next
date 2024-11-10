
// import { Body } from '@react-email/body'
// import { Button } from '@react-email/button'
// import { Container } from '@react-email/container'
// import { Img } from '@react-email/img';
import { Text } from '@react-email/text'
import { Heading } from '@react-email/heading'
import { Section } from '@react-email/section';
export default function Textbox({ fields }) {
  console.log("textbox: ", fields);
  return (
    <Section style={{ minHeight: "4rem", backgroundColor: fields.backgroundColor }} >
      {/* <Heading style={{ fontSize: "3rem", margin: "0 20px", color: "black", textAlign: "center" }} as={"h2"}>How cool!</Heading> */}
      <Text style={{ fontSize: "1.7rem", textAlign: fields.textAlign, fontWeight: "300", margin: "20px 40px", color: fields.color }}>
       {fields.text}
      </Text>
    </Section>
  )
}