
document.querySelector('button').addEventListener('click', () => {
    const value1 = document.querySelector('.body__input_1').value;
    const value2 = document.querySelector('.body__input_2').value;
    if((value1 > 300 || value1 < 100  ) ||( value2 > 300 || value2 < 100 )) {
        document.querySelector('div').innerHTML = 'Одно из чисел или оба числа вне диапазона от 100 до 300'
    }
    else {
        fetch(` https://dummyimage.com/${value1}x${value2}/`)
            .then((response)=> {
                document.querySelector('div').innerHTML = `<img src="https://dummyimage.com/${value1}x${value2}/" alt="">`
            })
    }
})