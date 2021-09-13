/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    current= head;
   var x=[]
    while(current){
        x.push(current.val)
       current=current.next;  
    }
    var middle=head;
   x.sort((a,b)=>a-b)
    let i=0;
    while(middle){
        middle.val=x[i];
        i++
         middle=middle.next;
    }
   return head ;    
};
