interface User {
    email:string,
    userId:number,
    // startTrail:()=>string
    startTrail():string,
    getCoupon(couponname:String,value:number):number
}

interface User{ // this is called reopening a interface [fancy term]
    githubToken:string
}

interface admin extends User{
    role:"Admin"|"User"|"Learner"
}

const me: User = {userId:2, email:"aditya@gmail.com",
startTrail : ()=>{
    return "trrail started"
},
githubToken:"my-gitub-token",
getCoupon: (name:"a", off:10) => {
    return Number(1) ;
}
}








export {}