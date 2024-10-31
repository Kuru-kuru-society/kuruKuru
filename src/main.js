import { Application, Graphics } from "pixi.js";

(async()=>{
    const app = new Application();
    
    await app.init({
        resizeTo:window,
        backgroundColor: 0xfff000 ,
        antialias:true
    });

    app.canvas.style.position ='absolute';

    const rectangle = new Graphics();

    rectangle.rect(0,(innerHeight/2)+100,innerWidth,innerHeight/2)
    .fill({
        color:0x000000,
        alpha:0.99
    });

    app.stage.addChild(rectangle);

    document.body.appendChild(app.canvas);
})();