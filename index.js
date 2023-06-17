// Code your solutions in this file
names=["kim",'moss','jane', 'mbatia']
//events=[]

function writeCards(names){
    let events=[]
    for(let i=0;i<names.length;i++){
        events.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
        //console.log(events)
    }
    return events
}


function countDown(int){
    let i=0;
    while( i<=int){
        
        console.log(int)
        int--
    }
}

writeCards(names)
console.log(events)

//countDown(4);
