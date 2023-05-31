
let qt = []

qt[0] = document.querySelectorAll('.star.p1') // O Professor cumpre os horários ?
qt[1] = document.querySelectorAll('.star.p2') // O Professor segue o material de estudo ?
qt[2] = document.querySelectorAll('.star.p3') // O Professor apresenta conteúdos de maneira clara e objetiva?
qt[3] = document.querySelectorAll('.star.p4') // O Professor tem domínio sobre o conteúdo abordado nas aulas?
qt[4] = document.querySelectorAll('.star.p5') // O Professor se dispõe a ajudar alunos com dificuldades ?


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

qt2[0] = document.querySelectorAll('.star.p6') //
qt2[1] = document.querySelectorAll('.star.p7') //
qt2[2] = document.querySelectorAll('.star.p8') //
qt2[3] = document.querySelectorAll('.star.p9') //
qt2[4] = document.querySelectorAll('.star.p10') //

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
// const email = document.querySelector('.email')

function calculo() {
    let media1 = (qt[0]+qt[1]+qt[2]+qt[3]+qt[4]) / qt.length
    console.log('a média 1 é ' + media1)
    // rst1.innerHTML = (`A média é de ☆${media1}`)

    let media2 = (qt2[0]+qt2[1]+qt2[2]+qt2[3]+qt2[4]) / qt2.length
    console.log('a média 2 é ' + media2)
    // rst2.innerHTML = (`A média é de ☆${media2}`)

    const page = document.querySelector('.page')
    const msg = document.querySelector('.msg')

    if(media1 >=1 && media2 >=1 ){
    page.classList.add('unactive')
    msg.classList.remove('unactive')
    } else{
        const aviso = document.getElementById('aviso')
        aviso.innerHTML = (`<b>Preencha todos os campos.</b>`)
    }

    // EXPORT

    exports.media1 = media1
    exports.media2 = media2


    // BARRA GRAFICO


    textop1 = document.querySelector('.mediap1')
    textop2 = document.querySelector('.mediap2')

    textop1.innerHTML = (`<h2><b>${media1.toFixed(1)}</b></h2>`)
    textop2.innerHTML = (`<h2><b>${media2.toFixed(1)}</b></h2>`)

    let valorBarra = 50
    let barra = document.querySelector('#valor');

    barra.style.width = valorBarra + '%';
        
    valorBarra = (media1*10);
    // console.log(valorBarra +' valorbarra')
    barra.style.width = valorBarra + '%';


    let valorBarra2 = 50
    let barra2 = document.querySelector('#valor2');

    barra2.style.width = valorBarra2 + '%';
        
    valorBarra2 = (media2*10);
    barra2.style.width = valorBarra2 + '%';

    console.log(valorBarra,+''+valorBarra2)

    // VERDE CLARO
    if(media1 >= 7.0 && media1 < 8.0) {
        barra.style.backgroundColor = '#14ca00'
        textop1.style.color = '#14ca00'
    }
    // VERDE ESCURO
    else if(media1 >= 8.0) {
        barra.style.backgroundColor = '#0d7d00'
        textop1.style.color = '#0d7d00'
    }

    //AMARELO
    else if(media1 >= 5.0 && media1 < 7.0) {
        barra.style.backgroundColor = '#ffd700'
        textop1.style.color = '#b6aa00'
    }
    
    //VERMELHO
    else if(media1 >= 0.0 && media1 < 5.0) {
        barra.style.backgroundColor = '#ce0000'
        textop1.style.color = '#ce0000'
    }
    
    // BARRA DE GRÁFICO 2 ----------------------------------------------
    
    // VERDE CLARO
    if(media2 >= 7.0 && media2 < 8.0) {
        barra2.style.backgroundColor = '#14ca00'
        textop2.style.color = '#14ca00'
    }
    // VERDE ESCURO
    else if(media2 >= 8.0) {
        barra2.style.backgroundColor = '#0d7d00'
        textop2.style.color = '#0d7d00'
    }

    //AMARELO
    else if(media2 >= 5.0 && media2 < 7.0) {
        barra2.style.backgroundColor = '#ffd700'
        textop2.style.color = '#b6aa00'
    }
    
    //VERMELHO
    else if(media2 >= 0.0 && media2 < 5.0) {
        barra2.style.backgroundColor = '#ce0000'
        textop2.style.color = '#ce0000'
    }

    const cmtInput = document.querySelectorAll('.cmt')
    const cmt1 = cmtInput[0].value
    const cmt2 = cmtInput[1].value

    const coment = document.querySelectorAll('.coment')

    if(cmt1 != ''){
    coment[0].innerHTML = '"'+cmt1+'"'
    }

    if(cmt2 != ''){
        coment[1].innerHTML = '"'+cmt2+'"'
    }

    //BARRAS MENORES

    const mBarra = document.querySelectorAll('#mini-valor')
    const mBarra2 = document.querySelectorAll('#mini-valor2')
    const mTexto = document.querySelectorAll('.mini-n')
    const mTexto2 = document.querySelectorAll('.mini-n2')
    
    mBarra.forEach(function(element, index) {
        element.style.width = (qt[index] * 10) * 2 + '%';
    });

    mBarra2.forEach(function(element, index) {
        element.style.width = (qt2[index] * 10) * 2 + '%';
    });

    mTexto.forEach(function(element, index) {
        element.innerHTML = qt[index].toFixed(1);
    });
    mTexto2.forEach(function(element, index) {
        element.innerHTML = qt2[index].toFixed(1);
    });

    mBarra.forEach(function (element, index) {
        if (qt[index] >= 7.0 && qt[index] < 8.0) {
            element.style.backgroundColor = '#14ca00';
            mTexto[index].style.color = '#14ca00';
        } else if (qt[index] >= 8.0) {
            element.style.backgroundColor = '#0d7d00';
            mTexto[index].style.color = '#0d7d00';
        } else if (qt[index] >= 5.0 && qt[index] < 7.0) {
            element.style.backgroundColor = '#ffd700';
            mTexto[index].style.color = '#b6aa00';
        } else if (qt[index] >= 0.0 && qt[index] < 5.0) {
            element.style.backgroundColor = '#ce0000';
            mTexto[index].style.color = '#ce0000';
        }
    });

    mBarra2.forEach(function (element, index) {
        if (qt2[index] >= 7.0 && qt2[index] < 8.0) {
            element.style.backgroundColor = '#14ca00';
            mTexto2[index].style.color = '#14ca00';
        } else if (qt2[index] >= 8.0) {
            element.style.backgroundColor = '#0d7d00';
            mTexto2[index].style.color = '#0d7d00';
        } else if (qt2[index] >= 5.0 && qt2[index] < 7.0) {
            element.style.backgroundColor = '#ffd700';
            mTexto2[index].style.color = '#b6aa00';
        } else if (qt2[index] >= 0.0 && qt2[index] < 5.0) {
            element.style.backgroundColor = '#ce0000';
            mTexto2[index].style.color = '#ce0000';
        }
    });

    

    var rating1 = document.getElementById('rating1').value;
    var rating2 = document.getElementById('rating2').value;
    var rating3 = document.getElementById('rating3').value;
    var rating4 = document.getElementById('rating4').value;
    var rating5 = document.getElementById('rating5').value;
    var comentario = document.getElementsByClassName('cmt').value;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'call.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log(xhr.responseText);
      }
    };
    xhr.send('rating1=' + rating1 + '&rating2=' + rating2 + '&rating3=' + rating3 + '&rating4=' + rating4 + '&rating5=' + rating5 + '&comentario=' + comentario);
}


