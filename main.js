const pizarra = document.querySelector(".canvas");
const todasRazas = document.getElementById("todasRazas");
const imagenRandom = document.getElementById("imagenRandom");
const chihuahua = document.getElementById("chihuahua")

// Imprimir por consola la lista de razas de todos los perros.

todasRazas.addEventListener('click', () => {
    pintaTodasRazas();
})

function pintaTodasRazas() {
    axios.get(" https://dog.ceo/api/breeds/list/all")
    .then((res) => {
        let razas = res.data.message        
        pizarra.innerHTML = ""
        for (let raza in razas){
            pizarra.innerHTML += `<div style="font-size: 40px">${raza}&nbsp&nbsp<div>`;
        }                
    })
    .catch((err) => console.error(err));   
}

// // Imprimir por consola una imagen random de una raza.

imagenRandom.addEventListener('click', () => {
    pintaImagenRandom();
})

function pintaImagenRandom () {
    axios.get("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
        let imagenPerreteRandom = res.data.message
        pizarra.innerHTML = ""
        pizarra.innerHTML += `<img style="height: 50%; width: 50%; display: block;" src="${imagenPerreteRandom}"  alt="Card     image">`;
    })
    .catch((err) => console.error(err));
}
// // Imprimir por consola todas las imágenes de una raza concreta.

chihuahua.addEventListener('click', () => {
    pintaChihuahua();
})

function pintaChihuahua () {
    axios.get("https://dog.ceo/api/breed/chihuahua/images")
    .then((res) => {
        let imagenChihuahua = res.data.message
        console.log(imagenChihuahua)
        pizarra.innerHTML = ""
        imagenChihuahua.forEach(element => {
            pizarra.innerHTML += `<img style="height: 100px; width: 100px;" src="${element}"  alt="Chihuahua">`;
        });
            
                
    })
    .catch((err) => console.error(err));
}
