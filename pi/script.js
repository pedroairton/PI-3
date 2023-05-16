let qt = []

qt[0] = document.querySelectorAll('.star.p1')

qt[1] = document.querySelectorAll('.star.p2')

qt[2] = document.querySelectorAll('.star.p3')

qt[3] = document.querySelectorAll('.star.p4')

qt[4] = document.querySelectorAll('.star.p5')

qt.forEach(function(emt,idx,ary) {
    qt[idx].forEach(function(element){
    element.addEventListener('click',function() {
        console.log(element.value)
        // element.classList.add('ativo')
        qt[idx] = Number(element.value)
    })
})
})

let qt2 = []

qt2[0] = document.querySelectorAll('.star.p6')

qt2[1] = document.querySelectorAll('.star.p7')

qt2[2] = document.querySelectorAll('.star.p8')

qt2[3] = document.querySelectorAll('.star.p9')

qt2[4] = document.querySelectorAll('.star.p10')


//     qt2[1].forEach(function(element){
//     element.addEventListener('click',function() {
//         console.log(element.value +'badfcvb')
//         // element.classList.add('ativo')
//         qt2[1] = Number(element.value)
//     })
// })

qt2.forEach(function(emt,idx,ary,) {
    qt2[idx].forEach(function(element){
    element.addEventListener('click',function() {
        console.log(element.value+'b')
        // element.classList.add('ativo')
        qt2[idx] = Number(element.value)
    })
})
})

const rst1 = document.querySelector('.result.f1')
const rst2 = document.querySelector('.result.f2')

const email = document.querySelector('.email')


function calculo() {
    let media1 = (qt[0]+qt[1]+qt[2]+qt[3]+qt[4]) / qt.length
    console.log('a média 1 é ' + media1)
    // rst1.innerHTML = (`A média é de ☆${media1}`)

    let media2 = (qt2[0]+qt2[1]+qt2[2]+qt2[3]+qt2[4]) / qt2.length
    console.log('a média 2 é ' + media2)
    // rst2.innerHTML = (`A média é de ☆${media2}`)

    const page = document.querySelector('.page')
    const msg = document.querySelector('.msg')

    if(email.value != '' && media1 >=1 && media2 >=1 ){
    page.classList.add('unactive')
    msg.classList.remove('unactive')
    } else{
        const aviso = document.getElementById('aviso')
        aviso.innerHTML = (`<b>Preencha todos os campos.</b>`)
    }


    // BARRA GRAFICO


    textop1 = document.querySelector('.mediap1')
    textop2 = document.querySelector('.mediap2')

    textop1.innerHTML = (`<h2><b>${media1}</b></h2>`)
    textop2.innerHTML = (`<b>${media2}</b>`)

    let valorBarra = 50
    let barra = document.querySelector('#valor');

    barra.style.width = valorBarra + '%';
        
    valorBarra = (media1*10)*2;
    // console.log(valorBarra +' valorbarra')
    barra.style.width = valorBarra + '%';


    let valorBarra2 = 50
    let barra2 = document.querySelector('#valor2');

    barra2.style.width = valorBarra2 + '%';
        
    valorBarra2 = (media2*10)*2;
    barra2.style.width = valorBarra2 + '%';

    console.log(valorBarra,+''+valorBarra2)

    // VERDE CLARO
    if(media1 >= 4.0 && media1 < 4.5) {
        barra.style.backgroundColor = '#14ca00'
        textop1.style.color = '#14ca00'
    }
    // VERDE ESCURO
    else if(media1 >= 4.5) {
        barra.style.backgroundColor = '#0d7d00'
        textop1.style.color = '#0d7d00'
    }

    //AMARELO
    else if(media1 >= 3.0 && media1 < 4.0) {
        barra.style.backgroundColor = '#ffd700'
        textop1.style.color = '#b6aa00'
    }
    
    //VERMELHO
    else if(media1 >= 0.0 && media1 < 3.0) {
        barra.style.backgroundColor = '#ce0000'
        textop1.style.color = '#ce0000'
    }
    
    // BARRA DE GRÁFICO 2 ----------------------------------------------
    
    // VERDE CLARO
    if(media2 >= 4.0 && media2 < 4.5) {
        barra2.style.backgroundColor = '#14ca00'
        textop2.style.color = '#14ca00'
    }
    // VERDE ESCURO
    else if(media2 >= 4.5) {
        barra2.style.backgroundColor = '#0d7d00'
        textop2.style.color = '#0d7d00'
    }

    //AMARELO
    else if(media2 >= 3.0 && media2 < 4.0) {
        barra2.style.backgroundColor = '#ffd700'
        textop2.style.color = '#b6aa00'
    }
    
    //VERMELHO
    else if(media2 >= 0.0 && media2 < 3.0) {
        barra2.style.backgroundColor = '#ce0000'
        textop2.style.color = '#ce0000'
    }




}
function login() {
    const login = document.querySelector('.login')
    const page = document.querySelector('.page')
    login.classList.add('unactive')
    page.classList.remove('unactive')
}
function graf() {
    const graf = document.querySelector('.graf')
    const login = document.querySelector('.login')
    login.classList.add('unactive')
    graf.classList.remove('unactive')
}
function retorno() {
    const msg = document.querySelector('.msg')
    const login = document.querySelector('.login')

    msg.classList.add('unactive')
    login.classList.remove('unactive')
}

// ESTILIZAÇÃO


let label = []

label[0] = document.querySelectorAll(`.rating .label.p1`)

label[1] = document.querySelectorAll('.rating .label.p2')

label[2] = document.querySelectorAll('.rating .label.p3')

label[3] = document.querySelectorAll('.rating .label.p4')

label[4] = document.querySelectorAll('.rating .label.p5')

label[5] = document.querySelectorAll('.rating .label.p6')

label[6] = document.querySelectorAll('.rating .label.p7')

label[7] = document.querySelectorAll('.rating .label.p8')

label[8] = document.querySelectorAll('.rating .label.p9')

label[9] = document.querySelectorAll('.rating .label.p10')


label.forEach(function(emt,idx,ary) {
  label[idx].forEach(function(element,index,array) {
  element.addEventListener('click',function() {
    console.log(array)
    let i = 0
    while(i <= array.length - 1) {
      array[i].classList.remove('ativo')
      i++
    }
    for (let ix = 0; ix <= index; ix++) {
        array[ix].classList.add('ativo')
    }
  })
})
})

// INPUT BOX CLEAR

const log = document.querySelector('.log')
const pw = document.querySelector('.pw')
function cleanTextLog() {
    log.value=''
}
function cleanTextPw() {
    pw.value=''
}





