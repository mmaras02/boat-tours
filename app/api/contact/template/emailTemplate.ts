const getBaseStyles = () => `
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #0d3043; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background: #f9f9f9; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #0b4f5a; }
    .value { margin-top: 5px; }
    .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; background: #f0f0f0; }
    .button { 
      display: inline-block; 
      padding: 10px 20px; 
      background: #0d3043; 
      color: white; 
      text-decoration: none; 
      border-radius: 5px;
    }
    @media only screen and (max-width: 600px) {
      .container { width: 100% !important; padding: 10px !important; }
    }
  </style>
`;

const getHeader = (title: string) => `
  <div class="header">
    <h2>${title}</h2>
  </div>
`;

const getFooter = (footerText: string) => `
  <div class="footer">
    <p>${footerText}</p>
  </div>
`;

export const getEmailWrapper = (
  content: string,
  title: string,
  footerText: string,
) => `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ${getBaseStyles()}
  </head>
  <body>
    <div class="container">
      ${getHeader(title)}
      <div class="content">
        ${content}
      </div>
      ${getFooter(footerText)}
    </div>
  </body>
  </html>
`;
