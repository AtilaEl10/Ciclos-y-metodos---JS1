let boton1 = document.getElementById("boton1")
let boton2 = document.getElementById("boton2")
let boton3 = document.getElementById("boton3")
let boton4 = document.getElementById("boton4")
let boton5 = document.getElementById("boton5")
let num

let textoPromedio = document.getElementById("nota")
let textoContenido 

let oculto = document.getElementById("oculto")


// Llamados de botones
boton1.addEventListener("click", () => {
    num = 1
    boton(num)
})
boton2.addEventListener("click", () => {
    num = 2
    boton(num)
})
boton3.addEventListener("click", () => {
    num = 3
    boton(num)
})
boton4.addEventListener("click", () => {
    num = 4
    boton(num)
})
boton5.addEventListener("click", () => {
    num = 5
    boton(num)
})


// funciones con switch
const boton = n => {
    switch (n) {
        case 1:
            oculto.classList.add('ocultar')

            let valor1 
            do {
                valor1 = Number(prompt("Escoge un numero del 1 al 100"))
            } while (valor1 > 100 || valor1 < 0 || valor1 == "" || valor1 == String)

            textoContenido = "Si te daba flojera contar, podemos hacerlo por ti, solo revisa la consola"
            textoPromedio.textContent = textoContenido

            for (i=0; i <=valor1; i++)
            console.log(i)
            console.log("saludos")
        break;

        case 2:
            oculto.classList.add('ocultar')

            let valor2
            do {
                valor2 = prompt("¿De que color es el caballo blanco de Napoleon?")
            } while (!(valor2.trim().toLowerCase() === "blanco"))

            textoContenido = "Ni modo que fuera amarillo"
            textoPromedio.textContent = textoContenido        
            break;

        case 3:
            oculto.classList.add('ocultar')

            alert("Los siguientes campos los debes llenar con notas, teniendo en cuenta el 10 como nota minima y el 70 como maxima")
            mate = Number(prompt("¿Cuál fue tu promedio de Matemática?"))
            fisi = Number(prompt("¿Cuál fue tu promedio de Fisica?"))
            cien = Number(prompt("¿Cuál fue tu promedio de Ciencias?"))

            let promedio = [mate, fisi, cien]
            const promedioCalc = arr => Math.round(arr.reduce((primero, segundo) => primero + segundo)/ arr.length)
            

            if (promedioCalc(promedio) > 40) {
                textoContenido = `Tu promedio es: ${promedioCalc(promedio)}. Aprobaste, FELICITACIONES!!!`
                textoPromedio.textContent = textoContenido
            }
            else if (promedioCalc(promedio) == 40) {
                textoContenido = `Tu promedio es: ${promedioCalc(promedio)}. A ti si te gusta vivir al limite`
                textoPromedio.textContent = textoContenido
            }
            else if (promedioCalc(promedio) < 40) {
                textoContenido = `Tu promedio es: ${promedioCalc(promedio)}. Te lo echaste bro, échale mas ganas para la otra`
                textoPromedio.textContent = textoContenido
            }
        break;

        case 4:
            textoContenido = ""
            textoPromedio.textContent = textoContenido

            oculto.classList.add('ocultar')

            let fruta1 = prompt("Escribe una fruta")
            let fruta2 = prompt("Escribe una fruta")
            let fruta3 = prompt("Escribe una fruta")

            let arregloFruta = [fruta1, fruta2, fruta3]
            for (const i of arregloFruta)
            if (i.trim().toLowerCase() !== "manzana") console.log(i)
            else if (i.trim().toLowerCase() == "manzana") {
                oculto.classList.remove('ocultar')
            } 
        break;

        case 5:
            oculto.classList.add('ocultar')
            let nombre
            nombre = prompt("Por favor escribe tu nombre")
            
            let numeroVocal = nombre.match(/[aeiou]/gi).length
            let numeroTotal = nombre.match(/[a-z]/gi).length
            let numeroCons = numeroTotal - numeroVocal

            textoContenido = `Tu nombre tiene ${numeroVocal} vocales y ${numeroCons} consonantes`
            textoPromedio.textContent = textoContenido 
        break


    }
}
