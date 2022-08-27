# back_clase_11
MERN stack: MongoDB, React JS, Express JS y Node JS
![merndiagram](https://github.com/nacho-sf/back_clase_11/blob/main/assets/img/MEAN_stack-0pdlo3qwbn.png)


Métodos principales del protocolo web HTTP: GET(lee), POST(escribe), PUT(actualiza), DELETE(borra)


Node JS es para crear nuestro propio servidor, el cual, atenderá nuestras peticiones que le enviemos desde nuestro cliente local

Node JS no se satura con las peticiones por su forma de recibirlas en paralelo, frente a otros:
![nodevsphp](https://github.com/nacho-sf/back_clase_11/blob/main/assets/img/php_vs_node.jpg?raw=true)



API ()
REST (Transferencia de Estado Representacional): Estilo de arquitectura software para sistemas hipermedia distribuidos como la World Wide Web.



Las API REST proporcionan una forma flexible y ligera de integrar aplicaciones y han surgido como el método más común para conectar componentes en la arquitectura de microservicios. Sirven para comunicarnos desde cualquier tipo de plataforma a un servidor que ofrece unos recursos.

WEBSOCKETS sería otra arquitectura de comunicación, tal como API REST pero usa un protocolo de comunicación diferente. Se usa para descargar recursos más masivos.



Ventajas API REST: Speed, real time, data streaming, open source NPM repository(librerías o módulos)



NPM (node packet manager): Gestor de paquetes o módulos(librerías) de node.



EXPRESS es el módulo(librería) fundamental para hacer API's, donde vamos a montar nuestros servidores. Es nuestro framework para montar servidores basados en Node. Para que funcione, este instala automáticamente 31 dependencias (Terminal: "npm i express"). Estas dependencias, a su vez, poeden instalar otras dependencias automáticamente. Ir a express.com y leer documentación...


INICIALIZAR UN PROYECTO EN NODE

-Se crea una carpeta donde se ubicarán los archivos del proyecto y se abre con Visual Code.

-Se abre la terminal y se escribe "npm init" para inicializar un proyecto con Node.

-Crea un objeto package.json con datos a introducir, relativos al proyecto.

-Crear en Visual Code el archivo app.js y pegar el código "Hello world" (expressjs.com/como_empezar/hello_world)

-Instalar el módulo Express. Terminal "npm i express". Se crea automáticamente el archivo package-lock.json y la carpeta node_modules.

-Lanzar el servidor. Terminal "node app.js". En el navegador se podrá ver si funciona el servidor escribiendo "http://localhost:3000"

-Ver el documento para más información...