var flip = document.getElementsByClassName('back-face')
var counter = document.getElementById('count')
var winning = document.getElementById('win')
var cong = document.getElementById('cong')
var congBack = document.getElementById('cong-back')
var match = [];
var conf = [];
var fCard;
var sCard;
var win = 0;
var count = 0;
for(let i = 0 ; i < flip.length ; i++){
flip[i].addEventListener('click',function(e){
    count++;
    counter.innerHTML = "You Clicked " + count + " Times!"
    console.log(count,"irr")
    if(match.length < 2 && !match.includes(i) && !conf.includes(i)){
        flip[i].setAttribute("src","img/"+i+".png")
        match.push(i)

    }
    if(match.length == 2){
        fCard = match[0]
        sCard = match[1]
        console.log(fCard)
        console.log(sCard)
        if(((fCard + 6) == sCard) || ((sCard + 6) == fCard)){
            console.log('same')
            conf.push(fCard)
            conf.push(sCard)
            console.log(conf,"conf")
            match = []
            win++
            console.log(win,"win")
        }else{
            setTimeout(function(){
                flip[match[0]].setAttribute("src","img/logo.png")
                flip[match[1]].setAttribute("src","img/logo.png")
                match = []
            },1000)
        }
    }
    console.log(win)
    if(win == 6){
        winning.innerHTML = "Congratulations!! You did it in " + count + " Clicks"
        cong.style.display = "flex"
        congBack.style.display = "block"
    }
})}



