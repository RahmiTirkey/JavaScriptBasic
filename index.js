const setOfWords = [
    "My name is rashmi vikash gupta and i'm a software developer.",
    "hope you are having fun this is a simple game you can make.",
    "if you want to source code then link is given in the description so you can create your own version of this challenge."
];

const msg = document.getElementById('msg');
const typeWords = document.getElementById('mywords');
const btn = document.getElementById('btn');
let startTime, endTime;

const palyGame = () => {
    let randomNumber = Math.floor(Math.random() * setOfWords);
    //console.log(randomNumber);
    msg.innerText = setOfWords[randomNumber];
    //let date =new Date();
    //startTime = date.getTime();
    //btn.innerText="Done";
}
/*const endPlay = () =>{
    let date =new Date();
    endTime = date.getTime()
}*/
if(btn){
     btn.addEventListener('click', function () {
        if (this.innerText == "Start") {
            typeWords.disabled = false;
            palyGame();
        }/*else if(this.innerText=="Done"){
                typeWords.disabled=true;
                btn.innerText="Start";
                endPlay();
            }*/
    })
}
