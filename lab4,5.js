var prompt = require('prompt-sync')();



const showMenu = (state)=>{
    console.clear();
    let Interface =[
        "Actual number: "+state,
        " ",
        "(+)/(-):+-1",
        "(any other key):exit"

    ].join("\n");
    console.log(Interface)

    let alteration = prompt();
    return alteration;

}



const count = (state)=>{
    console.clear();
    let menu = showMenu(state);
    
    let nActual = Number(state);
        
    let alt =String(menu);
    if (alt==="+"){
            
            
        nActual+=1
        
        n=count(nActual);
        return n;
    }else if (alt==="-"){
        
        
       
        nActual-=1
        
        n=count(nActual)
        return n;


    }else {
    
        return `end, final number = ${state}`;
    }


}

console.log(count(0))






