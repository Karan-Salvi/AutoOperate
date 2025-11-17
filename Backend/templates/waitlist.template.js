export const waitListWelcomeTemplate = (fullName) => {
  return `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111">
        <h2 style="color:#0A84FF;">Welcome to AutoOperate 🚀</h2>

        <p>Hi ${fullName},</p>

        <p>
          You're now on the <strong>AutoOperate waitlist</strong> — thank you for joining!
          We're excited to bring you the future of automated onboarding, client management, and AI-powered workflow automation.
        </p>

        <p>
          Our early users get:<br/>
          ✅ Priority access<br/>
          ✅ Exclusive onboarding assistance<br/>
          ✅ Early product updates<br/>
          ✅ Special launch benefits
        </p>

        <p>You’ll be notified as soon as your spot is ready.</p>

        <p>Welcome aboard,<br /><strong>The AutoOperate Team</strong></p>

        <hr />
        <small style="color:#555;">
          You received this email because you joined the AutoOperate early-access waitlist.
        </small>
      </div>
    `;
};

export const waitListWelcomeFallback = (fullName) => {
  return `Welcome to AutoOperate!\n\nThank you for joining our early access waitlist. You're now one of the first to experience our AI-driven platform that automates onboarding, manages clients, routes leads, and streamlines your workflow.\n\nWe will notify you as soon as your access is ready.\n\nThanks,\nTeam AutoOperate`;
};

export const adminWaitlistNotifyTemplate = (data) => {
  const { fullName, email, whatsapp, businessName, leadSource } = data;

  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
      <h2 style="color:#0A84FF;">New Waitlist Signup 🚀</h2>

      <p>Hello Admin,</p>

      <p>
        A new user has joined the <strong>AutoOperate waitlist</strong>.  
        Here are the details:
      </p>

      <div style="margin-top: 16px; padding: 12px; border-radius: 8px; background: #f5f7ff;">
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <p><strong>Business Name:</strong> ${businessName}</p>
        <p><strong>Lead Source:</strong> ${leadSource}</p>
      </div>

      <p style="margin-top: 20px;">
        You can view this user in your dashboard once admin panel is ready.
      </p>

      <p>
        — <strong>AutoOperate System</strong>
      </p>

      <hr />

      <small style="color:#555;">
        This is an automated notification because a new user registered on the AutoOperate waitlist.
      </small>
    </div>
  `;
};

export const adminWaitlistNotifyFallback = (data) => {
  const { fullName, email, whatsapp, businessName, leadSource } = data;

  return `New Waitlist Signup on AutoOperate 🚀

Name: ${fullName}
Email: ${email}
WhatsApp: ${whatsapp}
Business: ${businessName}
Lead Source: ${leadSource}

This is an automated notification.`;
};
