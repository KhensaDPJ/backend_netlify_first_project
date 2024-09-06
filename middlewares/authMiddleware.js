// middlewares/authMiddleware.js
import authService from '../services/authService.js';

const authenticateJWT = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (token) {
    const user = await authService.verifyToken(token);
    if (user) {
      req.user = user; // บันทึกข้อมูลผู้ใช้ลงใน req
      next(); // ไปยังส่วนถัดไป
    } else {
      return res.status(403).send('Invalid token');
    }
  } else {
    return res.status(401).send('Token required');
  }
};

export default{
    authenticateJWT
} ;
