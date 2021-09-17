/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
       obj=[]
    for(let i=0;i<temperatures.length;i++){ 
        for(let j=i+1;j<temperatures.length;j++){
            if(temperatures[j]>temperatures[i]){
              obj.push(j-i);
              break
            }
        
         
        }
        if(obj.length!=i+1){
          obj.push(0)
        }
        
    }
    
    
   return obj 
};
