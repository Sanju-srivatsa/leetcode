/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
        var all={};
    s.split("").map((x)=>{ all[x]= all[x]+1 || 1; })
    for(let i=0;i<s.length;i++){
      if(all[s[i]]==1){
       return i;
      }
} 
   return -1
};
