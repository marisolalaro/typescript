//desetruturacion De OBJETOS

interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 80,
  songDuration: 36,
  song: "Lover",
  details: {
    author: "taylor Swift",
    year: 2010,
  },
};
const {song,audioVolume:audio, details}=audioPlayer;
const {author}=details; 


// console.log('song2 :', song);
// console.log('Song: ',audio);
// console.log('audioVolume: ', audioPlayer.audioVolume);
// console.log('audioVolume: ', audioPlayer.details.author);
// console.log('audioVolume: ', audioPlayer.details.author);

//deseatrurturacionde arreglos


// Desesctuturacion de Arreglos 

const [ , , trunks='Not Found']: String [] = ['Goku', 'Vegeta']

console.error('Personaje 3: ', trunks);

// Desesctuturacion de Arguemntos 


export {};
