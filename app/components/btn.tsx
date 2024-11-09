// import { Body } from '@react-email/body'
import { Button } from '@react-email/button'
// import { Container } from '@react-email/container'
// import { Img } from '@react-email/img';
// import { Text } from '@react-email/text'
// import { Heading } from '@react-email/heading'
import { Section } from '@react-email/section';
export default function Btn() {
  return (
    <Section style={{ height: "4rem", backgroundColor: "azure" }} >
      <Button 
        href="https://ipn.ibotta.com/" 
        style={{
          fontSize: "2rem", 
          margin: "0 35%",
          padding: "5px",
          color: "white", 
          backgroundColor: "#292f36", 
          textAlign: "center",
          borderRadius: "15px"
        }}
      >
      Learn More
      </Button>
    </Section>
  )
}