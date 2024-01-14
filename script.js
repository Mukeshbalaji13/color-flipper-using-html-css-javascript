// --------------------------------SCRIPT FOR hexadecimal-------------------------------- //
var hexcolorbox = document.querySelector('.hex-box');
var hexcode = document.querySelector('.subcode1');
var hexbtn = document.getElementById('hexbutton');
var hexcopybtn = document.querySelector('#hexcopy');

// changing the color of hexadecimal container on clicking the button
function hexfunction() {
    var hexcolorcode = "0123456789ABCDEF";
    var hexcolor = "#";

    for(i=0; i<6; i++){
        hexcolor = hexcolor + hexcolorcode[Math.floor(Math.random()*16)];
    }

    hexcolorbox.style.background = hexcolor;
    hexcode.innerHTML = hexcolor;

    function color(){
        return hexcolor
    }
    hexcode.style.background= color();
    
}
hexbtn.addEventListener("click", hexfunction)

// button for copying the color code of hexadecimal container
function hexcopyfunction() {
    var element = document.querySelector('.subcode1');
    var storage = document.createElement('textarea');
    storage.value = element.innerHTML;
    element.appendChild(storage);
    storage.select();
    document.execCommand('copy');
    element.removeChild(storage);
    var a=document.querySelector(".hexcopydiv");
    a.classList.add("active");
    setTimeout(
        function(){
            a.classList.remove("active");  
        },1500);
    
}
hexcopybtn.addEventListener('click', hexcopyfunction)


// --------------------------------SCRIPT FOR RED GREEN BLUE(RGB)-------------------------------- //
var rgbcolorbox = document.querySelector('.rgb-box');
var rgbcode = document.querySelector('.subcode2');
var rgbbtn = document.getElementById('rgbbutton');
var rgbcopybtn = document.querySelector('#rgbcopy')

//changing the color of RGB container on clicking the button
function rgbfunction() {
    var value1 = Math.floor(Math.random()*255)+1;
    var value2 = Math.floor(Math.random()*255)+1;
    var value3 = Math.floor(Math.random()*255)+1;

    rgbcolor = "rgb" + "(" +value1 + "," + value2 + "," + value3 + ")";
    
    rgbcolorbox.style.background = rgbcolor;
    rgbcode.innerHTML = rgbcolor;

    function color(){
        return rgbcolor
    }
    rgbcode.style.background= color();
}
rgbbtn.addEventListener("click", rgbfunction)

// button for copying the color code of hexadecimal container
function rgbcopyfunction() {
    const element = document.querySelector('.subcode2');
    const storage = document.createElement('textarea');
    storage.value = element.innerHTML;
    element.appendChild(storage);
    storage.select();
    document.execCommand('copy');
    element.removeChild(storage);
    var a=document.querySelector(".rgbcopydiv");
    a.classList.add("active");
    setTimeout(
        function(){
            a.classList.remove("active");  
        },1500);
}
rgbcopybtn.addEventListener('click', rgbcopyfunction)



// --------------------------------SCRIPT FOR HUE SATURATION LIGHTNESS(HSL)-------------------------------- //

var hslcolorbox = document.querySelector('.hsl-box');
var hslcode = document.querySelector('.subcode3');
var hslbtn = document.getElementById('hslbutton');
var hslcopybtn = document.querySelector('#hslcopy')

//changing the color of HSL container on clicking the button
function hslfunction() {
    var value1 = Math.floor(Math.random()*360)+1;
    var value2 = Math.floor(Math.random()*100)+1;
    var value3 = Math.floor(Math.random()*100)+1;

    var hslcolor = "hsl" + "(" + value1 + "," + value2 +"%," + value3 + "%)";

    hslcolorbox.style.background = hslcolor;
    hslcode.innerHTML = hslcolor;

    function color(){
        return hslcolor
    }
    hslcode.style.background= color();
}
hslbtn.addEventListener("click", hslfunction)

// button for copying the color code of hexadecimal container
function hslcopyfunction() {
    const element = document.querySelector('.subcode3');
    const storage = document.createElement('textarea');
    storage.value = element.innerHTML;
    element.appendChild(storage);
    storage.select();
    document.execCommand('copy');
    element.removeChild(storage);
    var a=document.querySelector(".hslcopydiv");
    a.classList.add("active");
    setTimeout(
        function(){
            a.classList.remove("active");  
        },1500);
}
hslcopybtn.addEventListener('click', hslcopyfunction)

