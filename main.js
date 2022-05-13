function startclassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    model = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/qxM8Qv8Bv/model.json",modelReady);

}
function modelReady()
{
    console.log("Connection stablished successfully");
    model.classify(gotResults);
}
function gotResults(error,results)
{
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("animals").innerHTML = "Detected Animal - "+results[0].label
        document.getElementById("accuracy").innerHTML = "Accuracy - "+(results[0].confidence*100).toFixed(2)
        red = Math.floor(Math.random()*255)
        green = Math.floor(Math.random()*255)
        blue = Math.floor(Math.random()*255)
        document.getElementById("animals").style.color = "rgb("+ red + ","+ green + "," + blue +")"
        document.getElementById("accuracy").style.color = "rgb("+ red + ","+ green + "," + blue +")"

        img = document.getElementById("Animals")

        if (results[0].label == "Cat")
        {
            img.src = "cat.jpeg"

        }else if (results[0].label == "Dog")
        {
            img.src = "Dog.webp"

        }else if (results[0].label == "lion")
        {
            img.src = "lion.webp"

        }else
        {
            img.src = "background sound.jpeg"

        }

    }
}
