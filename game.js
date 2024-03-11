/*******************************************************/
// worlds hardest game clone
/*******************************************************/
let currentScreen = 'game'
let PLAYERSPEED = 0;
/*******************************************************/
// setup()
/*******************************************************/

function setup() {
    cnv = new Canvas('2:1');
    
    const PLAYERWIDTH = width/36;
    const PLAYERHEIGHT = height/18;
    const PLAYERSPAWNY = height/2;
    const PLAYERSPAWNX = width/8;
    PLAYERSPEED = height/144;
    
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
