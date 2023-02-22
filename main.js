/*--------------------------------------------------------------slider--------------------------------------------*/
//una función q' se llame a sí misma p/proteger el código.

(function(){
//obtengo todos los elementos del slider q' van a  iterar con las flechas y los pongo en un array con los [] y los 3 puntos    
    let sliders = [...document.querySelectorAll('.ambiente__body')];
    let buttonNext = document.querySelector('#nextJS');
    let buttonBefore = document.querySelector('#beforeJS');
    let value;   

 
//creo eventos p/ los botones:
    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

//creo función usada arriba. 'add' es p/ q sume o reste solo una posición del slider
    let changePosition = (add)=>{
        let currentInfoAmbiente = document.querySelector('.ambiente__body--show').dataset.id;
        value = Number(currentInfoAmbiente);//p/obtener la info. del slider actual q' se está mostrando. 
                                            //Quiero saber el data set q´en este caso es un id (id 1, id 2, id3, id4)
                                            //lo convierto a Number p'q' lo estaba concatenando.
        value+= add;


        sliders[Number(currentInfoAmbiente)-1].classList.remove('ambiente__body--show');//remuevo clase q' muestra slider actual.
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1; //q' cuando valga 0 me mande al último slider, y si lo supero (4), q' me mande al primer slider.
        }                                              //operador ternario

    //accedo al elemento q' tenga 'value', q' es el data-id -1 xq' en el array empieza dsd el 0.
    //una vez hecho lo anterior, quiero obtener sus clases y agregarle la clase 'ambiente__body--show', q´es la clase q' hace q' los elementos se muestren.
        sliders[value-1].classList.add('ambiente__body--show');

    }

})();