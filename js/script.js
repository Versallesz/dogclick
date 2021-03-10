var contenido = document.querySelector('#contenido');

function traer(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json()) //los datos se traeran en JSON
    .then(data => {
        console.log(data.message)
        contenido.innerHTML = `
        <img src="${data.message}" class="img-fluid rounded-3" width="500px" height="500px">
        
        ` 
        
        
    })
}
traer();