let PIXI = require('pixi.js');
let render_type = PIXI.utils.isWebGLSupported? "WebGL" : "canvas";

let options = {
    width: 256,
    height: 256,
    antialias: true,
    transparent: false,
    resolution: 1
};

let app = new PIXI.Application(options);

document.body.appendChild(app.view);

app.ticker.add(delta => gameLoop(delta));

function gameLoop(delta) {
    
}