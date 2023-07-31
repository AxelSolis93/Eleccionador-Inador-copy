# Eleccionador-Inador (Vista realizar voto: 'CAST-VOTE')
instalar nodejs
En terminal:
cd 'ruta'
npm start


## Estilos:
-Se usó PIPELINE para las funciones anidadas (específicamente "realizarCambio").

![image](https://github.com/Sommerfield3/Eleccionador-Inador/assets/104087488/ce98e414-39a1-498e-9e41-79ec389b8b08)
![image](https://github.com/Sommerfield3/Eleccionador-Inador/assets/104087488/1cc64096-7410-4013-8c00-c8014c37c78f)

-Se usó MAP-REDUCE para la selección de elementos de forma dinámica en el programa.

![image](https://github.com/Sommerfield3/Eleccionador-Inador/assets/104087488/4e15567c-fd48-4767-bf98-635484cb2b38)

-Dado el uso de un compilador (como lo es Babel) se logró la reducción del código Javascript HTML con forma orientada a variables que permite React, por lo que se aproxima a la técnica CODE GOLF.


# Convenciones de codificación:
El programa no presenta Code Smells, Bugs o Vulnerabilidades cuya severidad sea críticos/graves, sin embargo presenta dos problemas respecto
a la declaración de llaves usando como valor índices de arrays, si bien no es correcto en la teoría, en nuestro ejemplo se da que durante la generación se da la forma de claves complejas debido a las combinaciones de los valores de los índices, debido a que se trata de una matriz y no listas independientes.

![image](https://github.com/Sommerfield3/Eleccionador-Inador/assets/104087488/ab23ecfe-6d72-4c78-98d6-950b17daa7ab)

