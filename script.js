var btn1 = document.getElementById ( 'btn1' );
var btn2 = document.getElementById ( 'btn2' );
var btn3 = document.getElementById ( 'btn3' );
var btn4 = document.getElementById ( 'btn4' );

var slider = document.querySelector( '.slider' );


var btn5 = document.getElementById ( 'btn5' );
var cover = document.querySelector( '.cover' );


btn1.onclick = function (){
    this.style.background = 'white';
    btn2.style.background = 'transparent';
    btn3.style.background = 'transparent';
    btn4.style.background = 'transparent';
    slider.style.marginLeft = '0px';

}

btn2.onclick = function (){
    this.style.background = 'white';
    btn1.style.background = 'transparent';
    btn3.style.background = 'transparent';
    btn4.style.background = 'transparent';
    slider.style.marginLeft = '-1200px';

}

btn3.onclick = function (){
    this.style.background = 'white';
    btn1.style.background = 'transparent';
    btn2.style.background = 'transparent';
    btn4.style.background = 'transparent';
    slider.style.marginLeft = '-2400px';


}

btn4.onclick = function (){
    this.style.background = 'white';
    btn1.style.background = 'transparent';
    btn2.style.background = 'transparent';
    btn3.style.background = 'transparent';
    slider.style.marginLeft = '-3600px';

}


btn5.onclick = function (){
    this.style.background = 'white';
    cover.style.height = '500px';




}

// button.onclick = function (){

//     if (document.forms.fir.value != "" && document.forms.las.value != "" && document.forms.ema.value != "" && document.forms.pas.value != "" && document.forms.pas1.value != "" && document.forms.pho.value != "" && document.forms.no3.value != "")
//     {
//         location.href = "index.html";
//     }
// }