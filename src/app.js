import 'normalize.css/normalize.css';
import './styles/styles.scss';


const endpoint = 'https://www.lottoland.com/api/drawings/euroJackpot';

fetch(endpoint)
.then(resp => resp.json())
.then(data => {
   let lastDraw = data.last;
   let nextDraw = data.next;
   console.log(lastDraw)

})
.catch(error => console.log('Request failed', error))




