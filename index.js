function knightMoves(pos1,pos2){
    let q = moves(pos1)
    const path1=[pos1]
   
    while(q.length>=1){
        const moves1= moves(q[0])
       // console.log("moves : ",moves1)
        const match = moves1.find(el => {
            return el.every(item => pos2.includes(item)) && pos2.every(item => el.includes(item))
        })
        if(match){
            path1.push(q[0])
            break
        }
      
        path1.push(q.shift())
        q=Array.from(moves1)
        


    }
    path1.push(pos2)
    return path1


}
function moves(pos){
    if(!Array.isArray(pos) || pos.length !==2){
        throw new Error("Please provide an array with length 2")
    }
    const possibilities = []
    const limits = [0,1,2,3,4,5,6,7]
    const ones = [1,-1]
    const twos = [2,-2]
    ones.forEach(el => {
        if(limits.includes(pos[0]+el) && limits.includes(pos[1]+twos[0])){
            possibilities.push([pos[0]+el, pos[1]+twos[0]])
          
        }
        if(limits.includes(pos[0]+el) && limits.includes(pos[1]+twos[1])){
            possibilities.push([pos[0]+el, pos[1]+twos[1]])
        }
       
    })
    twos.forEach(el => {
        if(limits.includes(pos[0]+el) && limits.includes(pos[1]+ones[0])){
        possibilities.push([pos[0]+el, pos[1]+ones[0]])
       
     }
      if(limits.includes(pos[0]+el) && limits.includes(pos[1]+ones[1])){
        possibilities.push([pos[0]+el, pos[1]+ones[1]])
     }
    })
    return possibilities
}

//console.log(moves([1,0]))
console.log(knightMoves([0,0],[7,7]))