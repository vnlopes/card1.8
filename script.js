let music = document.querySelector('audio')

const anima = () => {
    document.querySelector('#card-top').classList.add('card-top')
    document.querySelector('#c1').classList.add('c1')
    document.querySelector('#c2').classList.add('c2')
    document.querySelector('#c3').classList.add('c3')
    document.querySelector('#cartao').classList.add('cartao')
    document.querySelector('#light').classList.add('light')
    music.innerHTML = '<audio src="music.mp3" autoplay loop></audio>'
}


const remove = () => {
    document.querySelector('#card-top').classList.remove('card-top')
    document.querySelector('#c1').classList.remove('c1')
    document.querySelector('#c2').classList.remove('c2')
    document.querySelector('#c3').classList.remove('c3')
    document.querySelector('#cartao').classList.remove('cartao')
    document.querySelector('#light').classList.remove('light')
    let music = document.querySelector('audio')
    music.innerHTML = ''
}



