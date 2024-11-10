// import { Body } from '@react-email/body'
import { Button } from '@react-email/button'
// import { Container } from '@react-email/container'
// import { Img } from '@react-email/img';
// import { Text } from '@react-email/text'
// import { Heading } from '@react-email/heading'
import { Section } from '@react-email/section';
export default function Btn({ fields }) {
  // console.log("button: ", fields);
  return (
    <Section style={{ height: "4rem", backgroundColor: fields.backgroundColor}} >
      <Button 
        href={fields.buttonHref} 
        style={{
          fontSize: "2rem", 
          margin: "0 35%",
          padding: "5px 8px",
          color: fields.color, 
          backgroundColor: fields.buttonColor, 
          textAlign: fields.textAlign,
          borderRadius: "30px",
          minWidth: "30px"
        }}
      >
      {fields.buttonText}
      </Button>
    </Section>
  )
}