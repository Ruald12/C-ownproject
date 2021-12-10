class Resources {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.w = 20;
        this.h = 20;
    }

    display(){
      fill("gray")
      rect(this.x,this.y,this.w,this.h);
    }


}