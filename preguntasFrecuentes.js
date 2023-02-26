//---creo Array p/ obtener todas las preguntas q' tengo. (los '...' son p/convertirlo en un Array)
(function(){
    const titleQuestions = [...document.querySelectorAll('.questions__title')];
    console.log(titleQuestions)

    //quiero q' por c/pregunta q' se haga click, haga algo
    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;//obtengo al hno. o al siguiente hno. de question (el hno del <h3> es <p>, es decir, la pregunta q se quiere mostrar)
            let addPadding = question.parentElement.parentElement;

/*-------------------------------------Acá trabajo con 2 clases de CSS------------------------------------*/
            addPadding.classList.toggle('questions__padding--add');
            question.children[0].classList.toggle('questions__arrow--rotate'); /*obtengo los hijos del <h3>, en específico al
             primeto[0], q' es el span; y dependiendo de lo q' se requiera, se le quita o saca la clase de css .questions__arrow--rotate*/

            if(answer.clientHeight === 0){ //si del elemento answer, que es <p>, tiene un height = a cero, 'scrollHeight' nos da el alto mínimo p/q una variable se muestre.
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;//si lo anterior es True, le agrego el 'height' a la propiedad answer, q' es el <p>
        });
    });
})();


//acá trabaja la clase de CSS: .questions__padding--add (agrega un paddin debajo de la rta. de la pregunta)
//tmb trabaja la clase de CSS: .questions__arrow--rotate: q' permite rotar la flecha.
/*
El elemento Element.scrollHeight atributo únicamente de lectura es una medida de la altura del contenido de un elemento,
 incluyendo el contenido que no es visible en la pantalla debido al desbordamiento. El valor scrollHeight es igual a la
altura mínima (donde la altura incluye el relleno , pero no incluye bordes y márgenes) El elemento lo necesita con el
fin de adaptarse a todos los contenidos en el punto de vista sin necesidad de utilizar una barra de desplazamiento
 vertical. Incluye el elemento relleno pero no su margen.

*/

/*
los Element.clientHeight la propiedad de solo lectura es cero para elementos sin CSS o cuadros de diseño en línea; de 
lo contrario, es la altura interna de un elemento en píxeles. Incluye relleno pero excluye bordes, márgenes y 
horizontales barras de desplazamiento ( si está presente ).
clientHeight se puede calcular como: CSS height + CSS padding - altura de la barra de desplazamiento horizontal 
( si está presente ).
*/