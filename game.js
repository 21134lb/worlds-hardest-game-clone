/*******************************************************/
// worlds hardest game clone
/*******************************************************/
let currentScreen = 'game';
const PLAYERSPEED = 3;
const BALLSPEED = 3.5;

const SPAWNPOINTWIDTH = 115;
const SPAWNPOINTHEIGHT = 130;
const SPAWNPOINTY = 200;
const SPAWNPOINTX = 100;

let blueBalls;
let upperBallsDirection = 'down';
/*******************************************************/
// setup()
/*******************************************************/

function setup() {
    cnv = new Canvas(800,400,'fullscreen');
    
    const PLAYERWIDTH = 20;
    const PLAYERHEIGHT = 20;
    const PLAYERSPAWNY = 200;
    const PLAYERSPAWNX = 100;
    
    const WALKINGAREAWIDTH = 400;
    const WALKINGAREAHEIGHT = 260;
    const WALKINGAREAY = 200;
    const WALKINGAREAX = 400;
    
    const ENDPOINTWIDTH = 115;
    const ENDPOINTHEIGHT = 130;
    const ENDPOINTY = 200;
    const ENDPOINTX = 700;
    
    const BRIDGEAREAWIDTH = 500;
    const BRIDGEAREAHEIGHT =50;
    const BRIDGEAREAY = 200;
    const BRIDGEAREAX = 400;
    
    ballToucherBot = new Sprite (400, 320, 500, 1,'n')
    ballToucherTop = new Sprite (400, 80, 500, 1,'n')
    
    bridgeArea = new Sprite(BRIDGEAREAX, BRIDGEAREAY, BRIDGEAREAWIDTH, BRIDGEAREAHEIGHT, 'n');
    bridgeArea.color = 'white'
    
    walkingArea = new Sprite(WALKINGAREAX, WALKINGAREAY, WALKINGAREAWIDTH, WALKINGAREAHEIGHT, 'n');
    walkingArea.color = 'white'
    
    spawnPoint = new Sprite(SPAWNPOINTX, SPAWNPOINTY, SPAWNPOINTWIDTH, SPAWNPOINTHEIGHT, 'n');
    spawnPoint.color = 'lightgreen'
    
    endPoint = new Sprite(ENDPOINTX, ENDPOINTY, ENDPOINTWIDTH, ENDPOINTHEIGHT, 'n');
    endPoint.color = 'lightgreen'
    
    walkWallTop = new Sprite(400, 70, 400, 1,'k')
    walkWallBot = new Sprite(400, 330, 400, 1,'k')
    walkWallLeftTop = new Sprite(200, 120, 1, 100,'k')
    walkWallLeftBot = new Sprite(200, 280, 1, 100,'k')
    walkWallRightTop = new Sprite(600, 120, 1, 100,'k')
    walkWallRightBot = new Sprite(600, 280, 1, 100,'k')
    
    rightBridgeTop = new Sprite(622, 174, 44, 1,'k')
    rightBridgeBot = new Sprite(622, 226, 44, 1,'k')
    
    leftBridgeTop = new Sprite(178, 174, 44, 1,'k')
    leftBridgeBot = new Sprite(178, 226, 44, 1,'k')
    
    spawnWallTop = new Sprite(100, 135, 115,1,'k')
    spawnWallBot = new Sprite(100, 265, 115,1,'k')
    spawnWallLeft = new Sprite(44, 200, 1, 130,'k')
    spawnWallRightBot = new Sprite(156, 245, 1, 40,'k')
    spawnWallRightTop = new Sprite(156, 155, 1, 40,'k')
    
    endWallTop = new Sprite(700, 135, 115, 1,'k')
    endWallBot = new Sprite(700, 265, 115, 1,'k')
    endWallRight = new Sprite(756, 200, 1, 130,'k')
    endWallLeftBot = new Sprite(644, 245, 1, 40,'k')
    endWallLeftTop = new Sprite(644, 155, 1, 40,'k')
    
    player = new Sprite(PLAYERSPAWNX, PLAYERSPAWNY , PLAYERWIDTH, PLAYERHEIGHT, 'd');
    player.color = 'red';
    player.rotationLock =true
    
    balls = new Group();
    
    upperBalls = new balls.Group();
    upperBalls.d = 20;
    upperBalls.x = (i) => i * 80 + 260;
	upperBalls.y = 90;
	upperBalls.color = 'blue';
	upperBalls.amount = 5;
	upperBalls.collider ='n';
    
    lowerBalls = new balls.Group();
    lowerBalls.d = 20;
    lowerBalls.x = (i) => i * 80 + 225;
	lowerBalls.y = 310;
	lowerBalls.color = 'blue';
	lowerBalls.amount = 5;
    lowerBalls.collider ='n';
    
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
    balls.overlaps(player, youDead);
    
    ballToucherBot.overlaps(upperBalls, upperBallsUp);
    ballToucherTop.overlaps(upperBalls, upperBallsDown);
    
}
function upperBallsUp(upperballs, ballToucherBot) {
    upperBalls.vel.y = -BALLSPEED;
    lowerBalls.vel.y = BALLSPEED;
    upperBallsDirection = 'up'
}
function upperBallsDown(upperballs, ballToucherTop) {
    upperBalls.vel.y = BALLSPEED;
    lowerBalls.vel.y = -BALLSPEED;
    upperBallsDirection = 'down'
}

function youDead(balls, player) {
    player.x = SPAWNPOINTX;
    player.y = SPAWNPOINTY;
}
function endScreen(){
    
}
