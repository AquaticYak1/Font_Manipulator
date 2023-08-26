function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560,100);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('#C0C0C0');
}

function modelLoaded(){
    console.log('PoseNet Is Initialised!');
}

function gotPoses(results){
    if(results.length  > 0){
        console.log(results);
    }
}