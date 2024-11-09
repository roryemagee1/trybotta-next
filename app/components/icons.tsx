
// import { Body } from '@react-email/body'
// import { Button } from '@react-email/button'
// import { Container } from '@react-email/container'
import { Img } from '@react-email/img';
import { Text } from '@react-email/text'
import { Column } from '@react-email/column'
import { Row } from '@react-email/row'
// import { Section } from '@react-email/section';
export default function Icons() {
  return (
    <Row style={{minHeight: "15rem", backgroundColor: "white" }} >
      <Column style={{ margin: "auto", width: "30%"}}>
        <Img style={{ margin: "auto", borderRadius: "15px"}} src="https://picsum.photos/150/150" />
        <Text style={{ textAlign: "center"}}><strong>Cool Icon 1</strong></Text>
      </Column>
      <Column style={{ margin: "auto", width: "30%"}}>
        <Img style={{ margin: "auto", borderRadius: "15px"}} src="https://picsum.photos/150/150" />
        <Text style={{ textAlign: "center"}}><strong>Cool Icon 2</strong></Text>
      </Column>
      <Column style={{ margin: "auto", width: "30%"}}>
        <Img style={{ margin: "auto", borderRadius: "15px"}} src="https://picsum.photos/150/150" />
        <Text style={{ textAlign: "center"}}><strong>Cool Icon 3</strong></Text>
      </Column>
    </Row>
  )
}