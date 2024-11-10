import { Img } from '@react-email/img';
import { Text } from '@react-email/text'
import { Column } from '@react-email/column'
import { Row } from '@react-email/row'
export default function Icons({ fields }: any) { 
  return (
    <Row style={{minHeight: "15rem", backgroundColor: fields.backgroundColor }} >
      <Column style={{ margin: "auto", width: "30%"}}>
        <Img style={{ margin: "auto", borderRadius: "15px", maxWidth: "200px" }} src={`https:${fields.icon1image.fields.file.url}`} />
        <Text style={{ color: fields.color, textAlign: "center"}}><strong>{fields.icon1}</strong></Text>
      </Column>
      <Column style={{ margin: "auto", width: "30%"}}>
        <Img style={{ margin: "auto", borderRadius: "15px", maxWidth: "200px" }} src={`https:${fields.icon2image.fields.file.url}`} />
        <Text style={{ color: fields.color, textAlign: "center"}}><strong>{fields.icon2}</strong></Text>
      </Column>
      <Column style={{ margin: "auto", width: "30%"}}>
        <Img style={{ margin: "auto", borderRadius: "15px", maxWidth: "200px" }} src={`https:${fields.icon3image.fields.file.url}`} />
        <Text style={{ color: fields.color, textAlign: "center"}}><strong>{fields.icon3}</strong></Text>
      </Column>
    </Row>
  )
}