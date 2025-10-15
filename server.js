import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/send-email', async (req, res) => {
  const { firstName, lastName, email, phone, investmentGoal, message } = req.body;

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Use Resend's test domain for development
      to: ['jaortiz.cancino@gmail.com'],
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Investment Goal:</strong> ${investmentGoal}</p>
        <div><strong>Message:</strong><br/>${message}</div>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Email send error:', err);
    res.status(500).json({ error: 'Failed to send email', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ API server running on http://localhost:${PORT}`);
});

