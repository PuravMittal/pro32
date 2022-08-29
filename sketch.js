//constants
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//variables
var engine, world;
var backgroundImg;
var hour;

var bg = "sunrise.png";

function preload() {
    //to change day and night background
    getBackgroundImg();
    
}

function setup(){

    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    /*fill("black");
    textSize(90);
    if(hour>=12){
        text("Time : "+ hour%12 + " PM", 50,100);
    }else if(hour==0){
        text("Time : 12 AM",100,100);
    }else{
        text("Time : "+ hour%12 + " AM", 50,100);
    }*/
    
}

async function getBackgroundImg(){
    //  fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    console.log(response);
    
    //change the data in JSON format and store it in variable responseJSON
    var responseJSON = await response.json();
    console.log(responseJSON);
    
     //fetch datetime from responseJSON
    var datetime = responseJSON.datetime;
      
     // slice the datetime to extract hour
    var hour = datetime.slice(11,13);
    
    if(hour>=0 && hour<18 ){
        bg = "sunrise.png";
    }
    else{
        bg="sunset.png"
    }
    
    backgroundImg = loadImage(bg);
 

}
