import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createTransporter } from '@/lib/mailer'

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  telephone: z.string().min(7).max(20),
  message: z.string().min(10).max(2000),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const { name, email, telephone, message } = parsed.data

    const transporter = createTransporter()

    await transporter.sendMail({
      from: `"Eleanor Gail Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL ?? 'gail@eleanorgail.co.uk',
      replyTo: email,
      subject: `New Enquiry from ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #332727; border-bottom: 2px solid #AFE5E6; padding-bottom: 12px;">
            New Enquiry — Eleanor Gail Website
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #332727; width: 120px;">Name:</td>
              <td style="padding: 8px 0; color: #555;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #332727;">Email:</td>
              <td style="padding: 8px 0; color: #555;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #332727;">Telephone:</td>
              <td style="padding: 8px 0; color: #555;">${telephone}</td>
            </tr>
          </table>
          <div style="margin-top: 20px;">
            <p style="font-weight: bold; color: #332727; margin-bottom: 8px;">Message:</p>
            <div style="background: #FAF8F5; border-left: 4px solid #AFE5E6; padding: 16px; color: #555; line-height: 1.6;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #999;">
            This message was sent via the Eleanor Gail website contact form.
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
