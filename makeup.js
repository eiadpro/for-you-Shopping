
var btn5 = document.getElementById ( 'btn5' );
var btn6 = document.getElementById ( 'btn6' );

var cover = document.querySelector( '.cover' );
var car = document.querySelector( '.car' );
var back = document.querySelector( '.back' );
var open=false;
btn6.style.display = ' none' ;


btn5.onclick = function (){
    open=true;
    cover.style.overflow= ('auto');
    // this.style.background = 'white';
    cover.style.height = '700px' ;
    cover.style.width = '400px' ;
    cover.style.background = 'white';
    car.style.display = 'none';
    cover.style.transition = '0.7s' ;
    btn6.style.display = ' inline ' ;
}
btn6.onclick = function(){
    cover.style.overflow= ('hidden');
    
    cover.style.height = '120px' ;
    cover.style.width = '120px' ;
    car.style.display = 'inline';

    cover.style.background = 'transparent';
    cover.style.transition = '0.7s' ;
btn6.style.display = ' none' ;

    
}



var add1=document.getElementById( 'add1');
var add2=document.getElementById( 'add2');
var add3=document.getElementById( 'add3');
var add4=document.getElementById( 'add4');
var add5=document.getElementById( 'add5');
var add6=document.getElementById( 'add6');
var add7=document.getElementById( 'add7');
var add8=document.getElementById( 'add8');
var add9=document.getElementById( 'add9');
var add10=document.getElementById( 'add10');
var add11=document.getElementById( 'add11');
var add12=document.getElementById( 'add12');

var remove1=document.getElementById( 'remove1');
var remove2=document.getElementById( 'remove2');
var remove3=document.getElementById( 'remove3');
var remove4=document.getElementById( 'remove4');
var remove5=document.getElementById( 'remove5');
var remove6=document.getElementById( 'remove6');
var remove7=document.getElementById( 'remove7');
var remove8=document.getElementById( 'remove8');
var remove9=document.getElementById( 'remove9');
var remove10=document.getElementById( 'remove10');
var remove11=document.getElementById( 'remove11');
var remove12=document.getElementById( 'remove12');


var product1=document.querySelector('.product1');
var product2=document.querySelector('.product2');
var product3=document.querySelector('.product3');
var product4=document.querySelector('.product4');
var product5=document.querySelector('.product5');
var product6=document.querySelector('.product6');
var product7=document.querySelector('.product7');
var product8=document.querySelector('.product8');
var product9=document.querySelector('.product9');
var product10=document.querySelector('.product10');
var product11=document.querySelector('.product11');
var product12=document.querySelector('.product12');

product1.style.display='none';
product2.style.display='none';
product3.style.display='none';
product4.style.display='none';
product5.style.display='none';
product6.style.display='none';
product7.style.display='none';
product8.style.display='none';
product9.style.display='none';
product10.style.display='none';
product11.style.display='none';
product12.style.display='none';


add1.onclick = function(){
product1.style.display='block';
product1.style.padding='40px';
}
add2.onclick = function(){
product2.style.display='block';
product2.style.padding='40px';


}
add3.onclick = function(){
product3.style.display='block';
product3.style.padding='40px';


}
add4.onclick = function(){
product4.style.display='block';
product4.style.padding='40px';


}
add5.onclick = function(){
product5.style.display='block';
product5.style.padding='40px';


}
add6.onclick = function(){
product6.style.display='block';
product6.style.padding='40px';

}

add7.onclick = function(){
    product7.style.display='block';
    product7.style.padding='40px';
    
    }
    
add8.onclick = function(){
    product8.style.display='block';
    product8.style.padding='40px';
    
    }
add9.onclick = function(){
    product9.style.display='block';
    product9.style.padding='40px';
    
}
add10.onclick = function(){
    product10.style.display='block';
    product10.style.padding='40px';
            
}

add11.onclick = function(){
    product11.style.display='block';
    product11.style.padding='40px';
            
}

add12.onclick = function(){
    product12.style.display='block';
    product12.style.padding='40px';
            
}





    remove1.onclick = function(){
        product1.style.display='none';
    }

    remove2.onclick=function(){
        product2.style.display='none';
    }


    remove3.onclick = function(){
        product3.style.display='none';
    }


    remove4.onclick = function(){
        product4.style.display='none';
    }


    remove5.onclick = function(){
        product5.style.display='none';
    }


    remove6.onclick = function(){
        product6.style.display='none';
    }

    
    remove7.onclick = function(){
        product7.style.display='none';
    }

    remove8.onclick = function(){
        product8.style.display='none';
    }
    
    remove9.onclick = function(){
        product9.style.display='none';
    }

    remove10.onclick = function(){
        product10.style.display='none';
    }

    remove11.onclick = function(){
        product11.style.display='none';
    }

    remove12.onclick = function(){
        product12.style.display='none';
    }











