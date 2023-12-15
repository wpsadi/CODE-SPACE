const signup = function(req,res){
    //code here
    // const {name, email} = req.body;

    // console.log(name,email);
    return res.status(200).json({
        success : true
    });
}

module.exports = {signup};