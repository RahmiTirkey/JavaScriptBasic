const setOfWords = [
    "My name is Rashmi Vikash Gupta and i'm a software developer.",
    "hope you are having fun this is a simple game you can make.",
    "if you want to source code then link is given in the description so you can create your own version of this challenge."
];

const msg = document.getElementById('msg');
const typeWords = document.getElementById('mywords');
const btn = document.getElementsByClassName("mainbtn")[0];

let startTime, endTime;

const palyGame = () => {
    let randomNumber = Math.floor(Math.random() * setOfWords.length);
    //console.log(randomNumber);
    msg.innerText = setOfWords[randomNumber];
    let date =new Date();
    startTime = date.getTime();
    btn.innerText="Done";
}
const endPlay = () =>{
    let date =new Date();
    endTime = date.getTime();
    let totalTime = ((endTime-startTime)/1000);
    console.log(totalTime);

    let totalStr= typeWords.value;
    let wordCount = wordCounter(totalStr);
    //console.log();

    let speed = Math.round((wordCount/totalTime)*60);
     
    let finalMsg = "You typed total at " +speed+ " words per minutes ";

    finalMsg += campareWords(msg.innerText,totalStr);
    msg.innerText = finalMsg;
}
const campareWords = (str1, str2) =>{
 let words1 = str1.split(" ");
 let words2 = str2.split(" ");
 let cnt = 0;
  words1.forEach(function (item,index){
    if(item == words2[index]){
        cnt++;
    }
  })

  let errorWords = (words1.length - cnt);{
      return (cnt +" correct out of " + words1.length + " words and total number of error are "+ errorWords + ".");
  }
}
const wordCounter = (str) =>{
 let response = str.split(" ").length;
 console.log(response);
 return response;
}
//console.log(" btn " +btn);
if(btn){
     btn.addEventListener('click', function () {
        if (this.innerText == "Start") {
            typeWords.disabled = false;
            palyGame();
        }else if(this.innerText=="Done"){
                typeWords.disabled=true;
                btn.innerText="Start";
                endPlay();
            }
    })
}
