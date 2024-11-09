// import { Body } from '@react-email/body'
// import { Button } from '@react-email/button'
// import { Container } from '@react-email/container'
// import { Img } from '@react-email/img';
// import { Text } from '@react-email/text'
import { Heading } from '@react-email/heading'
import { Section } from '@react-email/section';
export default function Header() {
  return (
    <Section style={{height: "4rem", backgroundColor: "#292f36"}} >
      <Heading style={{fontSize: "3rem", margin: "5px 10px", color: "white"}}>Trybotta</Heading>
    </Section>
  )
}