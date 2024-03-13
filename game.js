/*******************************************************/
// worlds hardest game clone
/*******************************************************/
let currentScreen = 'game'
const PLAYERSPEED = 3;
/*******************************************************/
// setup()
/*******************************************************/

function setup() {
    cnv = new Canvas(800,400,'fullscreen');
    
    const PLAYERWIDTH = 22;
    const PLAYERHEIGHT = 22;
    const PLAYERSPAWNY = 200;
    const PLAYERSPAWNX = 100;
    
    const SPAWNPOINTWIDTH = 114;
    const SPAWNPOINTHEIGHT = 133;
    const SPAWNPOINTY = 200;
    const SPAWNPOINTX = 100;
    
    const WALKINGAREAWIDTH = 400;
    const WALKINGAREAHEIGHT = 266;
    const WALKINGAREAY = 200;
    const WALKINGAREAX = 400;
    
    const ENDPOINTWIDTH = 114
    const ENDPOINTHEIGHT = 133
    const ENDPOINTY = 200
    const ENDPOINTX = 700
    
    bridgeArea = new Sprite(400, 200, 500, 70, 'n');
    bridgeArea.color = 'white'
    
    walkingArea = new Sprite(WALKINGAREAX, WALKINGAREAY, WALKINGAREAWIDTH, WALKINGAREAHEIGHT, 'n');
    walkingArea.color = 'white'
    
    spawnPoint = new Sprite(SPAWNPOINTX, SPAWNPOINTY, SPAWNPOINTWIDTH, SPAWNPOINTHEIGHT, 'n');
    spawnPoint.color = 'lightgreen'
    
    endPoint = new Sprite(ENDPOINTX, ENDPOINTY, ENDPOINTWIDTH, ENDPOINTHEIGHT, 'n');
    endPoint.color = 'lightgreen'
    
    player = new Sprite(PLAYERSPAWNX, PLAYERSPAWNY , PLAYERWIDTH, PLAYERHEIGHT, 'd');
    player.color = 'red';
    
}

/*******************************************************/
// draw()
/*******************************************************/

function draw() {
    if(currentScreen == 'game'){
        gameScreen()
    }
}
function gameScreen(){
    player.vel.x=0;
    player.vel.y=0;
    background('gray');
    if (kb.pressing('d')){
        player.vel.x=PLAYERSPEED;
    }
    if (kb.pressing('a')){
        player.vel.x=0-PLAYERSPEED;
    }
    if (kb.pressing('w')){
        player.vel.y=0-PLAYERSPEED;
    }
    if (kb.pressing('s')){
        player.vel.y=PLAYERSPEED;
    }
}
