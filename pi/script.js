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
    console.log(media1)
    // rst1.innerHTML = (`A média é de ☆${media1}`)

    let media2 = (qt2[0]+qt2[1]+qt2[2]+qt2[3]+qt2[4]) / qt2.length
    console.log(media2)
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
}
function login() {
    const login = document.querySelector('.login')
    const page = document.querySelector('.page')
    login.classList.add('unactive')
    page.classList.remove('unactive')
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


// label.forEach(function(element,index,array) {
//   element.addEventListener('click',function() {
//     // console.log(array)
//     let i = 0
//     while(i <= array.length - 1) {
//       array[i].classList.remove('ativo')
//       i++
//     }
//     array[index].classList.add('ativo')
//   })
// })






