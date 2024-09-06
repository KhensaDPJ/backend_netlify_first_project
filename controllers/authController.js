
const authController = (req, res) => {
    res.json({
      message: 'Welcome!',
      user: req.user, 
    });
  };
  export default {authController};
  