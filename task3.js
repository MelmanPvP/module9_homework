
function error() {
    const text = document.createElement("div");
    text.innerHTML = '<p>число вне диапазона от 1 до 10</p>';
}
document.querySelector('button').addEventListener('click', () => {
    const value = document.querySelector('input').value;
    if (!(value >= 1 && value <= 10)) {

        document.querySelector('div').innerHTML = '<p>Число вне диапазона от 1 до 10</p>';
    }
    else {
      const xhr = new XMLHttpRequest()
         xhr.open('get',`https://jsonplaceholder.typicode.com/photos?_limit=${value}`);
         xhr.onload = () => {
             if (xhr.status != 200) {
                 console.log('Статус ответа: ', xhr.status)
             }
             else {
                  const data = JSON.parse(xhr.response);
                 console.log(data.url)
                 data.forEach((item) => {
                     document.querySelector("body").innerHTML += `<img class='hero__img' src='${item.url}' alt="картинка"/> `
                 })
             }
         }
        xhr.send()
    }
})
