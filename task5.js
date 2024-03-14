const photoStorage = localStorage.getItem('photos');
if (photoStorage) {
    showPhotos(JSON.parse(photoStorage))
}
function showPhotos(photos) {
    photos.forEach((item) => {
        document.querySelector("body").innerHTML += `<img  src='${item.url}' alt="картинка"/> `
    })
}
document.querySelector('.body__data').addEventListener('click', () => {
    const value1 = document.querySelector('.body__input_1').value;
    const value2 = document.querySelector('.body__input_2').value;

    if (value1 > 10 || value1 < 1) {
        document.querySelector('div').innerHTML = 'Номер страницы вне диапазона от 1 до 10'
    }
    else if (value2 > 10 || value2 < 1) {
        document.querySelector('div').innerHTML = 'Лимит вне диапазона от 1 до 10'
    }
    else if ((value1 > 10 || value1 < 1) && (value2 > 10 || value2 < 1)) {
        document.querySelector('div').innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10'
    }
    else {
        fetch(`https://jsonplaceholder.typicode.com/photos?_page=${value1}&_limit=${value2}`)
            .then((response) => {
               return  response.json()
            })
            .then((data) => {
                localStorage.setItem('photos',JSON.stringify(data))
                showPhotos(data)
            })
    }
})
