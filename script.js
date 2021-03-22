const genrateBtn = document.querySelector("a");
const text = document.querySelector("p");
const textarea = document.querySelector("textarea");

function RandomHexColor(){
    var chars = "0123456789abcdef";
    var colorLength = 6;
    var color = "";

    for(var i = 0; i < colorLength; i++){
        var randomColor = Math.floor(Math.random() * chars.length);
        color += chars.substring(randomColor, randomColor + 1);
    }

    return "#" + color;
}

    var color = RandomHexColor();
    text.innerHTML = color;
    textarea.value = color;
    document.body.style.background = color;


    setInterval(function(){
        var color = RandomHexColor();
    text.innerHTML = color;
    textarea.value = color;
    document.body.style.background = color;
    }, 10000)

function GenrateRandom(){
    var color = RandomHexColor();
    text.innerHTML = color;
    textarea.value = color;
    document.body.style.background = color;
}

function ClosePop(){
    document.querySelector(".content").classList.remove("open");
}

function CopyPaste(){
    var copyText = document.getElementById("hex-code");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.querySelector(".content .copyh").innerHTML = " Copied the hex code - " + copyText.value + " !! ";
    document.querySelector(".content").classList.add("open");
    setInterval(function(){
        ClosePop();
    }, 5000)
}