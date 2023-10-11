
document.querySelector('#up').addEventListener('click', function () {
    window.scroll(0, 0)

})

window.addEventListener('scroll', function () {
    if (this.window.scrollY >= 200) {
        this.document.querySelector('#up').classList.replace('d-none', 'd-block')

    } else {
        this.document.querySelector('#up').classList.replace('d-block', 'd-none')
    }
})

let images = document.querySelectorAll('.w33')
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click',function(){
        document.querySelector('#mainImage').removeAttribute('src')
        document.querySelector('#mainImage').setAttribute('src', images[i].getAttribute('src'))
    })
    
}

console.log('helllo')