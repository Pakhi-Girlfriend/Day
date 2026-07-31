



const text =
"Welcome to our little world. A place filled with memories, smiles, laughter, and every little moment that made me fall for you even more. ❤️";

let i = 0;

function typeWriter(){

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,35);

    }

}

typeWriter();


// Floating Hearts

const hearts = document.querySelector(".hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.className="heart";

    heart.innerHTML="💖";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*30)+"px";

    heart.style.animationDuration=(6+Math.random()*6)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },12000);

}

setInterval(createHeart,350);


// Button

const landing = document.querySelector(".container");
const timeline = document.getElementById("timeline");

document.getElementById("beginBtn").onclick = () => {

    landing.style.display = "none";
    timeline.style.display = "block";

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

};

const memories = [

{
photo:"assets/photo2.jpg",
title:"Our Cute Selfie 📸",
text:"I still smile whenever I look at this picture."
},

{
photo:"assets/photo1.jpg",
title:"Innu Si Pakhi 🕊️",
text:"You're the softest, sweetest part of my day. Just seeing your smile makes everything feel a little brighter."
},

{
photo:"assets/photo2.jpg",
title:"Our Cute Selfie 📸",
text:"I still smile whenever I look at this picture."
},

{
photo:"assets/photo1.jpg",
title:"Innu Si Pakhi 🕊️",
text:"You're the softest, sweetest part of my day. Just seeing your smile makes everything feel a little brighter."
},

{
photo:"assets/photo2.jpg",
title:"Our Cute Selfie 📸",
text:"I still smile whenever I look at this picture."
},

{
photo:"assets/photo1.jpg",
title:"Innu Si Pakhi 🕊️",
text:"You're the softest, sweetest part of my day. Just seeing your smile makes everything feel a little brighter."
},

{
photo:"assets/photo3.jpg",
title:"Cutiee 🌸",
text:"I honestly don't think you realize how adorable you are. Every little thing you do makes my heart melt."
},

{
photo:"assets/photo4.jpg",
title:"Pakhuu 💕",
text:"You're my favorite person, my comfort place, and the reason behind so many genuine smiles."
},

{
photo:"assets/photo5.jpg",
title:"Vidhii Bacha ❤️",
text:"No matter what happens, you'll always be the most precious person in my life, and I'll always be proud of you."
},

{
photo:"assets/photo6.jpeg",
title:"Kuchu Puchu 🥺",
text:"You're so effortlessly lovable that even your smallest moments become my favorite memories."
},

{
photo:"assets/photo7.jpeg",
title:"Laddu 🍬",
text:"You're sweeter than every dessert in the world, and every day with you feels like the happiest gift I could ever receive."
},

];

const container=document.getElementById("memoryContainer");

memories.forEach(memory=>{

container.innerHTML+=`

<div class="memory">

<img src="${memory.photo}">

<div class="memoryText">

<h2>${memory.title}</h2>

<p>${memory.text}</p>

</div>

</div>

`;

});

const cards=document.querySelectorAll(".memory");

function reveal(){

cards.forEach(card=>{

const top=card.getBoundingClientRect().top;

if(top<window.innerHeight-100){

card.classList.add("show");

}

});

}

window.addEventListener("scroll",reveal);

reveal();

const letters = document.getElementById("letters");

document.getElementById("toLetters").onclick = () => {

    timeline.style.display = "none";

    letters.style.display = "block";

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

};


const loveLetters=[

{

title:"To My Favourite Girl ❤️",

text:"Happy Girlfriend's Day. Thank you for making my life brighter every single day. Every memory with you is my favourite memory."

},

{

title:"A Tiny Secret 🌸",

text:"Sometimes I randomly smile while looking at our pictures... and people probably think I'm crazy."

},

{

title:"My Favourite Thing 💕",

text:"It's your smile. It somehow makes everything feel okay."

},

{

title:"Forever",

text:"No matter where life takes us, I hope we keep making beautiful memories together."

}

];

const letterCards=document.querySelectorAll(".letterCard");

const modal=document.getElementById("letterModal");

const heading=document.getElementById("letterHeading");

const content=document.getElementById("letterContent");

letterCards.forEach(card=>{

card.onclick=()=>{

const id=card.dataset.id;

heading.innerText=loveLetters[id].title;

content.innerText=loveLetters[id].text;

modal.style.display="flex";

};

});

document.getElementById("closeLetter").onclick=()=>{

modal.style.display="none";

};

window.onclick=(e)=>{

if(e.target==modal){

modal.style.display="none";

}

};

const teddy = document.getElementById("teddy");
const teddyBear = document.getElementById("teddyBear");
const hugText = document.getElementById("hugText");

teddyBear.onclick = () => {

    teddyBear.style.transform = "scale(1.25)";

    hugText.innerHTML = "🫂 Sending you the biggest virtual hug ❤️";

    setTimeout(() => {

        teddyBear.style.transform = "scale(1)";
        hugText.innerHTML = "I wish I could hug you for real ❤️";

    },1500);

};

document.getElementById("toTeddy").onclick = () => {

    letters.style.display = "none";

    teddy.style.display = "flex";

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

const game = document.getElementById("game");
const gameArea = document.getElementById("gameArea");

let score = 0;

function createFallingHeart(){

    const heart=document.createElement("div");

    heart.className="fallingHeart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*90+"%";

    heart.style.animationDuration=(3+Math.random()*2)+"s";

    gameArea.appendChild(heart);

    heart.onclick=()=>{

        score++;

        document.getElementById("score").innerHTML=score+" / 15";

        heart.remove();

        if(score>=15){

            clearInterval(gameLoop);

            document.getElementById("toGift").style.display="inline-block";

        }

    };

    setTimeout(()=>{

        heart.remove();

    },5000);

}

const gameLoop=setInterval(createFallingHeart,700);

document.getElementById("toGame").onclick=()=>{

    teddy.style.display="none";

    game.style.display="block";

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

const gift=document.getElementById("gift");

document.getElementById("toGift").onclick=()=>{

    game.style.display="none";

    gift.style.display="block";

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

document.getElementById("giftBox").onclick=()=>{

    document.getElementById("giftBox").innerHTML="🎊";

    document.getElementById("giftContent").style.display="block";

};