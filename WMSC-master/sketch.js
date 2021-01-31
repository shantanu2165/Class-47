
var canvas;
var gamestate;

var test;

var turtleimage, oilimage, trashimage, barrelimage, backdropimage;
var obstaclegroup, turtle, oil, trash, barrel, backdrop;

var obstacle;
//var obstaclegroup

function preload(){
	
	
	backdropimage = loadImage("Images/underwater.jpg");
    turtleimage = loadImage("Images/download.png");
    oilimage = loadImage("Images/oil.png");
    trashimage = loadImage("Images/trash.png");
    barrelimage = loadImage("Images/barrel.png");
}

function setup(){
	canvas = createCanvas(1000,518);
	
	var backdrop = createSprite(500,100,300,300);
	backdrop.addImage("backdrop1", backdropimage);
	backdrop.scale = 1;

	turtle = createSprite(100,200,10,10);
	turtle.addImage("turtle1", turtleimage);
	turtle.scale = 0.3;
	turtle.setCollider("circle",40,0,100)

   	obstaclegroup = new Group();

	gamestate = "Play";


	var test = createSprite(500,520,10,10);
}



function draw(){
	turtle.debug = true;

	
	if(gamestate === "Play"){
		
	
		if(keyDown("w")){
			turtle.y = turtle.y - 4;

		}

		if(keyDown("s")){
			turtle.y = turtle.y + 4;
		}
		//turtle.collide(obstaclegroup);

		if( turtle.isTouching(obstaclegroup)){
			gamestate = "End"
		}

		spawnObstacle();
	}

	if(gamestate === "End"){

		obstaclegroup.setVelocityXEach(0);

	}
	
	
	

drawSprites();
}

function spawnObstacle(){
	
	if(frameCount % 80 === 0){
		obstacle = createSprite(1200,100,10,10);
		obstacle.debug = true;
		
		obstacle.velocityX = - 4;
		obstacle.y = Math.round(random(10,470));
		obstacle.lifetime = 300;
		obstaclegroup.add(obstacle);


		if(obstacle.y < 70){
			obstacle.addImage(oilimage);
			obstacle.scale = 0.4;
			obstacle.setCollider("circle",0,0,70);
		}
		
		if(obstacle.y < 470 && obstacle.y > 60){
			obstacle.addImage(trashimage);
			obstacle.scale = 0.08;
			obstacle.setCollider("circle",0,0,400);
		}

		if(obstacle.y >= 470){
			obstacle.addImage(barrelimage);
			obstacle.scale = 0.1;
			obstacle.setCollider("circle",0,0,70  );
		}

	}
	

}
