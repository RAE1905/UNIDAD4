   //creando nodos en el div
const app = document.getElementById('app');
getImagesFromNasa()
.then(function (data){
    const img =document.createElement('img')
    img.src = getImage(data)
    img.alt = data.captionapp.appendChild(img)
})
   
   
   function getImagesFromNasa(){
        fetch('https://epic.gsfc.nasa.gov/api/natural')
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
    })
    .catch(function (error) {
        console.log(error)
    })
    }
    
    function getImage(data) {
        const url = 'https://epic.gsfc.nasa.gov/api/natural'
        const date = data.date
        .substr(0,10) //obtiene los primeros 10
        .split('-') //separa los caracteres por el guión
        return '${url}/${date[0]}/${date[1]}/${date[2]}/png/${data.image}.png/'
    }

data.array.forEach(function(data) {
    const img = documento.createElement('img')
    img.src = getImage(data)
    img.alt = data.caption
});


