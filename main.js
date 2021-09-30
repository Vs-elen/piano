function input_fn(elem) {
    [...document.querySelectorAll('.pressed')].forEach(activeElement => {
        activeElement.classList.remove('pressed');
    });
    elem.classList.add('pressed');
}


document.addEventListener("keydown", function(event) {
    if (event.code == "KeyA") {
        input_fn( document.querySelector('.aKey'))

        let audioA = new Audio("white_keys/A.mp3");
        audioA.play();
        console.log("The 'A' key is pressed");

    }
    else if (event.code == "KeyS") {
        input_fn( document.querySelector('.sKey'))
        let audioS = new Audio("white_keys/S.mp3");
        audioS.play();
        console.log("The 'S' key is pressed");
    }
    else if (event.code == "KeyD") {
        input_fn( document.querySelector('.dKey'))
        let audioD = new Audio("white_keys/D.mp3");
        audioD.play();
        console.log("The 'D' key is pressed");
    }
    else if (event.code == "KeyF") {
        input_fn( document.querySelector('.fKey'))
        let audioF = new Audio("white_keys/F.mp3");
        audioF.play();
        console.log("The 'F' key is pressed");
    }
    else if (event.code == "KeyG") {
        input_fn( document.querySelector('.gKey'))
        let audioG = new Audio("white_keys/G.mp3");
        audioG.play();
        console.log("The 'G' key is pressed");
    }
    else if (event.code == "KeyH") {
        input_fn( document.querySelector('.hKey'))
        let audioH = new Audio("white_keys/H.mp3");
        audioH.play();
        console.log("The 'H' key is pressed");
    }
    else if (event.code == "KeyJ") {
        input_fn( document.querySelector('.jKey'))
        let audioJ = new Audio("white_keys/J.mp3");
        audioJ.play();
        console.log("The 'J' key is pressed");
    }
    else if (event.code == "KeyW") {
        input_fn( document.querySelector('.wKey'))
        let audioW = new Audio("black_keys/W.mp3");
        audioW.play();
        console.log("The 'W' key is pressed");
    }
    else if (event.code == "KeyE") {
        input_fn( document.querySelector('.eKey'))
        let audioE = new Audio("black_keys/E.mp3");
        audioE.play();
        console.log("The 'E' key is pressed");
    }
    else if (event.code == "KeyT") {
        input_fn( document.querySelector('.tKey'))
        let audioT = new Audio("black_keys/T.mp3");
        audioT.play();
        console.log("The 'T' key is pressed");
    }
    else if (event.code == "KeyY") {
        input_fn( document.querySelector('.yKey'))
        let audioY = new Audio("black_keys/Y.mp3");
        audioY.play();
        console.log("The 'Y' key is pressed");
    }
    else if (event.code == "KeyU") {
        input_fn( document.querySelector('.uKey'))
        let audioU = new Audio("black_keys/U.mp3");
        audioU.play();
        console.log("The 'U' key is pressed");
    }
    else {
        console.log("Warning message");
    }
});