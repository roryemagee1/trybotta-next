
// import { Body } from '@react-email/body'
// import { Button } from '@react-email/button'
// import { Container } from '@react-email/container'
import { Img } from '@react-email/img';
// import { Text } from '@react-email/text'
// import { Heading } from '@react-email/heading'
import { Section } from '@react-email/section';

export default function Photo() {
  return (
    <Section style={{height: "20rem", backgroundColor: "azure"}}>
      <Img style={{ margin: "auto", borderRadius: "25px"}} src="https://picsum.photos/550/300" />
    </Section>
  )
}