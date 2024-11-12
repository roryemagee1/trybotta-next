import { Text } from '@react-email/text'
import { Column } from '@react-email/column'
import { Row } from '@react-email/row'
import { Link } from '@react-email/link';
export default function Footer({ fields }: any) {
  return (
    <Row style={{ minHeight: "4rem", backgroundColor: fields.backgroundColor }} >
      <Column style={{ margin: "auto"}}>
        <Link href={fields.footerHref } style={{ textAlign: "center", color: fields.color, fontWeight: "800" }}><Text style={{ textDecoration: "underline" }}>Privacy</Text></Link>
      </Column>
      <Column style={{ margin: "auto"}}>
        <Link href={fields.footerHref }  style={{ textAlign: "center", color: fields.color, fontWeight: "800" }}><Text style={{ textDecoration: "underline" }}>Email preferences</Text></Link>
      </Column>
      <Column style={{ margin: "auto"}}>
        <Link href={fields.footerHref }  style={{ textAlign: "center", color: fields.color, fontWeight: "800" }}><Text style={{ textDecoration: "underline" }}>Contact us</Text></Link>
      </Column>
      <Column style={{ margin: "auto"}}>
        <Link href={fields.footerHref }  style={{ textAlign: "center", color: fields.color, fontWeight: "800" }}><Text style={{ textDecoration: "underline" }}>Unsubscribe</Text></Link>
      </Column>
    </Row>
  )
}
