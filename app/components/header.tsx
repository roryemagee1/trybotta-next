import { Heading } from '@react-email/heading'
import { Section } from '@react-email/section';
export default function Header({ fields }: any) {
  return (
    <Section style={{height: "4rem", backgroundColor: fields.backgroundColor }} >
      <Heading as={fields.hTag} style={{ textAlign: fields.textAlign, fontSize: fields.hTag === "h1" ? "3rem" : "2rem", fontWeight: "800", margin: "5px 10px", color: fields.color}}>{fields.headerText}</Heading>
    </Section>
  )
}