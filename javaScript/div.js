/*-----------------
------------------------Generate solution when window is loaded-----*/
let ranNum= ()=>{

    const divEqu = document.querySelector("#divEqu");
    const ranSoluOne = document.querySelector("#ranSoluOne");
    const ranSoluTwo = document.querySelector("#ranSoluTwo");
    const ranSoluThree = document.querySelector("#ranSoluThree");
    const ranSoluFour = document.querySelector("#ranSoluFour");
    const ranSoluFive = document.querySelector("#ranSoluFive");
    const ranSoluSix = document.querySelector("#ranSoluSix");
    const ranSoluSeven = document.querySelector("#ranSoluSeven");
    const ranSoluEight = document.querySelector("#ranSoluEight");
    const ranSoluNin = document.querySelector("#ranSoluNin");
    const answer = document.querySelector("#answer");
    /*-----------------
    ------------------------randon solution-----*/
    do {
      randomOne = Math.floor( Math.random() * 25)+1;
      randomTwo = Math.floor( Math.random() * 8)+2;
      answ=parseInt(randomOne)/parseInt(randomTwo);
    } while (randomOne%randomTwo!=0);

    divEqu.innerHTML=`${randomOne}/${randomTwo}`;

    let ranSoluArr = []
    while(ranSoluArr.length < 8){
        let r = Math.floor(Math.random()*100) + 1;
        if(ranSoluArr.indexOf(r) === -1 ||ranSoluArr.indexOf(r) === parseInt(answ) ) ranSoluArr.push(r);
    }
    ranSoluOne.innerHTML = `${ranSoluArr[0]}`;
    ranSoluTwo.innerHTML = `${ranSoluArr[1]}`;
    ranSoluThree.innerHTML = `${ranSoluArr[2]}`;
    ranSoluFour.innerHTML = `${ranSoluArr[3]}`;
    ranSoluFive.innerHTML = `${ranSoluArr[4]}`;
    ranSoluSix.innerHTML = `${ranSoluArr[5]}`;
    ranSoluSeven.innerHTML = `${ranSoluArr[6]}`;
    ranSoluEight.innerHTML = `${ranSoluArr[7]}`;
    answer.innerHTML = `${answ}`;

    netScore.innerHTML=localStorage.getItem("getSubScores");
}
window.addEventListener("load",ranNum);
/*-----------------
------------------------animation moving box, moving every two second-----*/
const gameBox = document.querySelector("#gameBox");
const ansBox = document.querySelector(".ansBox");
const boxOne = document.querySelector("#boxOne");
const boxTwo = document.querySelector("#boxTwo");
const boxThree = document.querySelector("#boxThree");
const boxFour = document.querySelector("#boxFour");
const boxFive = document.querySelector("#boxFive");
const boxSix = document.querySelector("#boxSix");
const boxSeven = document.querySelector("#boxSeven");
const boxEight = document.querySelector("#boxEight");
const boxNine = document.querySelector("#boxNine");

const highMoving = parseInt(gameBox.offsetHeight)-2*parseInt(ansBox.offsetHeight);
const widthMoving = parseInt(gameBox.offsetWidth)-2*parseInt(ansBox.offsetWidth);

const moveOne =()=>{
  let heightArr = []
  while(heightArr.length < 9){

      let r = Math.floor(Math.random()*(parseInt(highMoving)/parseInt(ansBox.offsetHeight))) + 1;

      if(heightArr.indexOf(r) === -1) heightArr.push(r);
  }
  let widthArr = []
  while(widthArr.length < 9){
      let r = Math.floor(Math.random()*(parseInt(widthMoving)/parseInt(ansBox.offsetWidth))) + 1;


      if(widthArr.indexOf(r) === -1) widthArr.push(r);
  }
  let backgroundImg=["../image/1.png",
           "../image/2.PNG",
           "../image/3.PNG"
       ];
  boxOne.style.top=`${heightArr[0]*parseInt(ansBox.offsetHeight)}px`;
  boxOne.style.left=`${widthArr[0]*parseInt(ansBox.offsetWidth)}px`;
  let oneImg = Math.floor((Math.random() * 3));
  console.log(oneImg);
  boxOne.style.backgroundImage = 'url("' + backgroundImg[oneImg] + '")';
  boxTwo.style.top=`${heightArr[1]*parseInt(ansBox.offsetHeight)}px`;
  boxTwo.style.left=`${widthArr[1]*parseInt(ansBox.offsetWidth)}px`;
  let twoImg = Math.floor((Math.random() * 3));
  boxTwo.style.backgroundImage = 'url("' + backgroundImg[twoImg] + '")';
  boxThree.style.top=`${heightArr[2]*parseInt(ansBox.offsetHeight)}px`;
  boxThree.style.left=`${widthArr[2]*parseInt(ansBox.offsetWidth)}px`;
  let threeImg = Math.floor((Math.random() * 3));
  boxThree.style.backgroundImage = 'url("' + backgroundImg[threeImg] + '")';
  boxFour.style.top=`${heightArr[3]*parseInt(ansBox.offsetHeight)}px`;
  boxFour.style.left=`${widthArr[3]*parseInt(ansBox.offsetWidth)}px`;
  let fourImg = Math.floor((Math.random() * 3));
  boxFour.style.backgroundImage = 'url("' + backgroundImg[fourImg] + '")';
  boxFive.style.top=`${heightArr[4]*parseInt(ansBox.offsetHeight)}px`;
  boxFive.style.left=`${widthArr[4]*parseInt(ansBox.offsetWidth)}px`;
  let fiveImg = Math.floor((Math.random() * 3));
  boxFive.style.backgroundImage = 'url("' + backgroundImg[fiveImg] + '")';
  boxSix.style.top=`${heightArr[5]*parseInt(ansBox.offsetHeight)}px`;
  boxSix.style.left=`${widthArr[5]*parseInt(ansBox.offsetWidth)}px`;
  let sixImg = Math.floor((Math.random() * 3));
  boxSix.style.backgroundImage = 'url("' + backgroundImg[sixImg] + '")';
  boxSeven.style.top=`${heightArr[6]*parseInt(ansBox.offsetHeight)}px`;
  boxSeven.style.left=`${widthArr[6]*parseInt(ansBox.offsetWidth)}px`;
  let sevenImg = Math.floor((Math.random() * 3));
  boxSeven.style.backgroundImage = 'url("' + backgroundImg[sevenImg] + '")';
  boxEight.style.top=`${heightArr[7]*parseInt(ansBox.offsetHeight)}px`;
  boxEight.style.left=`${widthArr[7]*parseInt(ansBox.offsetWidth)}px`;
  let eightImg = Math.floor((Math.random() * 3));
  boxEight.style.backgroundImage = 'url("' + backgroundImg[eightImg] + '")';
  boxNine.style.top=`${heightArr[8]*parseInt(ansBox.offsetHeight)}px`;
  boxNine.style.left=`${widthArr[8]*parseInt(ansBox.offsetWidth)}px`;
  let nineImg = Math.floor((Math.random() * 3));
  boxNine.style.backgroundImage = 'url("' + backgroundImg[nineImg] + '")';
}
setInterval(moveOne,2000);
/*-----------------
------------------------Make equation moving with cursor-----*/

