const userModel = require("../model/userSchema")
const emailVal = require("email-validator");


async function signup(req, res) {
    //code here
    // const {name,mail} = req.body
    // console.log(res.body)

    // console.log(name,mail)
    let { name, email } = req.body;
    try {
        if (!name || !email) {

            return res.status(200).json({
                success: true,
                data: "error due to invalid fields"
            })
        }
        if (!emailVal.validate(email)) {
            return res.status(200).json({
                success: true,
                data: "error due to invalid fields in email"
            })
        }
        const userInfo = userModel(req.body);
        const result = await userInfo.save();

        return res.status(200).json({
            success: true,
            data: result
        })

    }
    catch (err) {
        if (err.code == 11000) {
            return res.status(400).json({
                success: false,
                data: "user already exist"
            })
        }
        return res.status(400).json({
            success: false,
            data: err.message
        })

    }
    return res.status(200).json({
        success: true,
        data: {}
    })
}

async function signin(req, res) {
    try {
        let { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                staus: false,
                response: "accesed the function"
            })
        }

        try {
            const User =await userModel.findOne({
                email
            }).select('+password');

            if (!User || password !== User.password) {
                return res.status(400).json({
                    staus: false,
                    response: "pass match error"
                });
            }

            // const token = user.jwtToken();
            const token = User.jwtToken();
            User.password = undefined;

            const cookieOption = {
                maxAge: 24 * 60 * 60 * 1000,
                httpOnly: true
            }
            res.cookie("token", token, cookieOption);
            res.status(200).json({
                success: true,
                data: User
            });
        }
        catch (err) {
            return res.status(400).json({
                staus: false,
                response: err.message
            });
        }
    }
    catch (err) {
        return res.status(400).json({
            staus: false,
            response: "failed signin"
        })
    }

}
module.exports = { signup, signin }; 