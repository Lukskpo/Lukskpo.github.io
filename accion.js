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
                elemento.style.backgroundColor = "#03f7";
                elemento.style.height = "fit-content";
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