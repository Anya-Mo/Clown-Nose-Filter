nose_x=0;
nose_y=0;
function preload() {
    clown_nose=loadImage("https://i.postimg.cc/t4FKD69G/Clown-Nose.png");
}
function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses);
}
function take_Snapshot() {
    save("filter.png");
}
function draw() {
    image(video,0,0,300,300);
    //fill("red");
    //stroke("black")
    //circle(nose_x,nose_y,25);
    image(clown_nose,nose_x,nose_y,100,75);
}
function modelLoaded() {
    console.log("Posenet Model Loaded");
}
function gotPoses(results) {
    if (results.length>0) {
        console.log(results);
        nose_x=results[0].pose.nose.x-50;
        nose_y=results[0].pose.nose.y-50;
        console.log("Nose X Axis = "+nose_x);
        console.log("Nose Y Axis = "+nose_y);
    }
}