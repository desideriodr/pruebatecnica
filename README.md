# pruebatecnica
prueba Tecnica de LikeU

Prueba técnica Javascript
Debemos crear una aplicación Web responsiva la cual nos permita conectarnos a la API de Rick And Morty para listar todos los personajes https://rickandmortyapi.com/
Requisitos
●	No utilizar frameworks. Solo Javascript pure.
●	Utilizar tu librería UI preferida (Bootstrap,Bulma,etc) o CSS responsive.
●	Utilizar fetch API para traer la información.
●	Debe funcionar bien en Pantalla de Computador, Pantalla de Tablet y Pantalla Movil. (Diseño Responsivo)
●	Usar algún preprocesador css
●	Usar algún bundle como webpack, rollup para generar el proyecto (colocar las instrucciones de uso en el repositorio
●	Enviar a Firebase para tener una URL pública.
●	Creatividad :-) 
Tareas.
●	Se va a mostrar la lista en forma de Grid de todos los Personajes de Rick and Morty mostrando su Foto y nombre, acá puedes usar un Infinite Scroll o un sistema de paginación.k
 
●	Al dar click deberás mostrar la imagen y la info del personaje elegido 
En la información del usuario se debe incluir los episodios en lo que ha aparecido con posibilidad de hacer click en el episodio para ver otra vista con información relacionada con el episodio.
Adicionales
●	A medida que vayas avanzando en la solución realizar los commits en un repo publico en github 
●	Muy importante comentar y que el código esté muy organizado.

# resultados
* se logra cumplir los requisitos
* se crea un infinite scroll con todos los personajes
* cada personaje cuenta con una tarjeta o carta
* cada carta gira con la información del personaje al respaldo
* cada carta tiene un boton que redirecciona a episodes.html
* en episodes.html se imprime una tabla con todos los episodios

# falta
* la tabla de episodes.html imprime todos los episodios para todos los personajes
* se debe filtrar los episodios de acuerdo al personaje

# tener en cuenta
rickandmortyAPI tiene un limite de request de 10000 al alcanzar el limite se mostrara el error 429 en la consola
se debe esperar 12 horas para poder generar mas request

# link firebase
https://proyectodeprueba-169416.web.app/
