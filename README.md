# Eleccionador-Inador (Vista: 'Candidato')
instalar nodejs
En terminal:
cd 'ruta'
npm start


## Estilos:

-Cuando se tenga la conexión a BD, se tendrá el estilo trinity (Modelo vista controlador)
-Cuando se tenga la conexión a BD y Login, habrá una función que verifique que ya esté logueado en caso se entre con url directa. Al botar error, se usará el estilo pasivo-agresivo.

# Convenciones de codificación:
El programa no presenta Code Smells, Bugs o Vulnerabilidades cuya severidad sea críticos/graves, como se puede apreciar en la imagen:

![Problems](https://github.com/AxelSolis93/Eleccionador-Inador-copy/assets/104176510/316685db-d344-4e87-914c-eef4c67f0de5)

Principios SOLID:

Responsabilidad Unica: El código solo se preocupa por la conversión de Usuario Común a Candidato.
Abierto-Cerrado: La lógica del formulario ya existe, por lo que para agregar otras cosas simplemente debería crearse un campo más y leerlo.
Inversión de dependencias: El código usará una conexión a la base y pasar argumentos a funciones externas para evitar ser dependiente o fusionarse con otras clases, ignorando cómo funcionan las herramientas que use.
