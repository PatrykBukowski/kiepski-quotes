import arnold from "./arnold";
import edzio from "./edzio";
import ferdek from "./ferdek";
import halinka from "./halinka";
import helena from "./helena";
import marian from "./marian";

const getRandomQuote = (array, limit) => {
  if(limit){
    const filteredArray = array.filter(el => el.length <= limit);
    return filteredArray[Math.floor(Math.random() * filteredArray.length)];
  }
  return array[Math.floor(Math.random() * array.length)];
}

const getFerdek = (limit) => getRandomQuote(ferdek, limit);
const getArnold = (limit) => getRandomQuote(arnold, limit);
const getEdzio = (limit) => getRandomQuote(edzio, limit);
const getHalinka = (limit) => getRandomQuote(halinka, limit);
const getHelena = (limit) => getRandomQuote(helena, limit);
const getMarian = (limit) => getRandomQuote(marian, limit);
const getAll = (limit) => getRandomQuote([...ferdek, ...arnold, ...edzio, ...halinka, ...helena,...marian], limit);

export default {
  getFerdek: (limit) => getFerdek(limit),
  getArnold: (limit) => getArnold(limit),
  getEdzio: (limit) => getEdzio(limit),
  getHalinka: (limit) => getHalinka(limit),
  getHelena: (limit) => getHelena(limit),
  getMarian: (limit) => getMarian(limit),
  getQuote: (limit) => getAll(limit)
}
