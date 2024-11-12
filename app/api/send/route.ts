import { EmailTemplate } from '@/app/ui/view/view';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(newsletter: any, subject: any, email: any, recipient: any, fromLine: any ) {
  try {
    const { data, error } = await resend.emails.send({
      from: `${fromLine || 'Audasite LLC'} <no-reply@resend.dev>`,
      to: [email],
      subject: `${subject || "Newsletter"}`,
      react: EmailTemplate({ firstName: `${recipient || "User"}`, newsletter }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
