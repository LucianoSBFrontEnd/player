let play = document.getElementById('play')
let textTitle = document.getElementById('text-music')
let textBanda = document.getElementById('text-banda')
let cover = document.getElementById('img-cover')

const previous = document.getElementById('back')
const repeat = document.getElementById('repeat')
const next = document.getElementById('next')
const suffle = document.getElementById('suffle')

let isPlaying = false

const boyce = {
    songName: 'On My Way',
    artist:'Boyce avenue',
    music:'Boyce Avenue - On My Way',
    img:'boyce'
}

const sole = {
    songName: 'Soleado',
    artist:'Frequencia Maxima',
    music:'Soleado',
    img:'disco'
}

const gigi = {
    songName: 'Tu Vivi Nell Aria',
    artist:'Gigi D Agostino',
    music:'Gigi D Agostino - Tu Vivi Nell Aria',
    img:'gigi'
}

const prezi = {
    songName: 'The Moon',
    artist:'Prezioso',
    music:'The Moon',
    img:'prezioso',
}

const brothe = {
    songName: 'Don t Stop',
    artist:'Brothers',
    music:'Brothers - Don t Stop',
    img:'prezioso'
}
  
const gabri = {
    songName: 'Tunder',
    artist:'Gabry Ponte',
    music:'Gabry Ponte - Tunder',
    img:'gabry'
}

const shawnMends = {
    songName:'There\'s Nothing Holding Me Back',
    img: 'shawn',
    artist: 'Shawn Mendes',
    music: 'Shawn Mendes - Theres Nothing Holding Me Back'
}

const lukeCombs2 = {
    songName: 'When It Rains It Pours',
    img: 'luke',
    artist: 'Luke Combs',
    music: 'Luke Combs - When It Rains It Pours'
}

const lukeCombs3 = {
    songName: 'One Number Away',
    img: 'luke',
    artist: 'Luke Combs',
    music: 'Luke Combs - One Number '
}


const shawnMend = {
    songName: 'Stitches',
    img: 'shawn',
    artist: 'Shawn Mendes',
    music: 'Shawn Mendes - Stitches'
}

const lukeCombs = {
    songName: 'She Got the Best of Me',
    img: 'luke3',
    artist: 'Luke Combs',
    music: 'luke-she-got'
}

const brunoMars = {
    songName: 'The Lazy Song ',
    img: 'brunomars',
    artist: 'Bruno Mars',
    music: 'Bruno Mars - The Lazy Song'
}
const brunoMar = {
    songName: 'Just The Way You Are',
    img: 'brunomars',
    artist: 'Bruno Mars',
    music: 'Bruno Mars - Just The Way You Are'
}

const playlist = [shawnMends, boyce, lukeCombs2, gabri, sole, prezi,lukeCombs3, gigi, shawnMend, lukeCombs, brunoMars, brunoMar] 

let index = 0

function playSong () {
    const audio = document.getElementById('song')
    play.querySelector('.fa-solid').classList.remove('fa-play')
    play.querySelector('.fa-solid').classList.add('fa-pause')

    audio.play()
    isPlaying = true
}

function pauseSong () {
    const audio = document.getElementById('song')
    
    play.querySelector('.fa-solid').classList.add('fa-play')
    play.querySelector('.fa-solid').classList.remove('fa-pause')

    audio.pause()
    isPlaying = false
}

function playPauseDecidir (){
    if(isPlaying === true){
        pauseSong()
    } else {
        playSong()
    }
}

function inicializarPlay () {
    cover.src = `img/${playlist[index].img}.png`
    song.src = `audio/${playlist[index].music}.mp3`
    textTitle.innerText = playlist[index].songName
    textBanda.innerText = playlist[index].artist
}

function backMusic (){
    if (index === 0){
        index = playlist.length - 1
    } else {
        index -= 1
    }

    inicializarPlay()
    playSong()
}

nextMusic = ()=>{
    if (index === playlist.length - 1){
        index = 0
    } else {
        index = index + 1
    }
    inicializarPlay()
    playSong()
}

function fimMusic() {
   playSong() 
}

inicializarPlay()

song.addEventListener('ended', fimMusic)
next.addEventListener('click', nextMusic)
previous.addEventListener('click', backMusic)
play.addEventListener('click', playPauseDecidir)