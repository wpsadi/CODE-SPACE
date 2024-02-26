class user{
    public email:string
    private name:string
    readonly city: string = "Delhi"
    constructor(email:string,name:string){
        this.email = email
        this.name =name
    }
}

const newUser = new user("aditya@gmail.com","aditya")

class userDecl{

    // private _courseCount = 1 /// this restricts the availability to the this class onlyy
    protected _courseCount = 1 // this allows access in InheritedClasses while also keeping it private outside all the classes{inherited and this class also}

    readonly city: string = "Delhi"
    constructor(public email:string,private name:string,public id:string){
        this.email = email
        this.name =name
        this.id = id
    }

    get getAppleEmail():string{
        return `appe: ${this.email}`
    }

    get CourseCount():number{
        return this._courseCount
    }

    private deleteToken(){
        console.log("deleted token")
    }

    set courseCount(courseNum){
        if (courseNum <=1){
            throw new Error("Course count should be more than 1")
        }
    }
    // setters donot access any rerturn type
}


class subUserDecl extends userDecl{
    // privates of userDecl won't be accessible
    isFamily:boolean = true
    changeCourse(){
        this._courseCount = 5
    }
}

const x = new userDecl("aditya@gmail.com","aditya","2")

export {}