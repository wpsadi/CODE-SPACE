interface takePhoto {
    cameraMode: string,
    filter: string,
    burst: number,
}

interface story{
    createStory():void
}

class Instagram implements takePhoto {
    constructor(
        public cameraMode: string, 
        public filter: string, 
        public burst: number){}

        
}

class YT implements takePhoto,story {
    constructor(
        public cameraMode: string, 
        public filter: string, 
        public burst: number,
        VID:string)
        {}

        createStory():void{
            console.log("Short Created")
        }

        
}

export{}