// 
// let numero1= 10;
// let numero2 = 5;

// let resultado = numero1 +numero2;
//     console.log("resultado" , resultado);

const form = document.querySelector("form");
const input = document.getElementById("btn");

console.log({ form, input });

input.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(form.elements[0].value);
    console.log(form.elements[1].value);

    const nombre = form.elements[0].value;
    const contraseña = form.elements[1].value;

    if (nombre === "admin" && contraseña === "1234") {
        return window.open("https://eskailintejeda0625.github.io/Clase029/");
    } else {
        return alert("mmgv");
    }
});



console.log({ form, input });
