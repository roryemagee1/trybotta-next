// import { Body } from '@react-email/body'
// import { Button } from '@react-email/button'
// import { Container } from '@react-email/container'
import { Img } from '@react-email/img';
import { Text } from '@react-email/text';
import { Column } from '@react-email/column';
import { Row } from '@react-email/row';
import { Heading } from '@react-email/heading';
// import { Section } from '@react-email/section';

export default function Slide() {
  return (
    <Row style={{height: "22rem", backgroundColor: "#292f36" }} >
      <Column style={{ margin: "10px", width: "35%"}}>
        <Img style={{ margin: "0 10px" }} src="https://picsum.photos/300/350" />
      </Column>
      <Column style={{ margin: "0 10px", width: "65%"}}>
        <Heading style={{fontSize: "3rem", margin: "0 20px", color: "white", textAlign: "center" }} as="h2">How cool!</Heading>
        <Text style={{fontSize: "1.5rem", margin: "0 20px", color: "white"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </Text>
      </Column>
    </Row>
  )
}