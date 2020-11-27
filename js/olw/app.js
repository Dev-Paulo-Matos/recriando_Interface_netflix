var iframe = document.querySelector('#iframe');

function Frame(link) {
    iframe.style = 'display:flex;'
    var a = link.split('#', 2)
    iframe.innerHTML = `<iframe width="560" height="315" src=${a[1]} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

}

iframe.addEventListener('click', () => {
    iframe.style = 'display:none'
})

// Desafio do Felipe Aguiar 