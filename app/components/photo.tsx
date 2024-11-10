import { Img } from '@react-email/img';
import { Section } from '@react-email/section';

export default function Photo({ fields }: any) {
  return (
    <Section style={{ height: "20rem", backgroundColor: fields.backgroundColor }}>
      <Img style={{ margin: "auto", borderRadius: "25px", maxWidth: "600px" }} src={`https:${fields.photo.fields.file.url}`} />
    </Section>
  )
}