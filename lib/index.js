import arnold from "./arnold";
import edzio from "./edzio";
import ferdek from "./ferdek";
import halinka from "./halinka";
import helena from "./helena";
import marian from "./marian";

const getRandomQuote = (array) => {
  return array[Math.floor(Math.random() * array.length)];
}

const getFerdek = () => getRandomQuote(ferdek);
const getArnold = () => getRandomQuote(arnold);
const getEdzio = () => getRandomQuote(edzio);
const getHalinka = () => getRandomQuote(halinka);
const getHelena = () => getRandomQuote(helena);
const getMarian = () => getRandomQuote(marian);
const getAll = () => getRandomQuote([...ferdek, ...arnold, ...edzio, ...halinka, ...helena,...marian]);

export default {
  getFerdek: () => getFerdek(),
  getArnold: () => getArnold(),
  getEdzio: () => getEdzio(),
  getHalinka: () => getHalinka(),
  getHelena: () => getHelena(),
  getMarian: () => getMarian(),
  getQuote: () => getAll()
}
