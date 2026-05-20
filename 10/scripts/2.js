const isBrowser = typeof window !== 'undefined';
var axios = isBrowser ? window.axios : require('axios')

function output(text) {
    if (isBrowser) {
        document.getElementById('result').textContent = text;
    } else {
        console.log(text);
    }
}

axios.get('https://vk.com')
    .then(response => {
        output('Статус: ' + response.status);
    })
    .catch(error => {
        output('Ошибка: ' + error.message);
    });