
// import { Body } from '@react-email/body'
// import { Button } from '@react-email/button'
// import { Container } from '@react-email/container'
// import { Img } from '@react-email/img';
import { Text } from '@react-email/text'
// import { Heading } from '@react-email/heading'
import { Section } from '@react-email/section';
export default function Textbox() {
  return (
    <Section style={{minHeight: "4rem", backgroundColor: "azure"}} >
      <Text style={{fontSize: "1.5rem", margin: "20px 40px", color: "black"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
    </Section>
  )
}