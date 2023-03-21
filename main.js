function preload(){

    clown_nose = loadImage('https://i.postimg.cc/HL69vYGX/images-removebg-preview.png')
}

var noseX = 0;
var noseY = 0;

function setup(){

    canvas = createCanvas(500,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(500,500);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){

    image(video , 0 , 0 , 500, 500);
    image(clown_nose, noseX, noseY, 90, 50);

}

function take_snapshot(){

    save("myFilterImage.png");
}

function modelLoaded(){

    console.log("postNet is initialised")
}

function gotPoses(results){

    if(results.length>0){
        console.log(results)
        noseX = results[0].pose.nose.x - 45;
        noseY = results[0].pose.nose.y -10;
        console.log("noseX ="+results[0].pose.nose.x);
        console.log("nosey ="+results[0].pose.nose.y);
    }
}