var equation = document.getElementById('divEqu');

window.onmousemove = function (e) {
    var x = e.pageX,
        y = e.pageY;
    equation.style.top = (y + 20) + 'px';
    equation.style.left = (x + 20) + 'px';
};

/*-----------------
------------------------count Score, miss, hit and store the data-----*/
let missOne=document.querySelector("#missOne");
let missTwo=document.querySelector("#missTwo");
let missTree=document.querySelector("#missTree");
let missFour=document.querySelector("#missFour");
let missFive=document.querySelector("#missFive");
let missSix=document.querySelector("#missSix");
let missSeven=document.querySelector("#missSeven");
let missEight=document.querySelector("#missEight");
let hit=document.querySelector("#hit");
let missedTotal=document.querySelector("#missed");
let hitsTotal=document.querySelector("#hits");
let netScore=document.querySelector("#scores");
let missNum=0;
let hitNum=0;

let missCount = () =>{
  missNum++;
  ranNum();
  missedTotal.innerHTML=parseInt(missNum);//+parseInt(localStorage.getItem("getSubMiss"));
  hitsTotal.innerHTML=parseInt(hitNum);//+parseInt(localStorage.getItem("getSubHit"));
  myDivScore= parseInt(netScore.innerHTML) + parseInt(hitNum)-parseInt(missNum);
  if (myDivScore<0) {
    myDivScore=0;
  }
  netScore.innerHTML=myDivScore;
  localStorage.setItem("level3Hit", hitsTotal.innerHTML);
  localStorage.setItem("level3Miss", missedTotal.innerHTML);
  localStorage.setItem("FinalScore", netScore.innerHTML);
  if (missedTotal.innerHTML >=6) {
    localStorage.setItem("FinalScore", netScore.innerHTML);
    location.replace("summary.html");
  }
}
let hitCount = () =>{
  hitNum++;
  ranNum();
  missedTotal.innerHTML=parseInt(missNum);//+parseInt(localStorage.getItem("getSubMiss"));
  hitsTotal.innerHTML=parseInt(hitNum);//+parseInt(localStorage.getItem("getSubHit"));
  myDivScore= parseInt(netScore.innerHTML) + parseInt(hitNum)-parseInt(missNum);
  if (myDivScore<0) {
    myDivScore=0;
  }
  netScore.innerHTML=myDivScore;
  localStorage.setItem("level3Hit", hitsTotal.innerHTML);
  localStorage.setItem("level3Miss", missedTotal.innerHTML);
  localStorage.setItem("FinalScore", netScore.innerHTML);
}

boxOne.addEventListener("click", missCount);
boxTwo.addEventListener("click", missCount);
boxThree.addEventListener("click", missCount);
boxFour.addEventListener("click", missCount);
boxFive.addEventListener("click", missCount);
boxSix.addEventListener("click", missCount);
boxSeven.addEventListener("click", missCount);
boxEight.addEventListener("click", missCount);
boxNine.addEventListener("click", hitCount);

/*-----------------
------------------------timer-----*/
let timer = ()=> {
    window.markDate = new Date();
    updateClock();
}
let updateClock = ()=> {
    let currDate = new Date();
    let diff = currDate - markDate;
    let timeElap= document.querySelector("#timer").innerHTML = parseInt(diff/1000);
    if (timeElap==150) {
      location.replace("summary.html");
    }
    setTimeout(function() {updateClock()}, 1000);
}
timer();
