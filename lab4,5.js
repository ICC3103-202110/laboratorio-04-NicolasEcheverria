var prompt = require('prompt-sync')();


const contador = (estado)=>{
    console.clear();
    let alteracion = prompt("(+)/(-),else quit+: "+ estado)
    
    let nActual = Number(estado);
        
    let alt =String(alteracion);
    if (alt==="+"){
            
            
        nActual+=1
        
        n=contador(nActual);
        return n
    }else if (alt==="-"){
        
        
       
        nActual-=1
        
        n=contador(nActual)
        return n


    }else {
    
        return `fin,contador final = ${estado}`
    }






}

console.log(contador(0))






