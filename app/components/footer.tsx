// import { Body } from '@react-email/body'
// import { Button } from '@react-email/button'
// import { Container } from '@react-email/container'
// import { Img } from '@react-email/img';
import { Text } from '@react-email/text'
import { Column } from '@react-email/column'
import { Row } from '@react-email/row'
// import { Section } from '@react-email/section';
import { Link } from '@react-email/link';
export default function Footer() {
  return (
      <Row style={{ minHeight: "4rem", backgroundColor: "#292f36" }} >
        <Column style={{ margin: "auto"}}>
          <Link href="https://ipn.ibotta.com/" style={{ textAlign: "center"}}><Text style={{ textDecoration: "underline" }}>Privacy</Text></Link>
        </Column>
        <Column style={{ margin: "auto"}}>
          <Link href="https://ipn.ibotta.com/" style={{ textAlign: "center"}}><Text style={{ textDecoration: "underline" }}>Email preferences</Text></Link>
        </Column>
        <Column style={{ margin: "auto"}}>
          <Link href="https://ipn.ibotta.com/" style={{ textAlign: "center"}}><Text style={{ textDecoration: "underline" }}>Contact us</Text></Link>
        </Column>
        <Column style={{ margin: "auto"}}>
          <Link href="https://ipn.ibotta.com/" style={{ textAlign: "center"}}><Text style={{ textDecoration: "underline" }}>Unsubscribe</Text></Link>
        </Column>
      </Row>
  )
}
