var trex, trex_correndo, solo;
var soloimg
function preload(){
  soloimg  = loadImage('solo2.png')
  //fazer animação do T-Rex correndo
  trex_correndo = loadAnimation('trex1.png','trex3.png','trex4.png');
  
}

function setup(){
  
  //cria a tela
  createCanvas(600,200);
  
  //cria sprite do T-Rex
  trex = createSprite(50,60,20,50);
  trex.scale = 0.5;
  trex.x = 50;
  
  //adiciona a animação de T-Rex correndo ao sprite
  trex.addAnimation('correndo', trex_correndo);
  
  //cria solo
  solo = createSprite(300,190,1200,20);
  solo.addImage ('solo',soloimg)
  //aprendendo sobre console.log
  //escreve o nome do jogo no terminal
  console.log("T-Rex corredor");
  
}

function draw(){

  //fundo branco
  background("white");
  
  //desenha os sprites
  drawSprites();
  
  //T-Rex pula ao apertar espaço
  if(keyDown('space')){
      trex.velocityY = -10; 
    }
  if (solo.x<0){
solo.x = solo.width /2

}

    solo.velocityX = -6
  
  //gravidade
  trex.velocityY = trex.velocityY + 1;
  trex.collide(solo);
  //Registra a posição Y do T-Rex no reminal
  console.log(trex.y);
}
