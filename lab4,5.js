var prompt = require('prompt-sync')();



const showMenu = (estado)=>{
    console.clear();
    let Interface =[
        "Actual number: "+estado,
        " ",
        "(+)/(-):+-1",
        "(any other key):exit"

    ].join("\n");
    console.log(Interface)

    let alteracion = prompt();
    return alteracion;

}



const contador = (estado)=>{
    console.clear();
    let menu = showMenu(estado);
    
    let nActual = Number(estado);
        
    let alt =String(menu);
    if (alt==="+"){
            
            
        nActual+=1
        
        n=contador(nActual);
        return n;
    }else if (alt==="-"){
        
        
       
        nActual-=1
        
        n=contador(nActual)
        return n;


    }else {
    
        return `fin,contador final = ${estado}`;
    }


}

console.log(contador(0))






