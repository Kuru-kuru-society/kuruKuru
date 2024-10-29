import { Application } from "pixi.js";

(async()=>{
    const app = new Application();

    await app.init({
        resizeTo:window,
        backgroundColor: 0x15181C ,
        antialias:true
    });

    app.canvas.style.position ='absolute';

    document.body.appendChild(app.canvas);
})();