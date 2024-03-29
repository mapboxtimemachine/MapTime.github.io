document.getElementById("blub").style.display = "none" //none or block
let guesses = 0
function StartNewGame(){
    document.getElementById("gameover").style.display = "none"
    document.getElementById("winner").style.display = "none"
    newRandomYear();
    document.getElementById("in7").src = `./flags/world19t20century/${year}.png`
    guesses = 0;
    document.getElementById("u9").innerHTML = ""
}
autocomplete(document.getElementById("in5"),photosNumberStr)

StartNewGame();


function Guess(){
    console.log("gues")
    guesses++;
    let list = document.getElementById("u9");
    let guessN = parseInt(document.getElementById("in5").value);
    document.getElementById("in5").value = "";
    if(guessN === year){
        list.innerHTML += `<li class="g3" >${guessN}<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12px" height="12px" viewBox="0 0 36 36" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="#00ff00" d="M34.459 1.375a2.999 2.999 0 0 0-4.149.884L13.5 28.17l-8.198-7.58a2.999 2.999 0 1 0-4.073 4.405l10.764 9.952s.309.266.452.359a2.999 2.999 0 0 0 4.15-.884L35.343 5.524a2.999 2.999 0 0 0-.884-4.149z"/>
        </svg></li>`
        document.getElementById("winner").style.display = "block"
        document.getElementById("x4").innerHTML = `You have guessed the right answer in ${guesses} guesses`
        document.getElementById("x5").innerHTML = `The right answer is indeed ${year}`
    }
    if(guessN < year){
        // more
        list.innerHTML += `<li class="g3" >${guessN}<svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C12.2652 3 12.5196 3.10536 12.7071 3.29289L19.7071 10.2929C20.0976 10.6834 20.0976 11.3166 19.7071 11.7071C19.3166 12.0976 18.6834 12.0976 18.2929 11.7071L13 6.41421V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V6.41421L5.70711 11.7071C5.31658 12.0976 4.68342 12.0976 4.29289 11.7071C3.90237 11.3166 3.90237 10.6834 4.29289 10.2929L11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3Z" fill="#00ff00"/>
    </svg></li>`
    }
    if(guessN > year){
       //less
       list.innerHTML += `<li class="g3" >${guessN}<svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" fill="none">
       <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3Z" fill="#ff0000"/>
   </svg></li>`
    }

    if (guesses >= 5){
        // alert("gameover")
        document.getElementById("gameover").style.display = "block"
        document.getElementById("v5").innerHTML = year
    }
}