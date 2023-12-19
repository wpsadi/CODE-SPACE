function signup(req, res) {
    //code here
    return res.status(200).json({
        success: true,
        data: {}
    })
}

module.exports = { signup };