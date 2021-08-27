function setup(){
    canvas = createCanvas(350,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/VzJH2f8pC/model.json", modelLoaded);
}

function modelLoaded(){
    console.log("modlel loaded");
}

function draw(){
    image(video, 0, 0, 350, 300);
    classifier.classify(video, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("Result_Object_Name").innerHTML = results[0].label;
        document.getElementById("Result_Accuracy_Name").innerHTML = results[0].confidence;
    }
}