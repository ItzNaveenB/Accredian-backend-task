const prisma = require('../config/database');
const transporter = require('../config/email');

const createReferral = async (req, res, next) => {
  const { name, email, phoneNumber, referredBy } = req.body;

  if (!name || !email || !phoneNumber || !referredBy) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const newReferral = await prisma.referral.create({
      data: { name, email, phoneNumber, referredBy },
    });

    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Referral Confirmation',
      text: `Thank you for the referral, ${name}!`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json(newReferral);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createReferral,
};
