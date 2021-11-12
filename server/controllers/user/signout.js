module.exports = (req, res) => {

    res.status(205).clearCookie('jwt').send('sign out successfully')

};
