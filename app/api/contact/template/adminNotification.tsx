import { getEmailWrapper } from './emailTemplate';

interface AdminNotificationProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export function adminNotificationTemplate({
  firstName,
  lastName,
  email,
  phone,
  message,
}: AdminNotificationProps) {
  const fullName = `${firstName} ${lastName}`;
  const phoneSection = phone
    ? `
      <div class="field">
        <div class="label">Phone:</div>
        <div class="value">${phone}</div>
      </div>
    `
    : '';

  const content = `
    <div class="field">
      <div class="label">Name:</div>
      <div class="value">${fullName}</div>
    </div>
    <div class="field">
      <div class="label">Email:</div>
      <div class="value">${email}</div>
    </div>
    ${phoneSection}
    <div class="field">
      <div class="label">Message:</div>
      <div class="value">${message.replace(/\n/g, '<br>')}</div>
    </div>
  `;

  return getEmailWrapper(
    content,
    'New Contact Form Submission',
    'This message was sent from your website contact form. Reply to: ' + email,
  );
}
