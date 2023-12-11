// Get the modal and menu elements
let modal = document.getElementById("myModal");
let menu = document.getElementById("menu");

let closeModal = document.getElementById("closeModal");

menu.onclick = function() {
    modal.style.display = "block";
}

closeModal.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Hide the preloader after 3 seconds (3000 milliseconds)
 setTimeout(function(){
  document.querySelector('.preloader').style.display = 'none';
  document.querySelector('#main-content').style.display = 'block';
}, 2000);

// Generate Text
const genText = document.getElementById("gen-text")
genText.addEventListener("click", function() {
  let messages = [
    "I loved you, I love you and I will love you forever!",
    "My love for you is timeless",
    "Without you, I am not complete",
    "Im thinking about you",
    "I love you",
    "Were perfect for each other",
    "I cannot live without your love.",
    "I would be lost without you",
    "I adore you",
    "You make my smile",
    "One day closer",
    "I cant wait to hold you",
    "Well see each other soon",
    "You complete me",
    "You are my soulmate",
    "Im proud to be yours",
    "You make me a better person",
    "I found love when I found you",
    "I think about you 24/7",
    "You inspire me",
    "Be mine",
    "You make my heart melt",
    "Be true to me & Ill do the same",
    "You have my heart, keep it safe",
    "You mean the world to me",
    "I love you more than I did yesterday",
    "Your love is all Ill ever need",
    "Thank god I found you",
    "All you need is love",
    "I love you to the moon and back",
    "San ka punta? To the moon, roadtrip, broom broom",
    "No regrets, just love",
    "My dreams came true with you",
    "To me, you are perfect",
    "You are my greatest blessing",
    "You are the only exception",
    "I love you",
    "I will always love you",
    "I will love you Forever",
    "I want you in my life for today, tomorrow and forever.",
    "I have fallen in love many times. But every time, it was with you!",
    "If I get paid for loving you, I would be a millionaire by now!",
    "I will love you till my last breath, no matter what life brings before us!",
    "You are the only reason why I survive; I love you so so much!",
    "The more days go, the more I fall in love with you. You are the Queen of my heart.",
    "I will be your number ONE fan",
    "If you ask me when I want to be with you, my answer will be now and forever.",
    "For me, coming home means coming back to you.",
    "I wish I was there with you! Sending my love!",
    "Im loving you more each and every day.",
    "You call it madness, but I call it love.",
    "My love for you isnt something that can be measured. I just know my heart is full of it.",
    "Im having one of those days that make me realize how lost Id be without you.",
    "Something made me think of you today. Now I cant stop thinking of you.",
    "No matter where I go, or what I do, Im thinking of you.",
    "Just so you know, Im madly in love with you.",
    "My soul and your soul are forever tangled.",
    "I am really blessed to have you in my life. I love you so much.",
    "It was hard to get out of bed this morning, because I just want to hold you forever.",
    "Its always better when were together.",
    "I need you like a heart needs a beat.",
    "You are the reason for my smile.",
    "You are my greatest adventure.",
    "I wish I could tell you how much I love you, but there are no words for it.",
    "Your flaws are perfect for the heart thats meant to love you.",
    "I am in you and you in me, mutual in divine love.",
    "Come live in my heart and pay no rent.",
    "The world is so small compared to my love for you.",
    "I cant wait to see you again",
    "If I tell you I love you, can I keep you forever?",
    "I love you and I like you",
    "I miss you",
    "You wanna know who I'm in love with? Read the first word again.",
    "I absolutely adore you. Just FYI.",
    "Stop making me think about you! I'm busy",
    "Your texts make my day even better.",
    "Come to my dreams if you can. I'll kiss you there.",
    "You make me the happiest person on Earth.",
    "Every time you text me, I get butterflies.",
    "Such a stressful day. Want to blow off some steam tonight?",
    "I love you with all my heart.",
    "I cant wait to come home to you tonight",
    "Love = you + me.",
    "Forever and always, without a doubt, I am yours.",
    "I'm so lucky you're mine.",
    "Wanna know something? I love you.",
    "I only saw you for a second, but it made my day.",
    "Let it be known that I love you a lot. Wherever you go, I shall follow.",
    "I want to wake up every morning with the scent of your hair!",
    "In my eyes, you are perfect. I adore you.",
    "I want to go on a world tour with my queen someday.",
    "I cant imagine living a life without you. You are my reason to be.",
    "I love you more and more with each and every passing day.",
    "May I dance with you to the tune of a song that lasts forever?",
    "You have no idea the amount of happiness you brought into my life.",
    "I love you like I love my video games. You are really so special!",
    "I would like to fill my calendars with memories of you.",
    "You are like money. The more I get, the more I want!",
    "I might be the luckiest to find my soulmate in you!",
    "I hope to make you happy beyond belief.",
    "You tripped me, so I fell for you.",
    "I have discovered that home too has a smell. You are my home.",
    "To the sun and moon, I love you.",
    "The only thing I want to be an expert at is loving you!",
    "Every atom, molecule, and cell of me loves you.",
    "Im so lucky to have you! I love you forever!",
    "Being in love with you makes every morning worth getting up for.",
    "Its just you and me against the world. I love you!",
    "My love for you is like the water in the ocean. It will never dry up.",
    "I want to be your favorite hello, and hardest goodbye.",
    "To the moon and back, I love you.",
    "I have many reasons to die for, but only one to live for, that is you!",
    "You stole my heart and I dont want it back ever!",
    "Thank you, my love, for making me feel like the most beautiful person in the world.",
    "I am blessed to be with a man like you!",
    "I love you—now and always.",
    "Its you and me against the universe. Were the strongest team there is.",
    "Hold my hand, hold my heart, and hold me forever. I love you",
    "If I know what love is, it is because of you.",
    "You are my forever. I will love you always.",
    "I wish you were here, or I was there, or we were together anywhere",
    "Distance means so little when someone means so much",
    "You bring happiness into my life",
  ]
  const textEl = document.querySelector(".textMessage")
  textEl.textContent = messages[Math.floor( Math.random()*messages.length )]
})

// Backsound Music
const track = document.getElementById("track");
const controlBtn = document.getElementById("play-pause");

function playPause() {
  if (track.paused) {
    track.play();
    //controlBtn.textContent = "Pause";
    controlBtn.className = "pause";
  } else {
    track.pause();
    //controlBtn.textContent = "Play";
    controlBtn.className = "play";
  }
}

controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function () {
  controlBtn.className = "play";
});

