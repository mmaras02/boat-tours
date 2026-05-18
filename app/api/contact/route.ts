import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { adminNotificationTemplate } from './template/adminNotification';
import { autoReplyTemplate } from './template/autoReply';

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phone, message } = await request.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const adminNotification = adminNotificationTemplate({
      firstName,
      lastName,
      email,
      phone,
      message,
    });

    const mailOptions = {
      from: `"${firstName} ${lastName}" <${email}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Form Message from ${firstName} ${lastName}`,
      html: adminNotification,
    };

    await transporter.sendMail(mailOptions);

    const autoReply = autoReplyTemplate(firstName);

    const autoReplyOptions = {
      from: `"Venti Boat" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Thank you for contacting Venti Boat!',
      html: autoReply,
    };

    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 },
    );
  }
}
