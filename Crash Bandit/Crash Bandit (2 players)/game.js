// Creating variables
var CrashBanditX=560,CrashBanditY=560,CrashBanditX2=220,CrashBanditY2=220,FighterX=1000,FighterY=530,Fighter2X=0,Fighter2Y=530,FighterX3=1000,FighterY3=190,FighterX4=0,FighterY4=190,bulletX=1000, bulletY=530,bullet2X=1000, bullet2Y=530,bullet3X=0,bullet3Y=530,bullet4X=0,bullet4Y=530,bullet5X=1000, bullet5Y=190,bullet6X=1000, bullet6Y=190,jivoti=8,jivoti2=8, kills=0,kills2=0,bulletgenX=0,bulletgenY=530,bulletgenX=0,bulletgenY=190;

function update() {
    Fighter2X=Fighter2X+3;
    FighterX=FighterX-3;
    FighterX4=FighterX4+3;
    FighterX3=FighterX3-3;
    CrashBanditX = CrashBanditX+(mouseX-CrashBanditX)/20;
    CrashBanditY=CrashBanditY+2;
    CrashBanditY2=CrashBanditY2+2;
if(areColliding(CrashBanditX,CrashBanditY,30,30,0,560,1000,300)){
CrashBanditY=530;
}
if(areColliding(CrashBanditX2,CrashBanditY2,30,30,0,220,1000,40)){
CrashBanditY2=190;
}
if(CrashBanditX>770){
CrashBanditX=770;
}
if(CrashBanditX2>770){
CrashBanditX2=770;
}
if(CrashBanditY<=380){
CrashBanditY=560;
}
if(CrashBanditY2<=70){
CrashBanditY2=220;
}
if(FighterX<=0){
FighterX=1000;
}
if(FighterX<=0){
FighterX=1000;
}
if(Fighter2X>=800){
Fighter2X=0;
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
if(jivoti>8){
jivoti=8;
}
if(jivoti2>8){
jivoti2=8;
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
    if(areColliding(bullet3X,bullet3Y,18,13,CrashBanditX,CrashBanditY,30,30)){
    jivoti=jivoti-1;
    bullet3X=bulletgenX;
    }   
if(areColliding(CrashBanditX,CrashBanditY,30,30,Fighter2X,Fighter2Y,30,30)){
Fighter2X=0;
jivoti=jivoti+1;
kills=kills+1;
}
if(areColliding(CrashBanditX2,CrashBanditY2,30,30,FighterX3,FighterY3,30,30)){
FighterX3=1200;
jivoti2=jivoti2+1;
kills2=kills2+1;
}
if(areColliding(bullet4X,bullet4Y,18,13,CrashBanditX2,CrashBanditY2,30,30)){
FighterX3=1000;
bullet4X=FighterX3;
jivoti2=jivoti2-1;
}
    if(areColliding(bullet5X,bullet5Y,18,13,CrashBanditX2,CrashBanditY2,30,30)){
    jivoti2=jivoti2-1;
    FighterX3=1000;
    bullet5X=FighterX3;
    }    
    if(areColliding(bullet6X,bullet6Y,18,13,CrashBanditX2,CrashBanditY2,30,30)){
    jivoti2=jivoti2-1;
    bullet6X=bulletgenX2;
    }   
if(areColliding(CrashBanditX2,CrashBanditY2,30,30,FighterX4,FighterY4,30,30)){
FighterX4=0;
jivoti2=jivoti2+1;
kills2=kills2+1;
}
}

function draw() {
    // This is how you draw a rectangle
    context.fillStyle='darkred';
    context.fillRect(0,0,800,560);
     context.fillStyle='#157935';
    context.fillRect(CrashBanditX,CrashBanditY,30,30);
    context.fillRect(CrashBanditX2,CrashBanditY2,30,30);
    context.fillStyle='grey';
    context.fillRect(0,560,1000,300);
    context.fillRect(0,220,1000,40);
    context.fillRect(bulletX,bulletY,18,13);
    context.fillRect(bullet2X,bullet2Y,18,13);
    context.fillRect(bullet3X,bullet3Y,18,13); 
    context.fillRect(bullet4X,bullet4Y,18,13);
    context.fillRect(bullet5X,bullet5Y,18,13); 
    context.fillRect(bullet6X,bullet6Y,18,13);
    context.fillStyle='black';
    context.fillRect(FighterX,FighterY,30,30);
    context.fillRect(Fighter2X,Fighter2Y,30,30);
    context.fillRect(FighterX3,FighterY3,30,30);
    context.fillRect(FighterX4,FighterY4,30,30);
    context.fillStyle='lightred';
    context.fillRect(bulletgenX,bulletgenY,30,30);
    context.fillStyle='lightgreen';
    context.font='20px Title';
    context.fillText("Lives:",50,300);
    context.fillText(jivoti,110,332);
    context.font='20px Title';
    context.fillText("Fighters destroyed:",270,280);
    context.fillText(kills,450,312);
    context.font='20px Title';
    context.fillText("Lives:",50,100);
    context.fillText(jivoti2,110,132);
    context.font='20px Title';
    context.fillText("Fighters destroyed:",270,80);
    context.fillText(kills2,450,112);
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
}
if(kills>=40){
context.fillStyle="#266268";
context.fillRect(0,0,800,600);
context.fillStyle="yellow";
context.font='100px Title';
context.fillText("YOU WON!",130,300);
FighterY=1000;
Fighter2Y=1000;
}
};

function keyup(key) {
    if(key==32){
    CrashBanditY=CrashBanditY-60;
    }
    if(key==38){
    CrashBanditY2=CrashBanditY2-60;
    }
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};
