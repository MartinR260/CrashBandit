// Creating variables
var CrashBanditX=560,CrashBanditY=560,FighterX=1000,FighterY=530,bulletX=1000, bulletY=530,bullet2X=1000, bullet2Y=530,bullet3X=0, bullet3Y=530,jivoti=8, kills=0,bulletgenX=0,bulletgenY=530;

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
bullet3X=bullet3X+6;
 if(bullet3X>800){
    bullet3X=bulletgenX;
    bullet3Y=bulletgenY;
    }
if(jivoti>8){
jivoti=8;
}
if(areColliding(CrashBanditX,CrashBanditY,30,30,FighterX,FighterY,30,30)){
FighterX=1200;
jivoti=jivoti+2;
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
    if(areColliding(bullet3X,bullet3Y,18,13,CrashBanditX,CrashBanditY,30,30)){
    jivoti=jivoti-1;
    bullet3X=bulletgenX;
    }    
}

function draw() {
    // This is how you draw a rectangle
    context.fillStyle='darkred';
    context.fillRect(0,0,800,560);
    context.font='20px Title';
    context.fillStyle='yellow';
    context.fillText("That is all from me. Now enjoy playing Crash Bandit!",0,200)
     context.fillStyle='#157935';
    context.fillRect(CrashBanditX,CrashBanditY,30,30);
    context.fillStyle='grey';
    context.fillRect(0,560,1000,300);
    context.fillRect(bulletX,bulletY,18,13);
    context.fillRect(bullet2X,bullet2Y,18,13);
    context.fillRect(bullet3X,bullet3Y,18,13);
    context.fillStyle='black';
    context.fillRect(FighterX,FighterY,30,30);
    context.fillStyle='lightred';
    context.fillRect(bulletgenX,bulletgenY,30,30);
    context.fillStyle='lightgreen';
    context.font='20px Title';
    context.fillText("Lives:",50,300);
    context.fillText(jivoti,110,332);
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
if(kills>=16){
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
