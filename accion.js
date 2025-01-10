const elementos = document.querySelectorAll(".cubos");

        // Recorre todos los elementos y añade el event listener a cada uno
        elementos.forEach(function(elemento) {
            elemento.addEventListener("click", function(event) {
                event.stopPropagation();

                    elementos.forEach(function (el){
                        el.style.backgroundColor = "#0007";
                        el.style.height = "350px";
                        el.style.boxShadow = "0 0 15px 0 #000";
                    })
        
                // Cambia el color de fondo del elemento clickeado
                elemento.style.backgroundColor = "#03f4";
                elemento.style.height = "auto";
                elemento.style.boxShadow = "0 0 15px 0 #fff7";
            });
        });

        document.addEventListener("click",function(){
            elementos.forEach(elemento =>{
                elemento.style.backgroundColor = "#0007";
                elemento.style.height = "350px";
                elemento.style.boxShadow = "0 0 15px 0 #000";
            })
        })


        document.addEventListener('DOMContentLoaded', function() {
            const selectElement = document.getElementById('mySelect');
            
            // Establecer la opción predeterminada
            selectElement.value = 'default'; // Ajusta este valor a la opción que desees
        });
        

const selectElement = document.getElementById('mySelect');

    //Iniciliza el tamaño del select a 1 al cargar la página
    selectElement.size=1;

    selectElement.addEventListener('focus', function() {
        this.size = 4; // Muestra 4 opciones al enfocar
    });

    selectElement.addEventListener('blur', function() {
        this.size = 1; // Vuelve a mostrar solo la opción seleccionada al desenfocar
    });

    selectElement.addEventListener('change', function() {
        this.blur(); // Deja de mostrar las opciones cuando se elige una
    });
