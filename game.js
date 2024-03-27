//world's hardest game clone
let currentScreen = 'start';
const PLAYERSPEED = 3;
const BALLSPEED = 3.5;

const SPAWNPOINTWIDTH = 115;
const SPAWNPOINTHEIGHT = 130;
const SPAWNPOINTY = 200;
const SPAWNPOINTX = 100;

let blueBalls;
let upperBallsDirection = 'down';

let counter = 0;
let timer = 0;
//setup
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
    
    const BRIDGEAREAWIDTH = 490;
    const BRIDGEAREAHEIGHT =50;
    const BRIDGEAREAY = 200;
    const BRIDGEAREAX = 400;
    
    ballToucherBot = new Sprite (400, 320, 500, 1,'n')
    ballToucherTop = new Sprite (400, 80, 500, 1,'n')
    
    spawnPoint = new Sprite(SPAWNPOINTX, SPAWNPOINTY, SPAWNPOINTWIDTH, SPAWNPOINTHEIGHT, 'n');
    spawnPoint.color = 'lightgreen'
    
    endPoint = new Sprite(ENDPOINTX, ENDPOINTY, ENDPOINTWIDTH, ENDPOINTHEIGHT, 'n');
    endPoint.color = 'lightgreen'
    
    bridgeArea = new Sprite(BRIDGEAREAX, BRIDGEAREAY, BRIDGEAREAWIDTH, BRIDGEAREAHEIGHT, 'n');
    bridgeArea.color = 'white'
    
    walkingArea = new Sprite(WALKINGAREAX, WALKINGAREAY, WALKINGAREAWIDTH, WALKINGAREAHEIGHT, 'n');
    walkingArea.color = 'white'
    
    //mainAreaBarriers
    walkWallTop = new Sprite(400, 70, 400, 1,'k')
    walkWallBot = new Sprite(400, 330, 400, 1,'k')
    walkWallLeftTop = new Sprite(200, 120, 1, 100,'k')
    walkWallLeftBot = new Sprite(200, 280, 1, 100,'k')
    walkWallRightTop = new Sprite(600, 120, 1, 100,'k')
    walkWallRightBot = new Sprite(600, 280, 1, 100,'k')
    
    //bridgeBarriers
    rightBridgeTop = new Sprite(622, 174, 44, 1,'k')
    rightBridgeBot = new Sprite(622, 226, 44, 1,'k')
    
    leftBridgeTop = new Sprite(178, 174, 44, 1,'k')
    leftBridgeBot = new Sprite(178, 226, 44, 1,'k')
    
    //spawnpointBarriers
    spawnWallTop = new Sprite(100, 135, 115,1,'k')
    spawnWallBot = new Sprite(100, 265, 115,1,'k')
    spawnWallLeft = new Sprite(44, 200, 1, 130,'k')
    spawnWallRightBot = new Sprite(156, 245, 1, 40,'k')
    spawnWallRightTop = new Sprite(156, 155, 1, 40,'k')
    
    //endPointBarriers
    endWallTop = new Sprite(700, 135, 115, 1,'k')
    endWallBot = new Sprite(700, 265, 115, 1,'k')
    endWallRight = new Sprite(756, 200, 1, 130,'k')
    endWallLeftBot = new Sprite(644, 245, 1, 40,'k')
    endWallLeftTop = new Sprite(644, 155, 1, 40,'k')
    
    //player
    player = new Sprite(PLAYERSPAWNX, PLAYERSPAWNY , PLAYERWIDTH, PLAYERHEIGHT, 'd');
    player.color = 'red';
    player.rotationLock =true
    
    //balls
    balls = new Group();
    
    //upperBalls
    upperBalls = new balls.Group();
    upperBalls.d = 20;
    upperBalls.x = (i) => i * 80 + 260;
	upperBalls.y = 90;
	upperBalls.color = 'blue';
	upperBalls.amount = 5;
	upperBalls.collider ='n';
	
    //lowerBalls
    lowerBalls = new balls.Group();
    lowerBalls.d = 20;
    lowerBalls.x = (i) => i * 80 + 225;
	lowerBalls.y = 310;
	lowerBalls.color = 'blue';
	lowerBalls.amount = 5;
    lowerBalls.collider ='n';
    
    frameRate(60);
}
//draw loop
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

//the place where you start the game
function startScreen(){
    allSprites.visible = false;
    background('black');
    fill('white');
    textSize(50);
    text('Press space to start', 50, 100);
    if (kb.pressing('space')){
        currentScreen = 'game';
    }
}

//the game is playing
function gameScreen(){
    allSprites.visible = true;
    player.vel.x=0;
    player.vel.y=0;
    background('gray');
    timeFunction();
    textSize(50);
    text('time: ' + timer, 30, 50);
    if (kb.pressing('d')||kb.pressing('right')){
        player.vel.x=PLAYERSPEED;
    }
    if (kb.pressing('a')||kb.pressing('left')){
        player.vel.x=-PLAYERSPEED;
    }
    if (kb.pressing('w')||kb.pressing('up')){
        player.vel.y=-PLAYERSPEED;
    }
    if (kb.pressing('s')||kb.pressing('down')){
        player.vel.y=PLAYERSPEED;
    }
    
    balls.overlaps(player, youDead);
    player.overlaps(endPoint, levelComplete);
    
    ballToucherBot.overlaps(upperBalls, upperBallsUp);
    ballToucherTop.overlaps(upperBalls, upperBallsDown);
    
}
//how the timer works 
function timeFunction(){
    counter++;
    if (counter==60){
        counter = 0;
        timer = timer + 1;
    }
}

//makes the balls that are currently at the bottom go up and the top balls go down
function upperBallsUp(upperballs, ballToucherBot) {
    upperBalls.vel.y = -BALLSPEED;
    lowerBalls.vel.y = BALLSPEED;
    upperBallsDirection = 'up'
}

//makes the balls that are currently at the top go down and the bottom balls go up
function upperBallsDown(upperballs, ballToucherTop) {
    upperBalls.vel.y = BALLSPEED;
    lowerBalls.vel.y = -BALLSPEED;
    upperBallsDirection = 'down'
}

//when the player dies it sends them to the spawnpoint
function youDead(balls, player) {
    player.x = SPAWNPOINTX;
    player.y = SPAWNPOINTY;
}

//you have completed level =D
function levelComplete(player, endPoint){
    allSprites.visible = false;
    currentScreen = 'end'
}

//where you win the game
function endScreen(){
    background('black');
    fill('white');
    textSize(50);
    text('you win your final time was: ', 50, 100);
    text(timer + ' seconds', 50, 200);
}
