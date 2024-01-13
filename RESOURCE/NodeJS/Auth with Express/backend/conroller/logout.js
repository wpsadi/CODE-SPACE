const logout = () => {
    try {
      const cookieOption = {
        expires: new Date(),
        httpOnly: true,
      };
      res.cookie("token", null, cookieOption);
      res.status(200).json({
        success: true,
        message: "Logged Out",
      });
    } catch (e) {
        res.status(200).json({
            success: false,
            message: e.message
          });
    }

}

module.exports = logout