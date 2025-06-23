// Creating variables
var CrashBanditX=560,CrashBanditY=560,FighterX=1000,FighterY=530,Fighter2X=0,Fighter2Y=530,Fighter3X=1100,Fighter3Y=530,bulletX=1000, bulletY=530,bullet2X=1000, bullet2Y=530,bullet3X=0,bullet3Y=530,bullet4X=0,bullet4Y=530,bullet5X=1000,bullet5Y=530,bullet6X=0,bullet6Y=530,bullet7X=1000,bullet7Y=530,jivoti=20, kills=0,bulletgenX=0,bulletgenY=530,bulletgen2X=770,bulletgen2Y=530;

function update() {
    Fighter3X=Fighter3X-3;
    Fighter2X=Fighter2X+3;
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
if(Fighter2X>=800){
Fighter2X=0;
}
if(Fighter3X<=0){
Fighter3X=1100;
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
bullet4X=bullet4X+6;
 if(bullet4X>800){
    bullet4X=Fighter2X;
    bullet4Y=Fighter2Y;
    }
bullet5X=bullet5X-6;
if(bullet5X<=0){
bullet5X=bulletgen2X;
bullet5Y=bulletgen2Y;
}
bullet6X=bullet6X+6;
 if(bullet6X>800){
    bullet6X=Fighter3X;
    bullet6Y=Fighter3Y;
    }
bullet7X=bullet7X-6;
if(bullet7X<=0){
bullet7X=Fighter3X;
bullet7Y=Fighter3Y;
}
if(jivoti>20){
jivoti=20;
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
    if(areColliding(bullet4X,bullet4Y,18,13,CrashBanditX,CrashBanditY,30,30)){
    jivoti=jivoti-1;
    bullet4X=Fighter2X;
    }   
if(areColliding(CrashBanditX,CrashBanditY,30,30,Fighter2X,Fighter2Y,30,30)){
Fighter2X=0;
jivoti=jivoti+2;
kills=kills+1;
}
if(areColliding(bullet5X,bullet5Y,18,13,CrashBanditX,CrashBanditY,30,30)){
    jivoti=jivoti-1;
    bullet5X=bulletgen2X;
    }   
if(areColliding(bullet6X,bullet6Y,18,13,CrashBanditX,CrashBanditY,30,30)){
    jivoti=jivoti-1;
    bullet6X=Fighter3X;
    }   
if(areColliding(CrashBanditX,CrashBanditY,30,30,Fighter3X,Fighter3Y,30,30)){
Fighter3X=0;
jivoti=jivoti+2;
kills=kills+1;
}
if(areColliding(bullet7X,bullet7Y,18,13,CrashBanditX,CrashBanditY,30,30)){
    jivoti=jivoti-1;
    bullet7X=Fighter3X;
    }   
}

function draw() {
    // This is how you draw a rectangle
    context.fillStyle='darkred';
    context.fillRect(0,0,800,560);
     context.fillStyle='#157935';
    context.fillRect(CrashBanditX,CrashBanditY,30,30);
    context.fillStyle='grey';
    context.fillRect(0,560,1000,300);
    context.fillRect(bulletX,bulletY,18,13);
    context.fillRect(bullet2X,bullet2Y,18,13);
    context.fillRect(bullet3X,bullet3Y,18,13); 
    context.fillRect(bullet4X,bullet4Y,18,13);
    context.fillRect(bullet5X,bullet5Y,18,13);
    context.fillRect(bullet6X,bullet6Y,18,13);
    context.fillRect(bullet7X,bullet7Y,18,13);
    context.fillStyle='black';
    context.fillRect(FighterX,FighterY,30,30);
    context.fillRect(Fighter2X,Fighter2Y,30,30);
    context.fillRect(Fighter3X,Fighter3Y,30,30);
    context.fillStyle='lightred';
    context.fillRect(bulletgenX,bulletgenY,30,30);
    context.fillRect(bulletgen2X,bulletgen2Y,30,30);
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
Fighter2Y=1000;
Fighter3Y=1000;
}
if(kills>=100){
context.fillStyle="#266268";
context.fillRect(0,0,800,600);
context.fillStyle="yellow";
context.font='100px Title';
context.fillText("CONGRATS!",130,300);
context.font='40px Title';
context.fillText("You have completed Crash Bandit Demo!",130,400);
FighterY=1000;
Fighter2Y=1000;
Fighter3Y=1000;
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