document.addEventListener("DOMContentLoaded", function() {
    var loginInput = document.querySelector(".logbt");
    var senhaInput = document.querySelector(".senhabt");
    var botaoLogin = document.querySelector(".btnlog");
  
    loginInput.addEventListener("focus", function() {
      if (loginInput.value === "Login") {
        loginInput.value = "";
      }
    });
  
    senhaInput.addEventListener("focus", function() {
      if (senhaInput.value === "Senha") {
        senhaInput.value = "";
      }
    });
  
    botaoLogin.addEventListener("click", function() {
      var login = loginInput.value;
      var senha = senhaInput.value;
      const graf = document.querySelector('.graf')
      const loginp = document.querySelector('.login')
      const loginpg = document.querySelector('.login')
      const page = document.querySelector('.page')
  
      if (login === "user" && senha === "123") {
        alert("Login realizado com sucesso!");
        loginpg.classList.add('unactive')
        page.classList.remove('unactive')
      } else if(login === "prof" && senha === '123'){
        alert("Login realizado com sucesso!");
        loginp.classList.add('unactive')
        graf.classList.remove('unactive')
      } else {
        alert("Login ou senha incorretos!");
      }
    });
  });
  
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

const start = document.querySelector('.logoff')
const idle = document.querySelector('.idle')

start.addEventListener('click', function() {
    idle.classList.add('unactive')
    const login = document.querySelector('.login')
    login.classList.remove('unactive')
})

// ESTILIZAÇÃO

const desc = document.querySelectorAll('.desc')
const seta = document.querySelectorAll('.arrow')
const txt = document.querySelectorAll('.txt')


let rotate1 = false
seta[2].addEventListener('click', function() {
    if (rotate1) {
      seta[2].style.transform = 'rotate(0deg)';
      desc[0].style.height = '5rem';
      txt[0].style.opacity = '1'
    } else {
      seta[2].style.transform = 'rotate(-90deg)';
      desc[0].style.height = '0px';
      txt[0].style.opacity = '0'
    }
  
    rotate1 = !rotate1;
  });

let rotate2 = false
seta[3].addEventListener('click', function() {
    console.log('dsf')
    if (rotate2) {
      seta[3].style.transform = 'rotate(0deg)';
      desc[1].style.height = '5rem';
      txt[1].style.opacity = '1'
    } else {
      seta[3].style.transform = 'rotate(-90deg)';
      desc[1].style.height = '0px';
      txt[1].style.opacity = '0'
    }
  
    rotate2 = !rotate2;
  });

  //SETAS PÁGINA RESULTADOS
  const descProf = document.querySelectorAll('.desc-prof')
  const txtProf = document.querySelectorAll('.txt-prof')
  
let rotate3 = true

seta[0].addEventListener('click', function() {
    if (rotate3) {
      seta[0].style.transform = 'rotate(0deg)';
      txtProf[0].style.height = '1000px';
      txtProf[0].style.opacity = '1'
      console.log('dsfa')
    } else {
      seta[0].style.transform = 'rotate(-90deg)';
      txtProf[0].style.height = '20px';
      txtProf[0].style.opacity = '0'
      console.log('dsfasd')
    }
  
    rotate3 = !rotate3;
  });

  let rotate4 = true

  seta[1].addEventListener('click', function() {
      if (rotate4) {
        seta[1].style.transform = 'rotate(0deg)';
        txtProf[1].style.height = '1000px';
        txtProf[1].style.opacity = '1'
      } else {
        seta[1].style.transform = 'rotate(-90deg)';
        txtProf[1].style.height = '20px';
        txtProf[1].style.opacity = '0'

      }
    
      rotate4 = !rotate4;
    });
  

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




