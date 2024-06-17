let play = document.getElementById('play')
let textTitle = document.getElementById('text-music')
let textBanda = document.getElementById('text-banda')
let cover = document.getElementById('img-cover')

const previous = document.getElementById('back')
const repeat = document.getElementById('repeat')
const next = document.getElementById('next')
const suffle = document.getElementById('suffle')

let isPlaying = false


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

const playlist = [shawnMends, lukeCombs2, lukeCombs3, shawnMend, lukeCombs, brunoMars, brunoMar] 

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

inicializarPlay()

next.addEventListener('click', nextMusic)
previous.addEventListener('click', backMusic)
play.addEventListener('click', playPauseDecidir)