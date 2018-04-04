alert('hello')

const endpoint = 'https://www.lottoland.com/api/drawings/euroJackpot';

const myInit = {
   method: 'GET',
   mode: 'no-cors'
};
const lottoNumbers = [];
fetch(endpoint, myInit)
.then(blob => blob.json())
.then(data => lottoNumbers.push(...data))
.catch(error => console.log('Request failed', error))

console.log(lottoNumbers);
