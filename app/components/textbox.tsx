import { Text } from '@react-email/text'
import { Heading } from '@react-email/heading'
import { Section } from '@react-email/section';
export default function Textbox({ fields }: any) {
  return (
    <Section style={{ minHeight: "4rem", backgroundColor: fields.backgroundColor }} >
      <Text style={{ fontSize: "1.7rem", textAlign: fields.textAlign, fontWeight: "300", margin: "20px 40px", color: fields.color }}>
       {fields.text}
      </Text>
    </Section>
  )
}