
let app = new PIXI.Application({
    width: 1000,
    height: 600,
    backgroundColor: 0x061639,
    resolution: 1,
    antialias: true,
    transparsent: true
});
document.body.appendChild(app.view);
PIXI.loader
    .add("./hw.json")
    // .on("progress",loadProgresshandler)
    .load(loadOver);
// function loadProgresshandler(loader,reosurce){
//     console.log(reosurce.url);
//     console.log(loader.progress+"%");
// };
function loadOver() {
    let resources = PIXI.loader.resources;
    let id = PIXI.loader.resources["./hw.json"].textures;
    //bruce
    let bruceArr = [];
    for (let i = 1; i <= 16; i++) {
        bruceArr.push(id["bruce_" + i + ".png"])
    }
    // console.log(bruceArr)
    let bruce = new PIXI.extras.AnimatedSprite(bruceArr);
    app.stage.addChild(bruce);
    bruce.position.set(480, 450);
    bruce.scale.set(.4, .4);
    bruce.anchor.set(.5, .5);
    bruce.loop = false;
    bruce.animationSpeed = 0.15;

    //btn
    let btnArr = [];
    for (let i = 1; i < 6; i++) {
        btnArr.push(id["btn_" + i + ".png"])
    }
    let startBtn = new PIXI.extras.AnimatedSprite(btnArr);
    app.stage.addChild(startBtn);
    startBtn.scale.set(.4, .4);
    startBtn.anchor.set(.5, .5);
    startBtn.position.set(650, 560);
    startBtn.interactive = true;
    startBtn.loop = false;
    startBtn.buttonMode = true;
    startBtn.animationSpeed = 0.5;
    //btn play 
    function goStart() {
        startBtn.gotoAndPlay(0);
        bruce.gotoAndPlay(0);

        app.ticker.add((delta) => {
            console.log(bruce.currentFrame)
            if (bruce.currentFrame === 3) {
                TweenMax.to(bruce, 1, {
                    bezier: [
                        {y: 230}, 
                        {y: 450}
                    ],
                    ease: Power1.easeInOut
                });
            }
            if (bruce.currentFrame === 7) {
                TweenMax.to(light, 1, {
                    bezier: [
                        {rotation: .4}, 
                        {rotation: -.4},
                        {rotation: .2},
                        {rotation: -.1},
                        {rotation: .1},
                        {rotation: -.1},
                        {rotation: 0}
                    ]
                });
            }
            if (bruce.currentFrame === 7) {
                TweenMax.to(lightning, 1, {
                    bezier: [
                        {rotation: .4,alpha:1}, 
                        {rotation: -.4,alpha:.8},
                        {rotation: .2,alpha:.2},
                        {rotation: -.1,alpha:.9},
                        {rotation: .1,alpha:0},
                        {rotation: -.1,alpha:.3},
                        {rotation: .1, alpha:0.1},
                        {rotation: 0, alpha:0.0}
                    ]
                });
            }
        })

        bruce.onComplete = () => {
            app.ticker.stop();
        };

        app.ticker.start();
    }

    startBtn.on('pointerdown', goStart);
    //light
    let light = new PIXI.Sprite(id["lamp.png"]);
    app.stage.addChild(light);
    light.scale.set(.4, .4);
    light.anchor.set(.5, 0);
    light.position.set(470, 0);         
    //lightning
    let lightning = new PIXI.Sprite(id["shock.png"]);
    app.stage.addChild(lightning);
    lightning.scale.set(.4, .4);
    lightning.anchor.set(.5, -0.8);
    lightning.position.set(470, 20);
    lightning.alpha=0
};
