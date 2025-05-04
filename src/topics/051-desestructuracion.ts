import { setupCounter } from '../counter';

interface AudioPlayer {
    audioVolume: number,
    songDuration: number,
    song: string,
    details: Details
}

interface Details{
    author: string,
    year: number
}

const audioPlayer: AudioPlayer ={
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const {song, details} = audioPlayer;
const{author}= details;
console.log('song', song);
console.log('author', author);
console.log('Audio Volumen ',audioPlayer.audioVolume);

export {};
