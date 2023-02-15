const inpCronometro = document.getElementById('contagem')
let s = 0;
let m = 0;
let h = 0;
let ligado = false;
const btnStart = document.getElementById('btn_start')
let contador;

function convert(){
    if (s >= 60) {
        s = 0
        m++
    }
    if (m >= 60) {
        m = 0
        h++
    }
    inpCronometro.value = `${(h>=10?h:"0"+h)}:${(m>=10?m:"0"+m)},${(s>=10?s:"0"+s)}`
}

document.getElementById('btn_zera').onclick = ()=>{
    console.log('cu')
    clearInterval(contador)
    ligado = false
    s = 0; m = 0; h = 0;
    convert()
    btnStart.textContent = 'Iniciar'
}

function start(){
    if (!ligado) {
        ligado = !ligado
        contador = setInterval(() => {
            s++;
            convert()
        },1000)
        btnStart.textContent = 'Pausar'
    }
    else{
        clearInterval(contador)
        ligado = !ligado
        btnStart.textContent = 'Retomar'
    }
    console.log('Ligado: '+ligado)
}
