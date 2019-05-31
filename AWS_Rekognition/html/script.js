text = document.getElementById("text");
var session = new QiSession();

session.service("ALMemory").then(function (ALMemory){
    ALMemory.raiseEvent('RekognitionDone', "");
    ALMemory.subscriber("JSEvent").then(function (subscriber){
        subscriber.signal.connect(function (state){
            if(state=="StartAWSRequest"){
                AWSRequest();
            }
        })
    })
}, function (error){
    console.log("An error occured: ", error);
});

function AWSRequest(){
    //get image taken by pepper
    //convert image to bytes
    //send bytes to php that sends them to Rekognition

    imgPath = "~/recordings/cameras/image.jpg";

    var BodyElement = document.body;
    //BodyElement.style.backgroundImage = 'url(../../../../../../recordings/cameras/image.jpg)'
    image = document.getElementById("foto");
    image.src = imgPath;

    session.service("ALMemory").then(function(ALMemory){
        ALMemory.raiseEvent('RekognitionDone', "");
    })
}

session.service('ALMemory').then(function(ALMemory){
    ALMemory.raiseEvent('RekognitionDone', "");
})