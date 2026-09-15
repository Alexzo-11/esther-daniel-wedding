export const adminAuth = (req, res, next) => {
  const pass = req.headers['x-admin-pass'];
  if (pass === process.env.SYSTEM_ADMIN_PASSCODE) {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};
