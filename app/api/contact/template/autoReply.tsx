import { getEmailWrapper } from './emailTemplate';

export const autoReplyTemplate = (firstName: string) => {
  const content = `
    <p>Dear ${firstName},</p>
    <p>Thank you for reaching out to us. We have received your message and will get back to you within 24 hours.</p>
    <p>Best regards,<br>Your Venti Boat Team</p>
  `;

  return getEmailWrapper(
    content,
    'Thank You for Contacting Venti Boat!',
    'This is an automated response, please do not reply to this email.',
  );
};
