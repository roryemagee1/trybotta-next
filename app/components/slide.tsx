// import { Body } from '@react-email/body'
// import { Button } from '@react-email/button'
// import { Container } from '@react-email/container'
import { Img } from '@react-email/img';
import { Text } from '@react-email/text';
import { Column } from '@react-email/column';
import { Row } from '@react-email/row';
import { Heading } from '@react-email/heading';
// import { Section } from '@react-email/section';

export default function Slide({ fields }) {
  // console.log("slide: ", fields);

  return (
    <Row style={{height: "22rem", backgroundColor: fields.backgroundColor }} >
      <Column style={{ margin: "0 10px 0 0", width: "43%", height: "100%" }}>
        <Img style={{ margin: "0 10px 0 0", maxWidth: "280px" }} src={`http:${fields.slideImage.fields.file.url}`} />
      </Column>
      <Column style={{ margin: "0 10px", width: "65%"}}>
        <Heading style={{
          fontSize: "2.5rem", 
          margin: "0 20px 25px 0", 
          fontWeight: "800", 
          color: fields.color, 
          textAlign: "center" 
          }} as="h2"
        >
          {fields.title}
        </Heading>
        <Text style={{ fontSize: "1.5rem", margin: "0 20px", color: fields.color }}>
          {fields.text}
        </Text>
      </Column>
    </Row>
  )
}

// src="https://picsum.photos/300/350"