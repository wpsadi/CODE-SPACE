function signup(req, res) {
    //code here
    const {name,mail} = req.body
    // console.log(res.body)

    console.log(name,mail)
    return res.status(200).json({
        success: true,
        data: {}
    })
}

module.exports = { signup };