abstract class takePhoto {
    constructor(
        public cameraMode: string, 
        public filter: string, 
        public burst: number){} 

        abstract sepia():void
        getReelTime():number{
            //complex calculation
            return 8
        }

}

//  when absract then we can't create object from that class class but we can do this from  from an inherited Class
class Instagram extends takePhoto {
    constructor(
        public cameraMode: string, 
        public filter: string, 
        public burst: number){
            super(cameraMode,filter,burst)
        } 

        sepia():void{
            console.log("sepia declared")
        }
}

const newXuser = new Instagram ("a","b",4)

newXuser.getReelTime()
