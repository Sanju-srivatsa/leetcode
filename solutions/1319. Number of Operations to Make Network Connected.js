/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
   let parents = [...Array(n).keys()];          
  let connected = n;                          
  let redundant = 0;
​
  function find(id) {
    if(parents[id] !== id) 
      parents[id] = find(parents[id]);
    return parents[id];
  }
  
  function union(a, b) {
    let [rootA, rootB] = [find(a), find(b)];
    if(rootA !== rootB) {
      parents[rootB] = rootA;
      connected--;
    } else { // already connected, ie redundant
      redundant++;
    }
  }
    
  connections.forEach(con => union(...con));
  return (redundant >= connected - 1) ? connected - 1 : -1;   
};
