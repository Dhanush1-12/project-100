Webcam.set({
    width:350,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90
});
camera=document.getElementById ("camera");

var speechrecognition=window.webkitSpeechRecognition;
var recognition=new speechrecognition();

function start(){
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    content=event.results[0][0].transcript;
    if(content=="take my selfie"){
        speak();
    }
    
}
function speak(){
    synth=window.speechSynthesis;
    speak_data="Taking selfie in 5 seconds";
    utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
        image_id="selfie1";
        take_snapshot();
        speak_data="Taking selfie in 10 seconds";
    utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    },5000);
    setTimeout(function(){
        image_id="selfie2";
        take_snapshot();
        speak_data="Taking selfie in 15 seconds";
    utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    },10000);
    setTimeout(function(){
        image_id="selfie3";
        take_snapshot();
        speak_data="Taking selfie in 20 seconds";
    utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    },15000);
    
}
function take_snapshot()
{
    Webcam.snap(function (data_uri){
        if(image_id=="selfie1"){
            document.getElementById ("result1").innerHTML="<img id='snapshot' src='"+data_uri+"'>";
        }
        if(image_id=="selfie2"){
            document.getElementById ("result2").innerHTML="<img id='snapshot' src='"+data_uri+"'>";
        }
        if(image_id=="selfie3"){
            document.getElementById ("result3").innerHTML="<img id='snapshot' src='"+data_uri+"'>";
        }
    });

}