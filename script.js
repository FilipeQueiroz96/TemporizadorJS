var segundos = 10

function contar(){
    if(segundos > 0){
    segundos = segundos - 1
    console.log(segundos)
    }
}

setInterval(contar,1000)