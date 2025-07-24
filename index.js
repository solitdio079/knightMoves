function knightMoves(start, end) {
  const q = [start];
  //let level = 0
  let path = [start];
  //let currentParent = start;

  const visited = [];
  let i = 0;
  while (q.length > 0) {
    const edges = moves(q[0]);
    visited.push(q[0]);
    const match = edges.find(
      (el) => JSON.stringify(el) === JSON.stringify(end)
    );
    if (match) {
      const edgeParent = visited.find(el => JSON.stringify(moves(el)).includes(JSON.stringify(q[0]))) || start
      if(edgeParent !== path[path.length-1]) path.push(edgeParent)
      path.push(q[0], end);
      break;
    } else {
      const edgeParent = visited.find(el => JSON.stringify(moves(el)).includes(JSON.stringify(q[0]))) || start
    
      if(!JSON.stringify(path).includes(JSON.stringify(edgeParent)) && JSON.stringify(moves(path[path.length-1])).includes(JSON.stringify(edgeParent)) && edgeParent !==path[path.length-1]){
    
        path.push(edgeParent)
      }
      q.push(...edges)
      q.shift()
    }
  }
  return path
  //return Array.from(new Set(path));
}
function moves(pos) {
  if (!Array.isArray(pos) || pos.length !== 2) {
    throw new Error(`Please provide an array with length 2 not ${pos}`);
  }
  const possibilities = [];
  const limits = [0, 1, 2, 3, 4, 5, 6, 7];
  const ones = [1, -1];
  const twos = [2, -2];
  ones.forEach((el) => {
    if (limits.includes(pos[0] + el) && limits.includes(pos[1] + twos[0])) {
      possibilities.push([pos[0] + el, pos[1] + twos[0]]);
    }
    if (limits.includes(pos[0] + el) && limits.includes(pos[1] + twos[1])) {
      possibilities.push([pos[0] + el, pos[1] + twos[1]]);
    }
  });
  twos.forEach((el) => {
    if (limits.includes(pos[0] + el) && limits.includes(pos[1] + ones[0])) {
      possibilities.push([pos[0] + el, pos[1] + ones[0]]);
    }
    if (limits.includes(pos[0] + el) && limits.includes(pos[1] + ones[1])) {
      possibilities.push([pos[0] + el, pos[1] + ones[1]]);
    }
  });
  return possibilities;
}

//console.log(moves([1,0]))
console.log(knightMoves([3, 3], [4,3]));
