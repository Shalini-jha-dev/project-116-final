noseX = 0;
noseY = 0;
choice ="Moustache";
function submit(){
    choice = document.getElementById("filters").value ;
    if(choice=="Moustache")
    {
        document.body.style.backgroundImage = "url('background.jpg')";
        preload();
    }
    else if (choice=="Lipstick")
    {
        document.body.style.backgroundImage = "url('background2.jpg')";  
        preload();
    }

}

function preload(){

    img = loadImage("https://i.postimg.cc/259M93Kr/m.png");

    if (choice=="Moustache")
    {
        img = loadImage("https://i.postimg.cc/259M93Kr/m.png");
    }
    else if(choice == "Lipstick")
    {
        img =  loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
    }
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("posenet is initialised");
}

function gotPoses(results){
      if (results.length > 0){
           console.log(results);
           noseX = results[0].pose.nose.x ; 
           noseY = results[0].pose.nose.y ;
           console.log("nose_x = " + noseX);
           console.log("nose_y = " + noseY);
      }
}

function draw(){
   image(video, 0, 0, 300, 300);
   //circle(noseX, noseY, 20);
   if (choice=="Moustache")
   {
        image(img, noseX-15, noseY+20, 30, 30); 
   }
   else if(choice == "Lipstick")
    {
        image(img, noseX-15, noseY+25, 30, 30);   
    }
}

function take_snapshot(){
    save("MyFilterImage.png");
}