const ferdekQuotes = [
	'W tym kraju nie ma pracy dla ludzi z moim wykształceniem',
	'Cycu, przynieś no browarka tatusiowi!',
	'Proszę mnie natychmiast opuścić!',
	'To panu się chce wtedy, kiedy mnie!',
	'Panie, przecież to prywatna, publiczna toaleta, panie!',
	'I ja informuję, że wychodzę. I nie wiem, kiedy wrócę!',
	'No i gitara!',
	'No jak nie, jak tak!',
	'Halińcia... śpisz?',
	'Panie, noc jest!',
	'Panie, gówno to pana obchodzi',
	'Panie, mnie to gówno obchodzi',
	'A, dupa tam',
	'Babka, ty kanalio...',
	'Chluśniem, bo uśniem',
];

function random(){
	return ferdekQuotes[Math.floor(Math.random() * ferdekQuotes.length)];
}
module.exports = random();
