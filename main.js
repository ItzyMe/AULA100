var SpeechRecognition=window.webkitSpeechRecognition;//Reconhece e converte fala em texto
//Chamando Api de reconhecimento de voz
var recognition = new SpeechRecognition();//Criando objeto de reconhecimento de voz

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();

}
//Pegar o resultado salvo na variável recognition e aplicar o que está na função abaixo
recognition.onresult()=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;//texto convertido da nossa fala
    document.getElementById("textbox").innerHTML=content;
    console.log(content);

    if(content=="Tire Minha Selfie"){
        console.log("Tirando Selfie");
speak()

    }
if(content=="Não quero selfie"){
    console.log("A pessoa não quer tirar uma foto, será que ela está feia?")
}
    
} 

function speak(){
    //A funcionalidade dessa função speak() é acionar o sistema para dizer o que for escrito dentro 
    //dessa função speak 
    var synth = window.speechSynthesis;//ativando a api que converte texto em fala
    speakData="Tirando sua selfie em 5 segundos"//quando a funcção speak for chamada, ela dirá a frase
    var utterThis = new SpeechSynthesisUtterance(speakData);//converte texto em fala
     synth.speak(utterThis);//passando a var acima para a função speak 
     Webcam.attach(camera); //acionar a camera

}
camera=document.getElementById("camera")
//Configurando e acessando a camera no HTMl
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
})