/*******************************************************/
// worlds hardest game clone
/*******************************************************/
let currentScreen = 'game';
const PLAYERSPEED = 2.5;
let blueBalls;
/*******************************************************/
// setup()
/*******************************************************/

function setup() {
    cnv = new Canvas(800,400,'fullscreen');
    
    const PLAYERWIDTH = 20;
    const PLAYERHEIGHT = 20;
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
    
    const ENDPOINTWIDTH = 114;
    const ENDPOINTHEIGHT = 133;
    const ENDPOINTY = 200;
    const ENDPOINTX = 700;
    
    const BRIDGEAREAWIDTH = 500;
    const BRIDGEAREAHEIGHT =50;
    const BRIDGEAREAY = 200;
    const BRIDGEAREAX = 400;
    
    bridgeArea = new Sprite(BRIDGEAREAX, BRIDGEAREAY, BRIDGEAREAWIDTH, BRIDGEAREAHEIGHT, 'n');
    bridgeArea.color = 'white'
    
    walkingArea = new Sprite(WALKINGAREAX, WALKINGAREAY, WALKINGAREAWIDTH, WALKINGAREAHEIGHT, 'n');
    walkingArea.color = 'white'
    
    spawnPoint = new Sprite(SPAWNPOINTX, SPAWNPOINTY, SPAWNPOINTWIDTH, SPAWNPOINTHEIGHT, 'n');
    spawnPoint.color = 'lightgreen'
    
    endPoint = new Sprite(ENDPOINTX, ENDPOINTY, ENDPOINTWIDTH, ENDPOINTHEIGHT, 'n');
    endPoint.color = 'lightgreen'
    
    player = new Sprite(PLAYERSPAWNX, PLAYERSPAWNY , PLAYERWIDTH, PLAYERHEIGHT, 'd');
    player.color = 'red';
    
    upperBalls = new Group();
    upperBalls.d = 20;
    upperBalls.x = (i) => i * 80 + 260;
	upperBalls.y = 90;
	upperBalls.color = 'blue';
	upperBalls.amount = 5;
	upperBalls.collider ='n';
    
    lowerBalls = new Group();
    lowerBalls.d = 20;
    lowerBalls.x = (i) => i * 75 + 225;
	lowerBalls.y = 310;
	lowerBalls.color = 'blue';
	lowerBalls.amount = 5;
    lowerBalls.collider ='n';
    
    upperBallsMove();
    lowerBallsMove();
}

/*******************************************************/
// draw()
/*******************************************************/

function draw() {
    if(currentScreen == 'start'){
        startScreen()
    }
    if(currentScreen == 'game'){
        gameScreen()
    }
    if(currentScreen == 'end'){
        endScreen()
    }
}
function startScreen(){
    
}
function gameScreen(){
    
    player.vel.x=0;
    player.vel.y=0;
    background('gray');
    if (kb.pressing('d')){
        player.vel.x=PLAYERSPEED;
    }
    if (kb.pressing('a')){
        player.vel.x=-PLAYERSPEED;
    }
    if (kb.pressing('w')){
        player.vel.y=-PLAYERSPEED;
    }
    if (kb.pressing('s')){
        player.vel.y=PLAYERSPEED;
    }
}
async function upperBallsMove() {
	await upperBalls.move(220,'down',3);
	await upperBalls.move(220,'up',3);
    upperBallsMove();
}
async function lowerBallsMove() {
	await lowerBalls.move(220,'up',3);
	await lowerBalls.move(220,'down',3);
    lowerBallsMove();
}
function endScreen(){
    
}
