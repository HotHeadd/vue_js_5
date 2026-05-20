const isBrowser = typeof window !== 'undefined';
var axios = isBrowser ? window.axios : require('axios')

function output(text) {
    if (isBrowser) {
        document.getElementById('result').textContent = text;
    } else {
        console.log(text);
    }
}


axios.get('https://json.geoiplookup.io/')
    .then(response => {
        output(JSON.stringify(response.data, null, 2))
    })
    .catch(error => {
        output('Ошибка: ' + error.message)
    });