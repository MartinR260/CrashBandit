// Creating variables
var CrashBanditX=560,CrashBanditY=560,FighterX=1000,FighterY=530,bulletX=1000, bulletY=530,bullet2X=1000, bullet2Y=530,jivoti=8, kills=0;

function update() {
FighterX=FighterX-3;
CrashBanditX = CrashBanditX+(mouseX-CrashBanditX)/20;
CrashBanditY=CrashBanditY+2;
if(areColliding(CrashBanditX,CrashBanditY,30,30,0,560,1000,300)){
CrashBanditY=530;
}
if(CrashBanditX>770){
CrashBanditX=770;
}
if(CrashBanditY<=380){
CrashBanditY=560;
}
if(FighterX<=0){
FighterX=1000;
}
bulletX=bulletX-6;
if(bulletX<=0){
bulletX=FighterX;
bulletY=FighterY;
}
bullet2X=bullet2X+6;
 if(bullet2X>800){
    bullet2X=FighterX;
    bullet2Y=FighterY;
    }
if(jivoti>8){
jivoti=8;
}
if(areColliding(CrashBanditX,CrashBanditY,30,30,FighterX,FighterY,30,30)){
FighterX=1200;
jivoti=jivoti+1;
kills=kills+1;
}
if(areColliding(bulletX,bulletY,18,13,CrashBanditX,CrashBanditY,30,30)){
FighterX=1000;
bulletX=FighterX;
jivoti=jivoti-1;
}
if(areColliding(bullet2X,bullet2Y,18,13,CrashBanditX,CrashBanditY,30,30)){
    jivoti=jivoti-1;
    FighterX=1000;
    bullet2X=FighterX;
    }    
}

function draw() {
    // This is how you draw a rectangle
    context.fillStyle='darkred';
    context.fillRect(0,0,800,560);
    context.font='20px Title';
    context.fillStyle='yellow';
    context.fillText("If you`ve noticed, the bullets are faster. This is their typical speed.",0,200);
    context.fillStyle='#157935';
    context.fillRect(CrashBanditX,CrashBanditY,30,30);
    context.fillStyle='grey';
    context.fillRect(0,560,1000,300);
    context.fillRect(bulletX,bulletY,18,13);
    context.fillRect(bullet2X,bullet2Y,18,13);
    context.fillStyle='black';
    context.fillRect(FighterX,FighterY,30,30);
    context.fillStyle='lightgreen';
    context.font='20px Title';
    context.fillText("Lives:",50,400);
    context.fillText(jivoti,110,432);
    context.font='20px Title';
    context.fillText("Fighters destroyed:",270,280);
    context.fillText(kills,450,312);
    if(jivoti<1){
context.fillStyle="black";
context.fillRect(0,0,800,600);
context.fillStyle="red";
context.font='100px Title';
context.fillText("YOU DIED!",130,300);
context.font='30px Title';
context.fillText("Try again(by clicking refresh)!",130,400);
FighterY=1000;
}
if(kills>=12){
context.fillStyle="#266268";
context.fillRect(0,0,800,600);
context.fillStyle="yellow";
context.font='100px Title';
context.fillText("YOU WON!",130,300);
FighterY=1000;
}
};

function keyup(key) {
    CrashBanditY=CrashBanditY-60;
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};
