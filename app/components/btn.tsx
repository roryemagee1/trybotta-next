import { Button } from '@react-email/button'
import { Section } from '@react-email/section';
export default function Btn({ fields }: any) {
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