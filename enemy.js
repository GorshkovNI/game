export class Enemy{
    constructor(canvasWidth, canvasHeight, context, player){
        this.context = context
        this.player = player

        this.radius = 15

        if(Math.random() < 0.5){
            this.x = Math.random() < 0.5 ? 0-this.radius : canvasWidth + this.radius
            this.y = Math.random() * canvasHeight
        }else{
            this.x = Math.random() * canvasWidth
            this.y = Math.random() < 0.5 ? 0 - this.radius: canvasHeight + this.radius
        }

        this.img = new Image()
    }
}