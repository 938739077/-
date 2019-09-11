/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {{val: *, next: *}}
 */
var addTwoNumbers = function(l1, l2) {
    let dataFlag = true;
    let over_ten_flag = 0;
    let tempList = [];

    while (dataFlag) {
        let tempRes = addResult(l1.val , l2.val , over_ten_flag);
        tempList.push(tempRes[0]);
        over_ten_flag = tempRes[1];
        l1 = l1.next;
        l2 = l2.next;
        dataFlag = boolResult(l1 , l2);

    }
    if(!dataFlag){
        while (l1 !== null) {
            let tempRes = addResult(l1.val , 0 , over_ten_flag);
            tempList.push(tempRes[0]);
            over_ten_flag = tempRes[1];
            l1 = l1.next;
        }
        while (l2 !== null) {
            let tempRes = addResult(l2.val , 0 , over_ten_flag);
            tempList.push(tempRes[0]);
            over_ten_flag = tempRes[1];
            l2 = l2.next;
        }
    }
    if(over_ten_flag !== 0){
        tempList.push(over_ten_flag);
    }

    function addResult(value1, value2 , value3) {
        let sum = value1 + value2 + value3;
        if(sum > 9){
            return [sum -10 , 1];
        }else {
            return [sum , 0];
        }
    }
    function boolResult(ln1, ln2) {
        let res = false;
        if(ln1 !== null){
            if(ln2 !== null){
                res = true;
            }
        }
        return res;
    }
    let tempSet=null;
    console.log(tempList);
    for(let i=tempList.length-1;i>-1;--i){
        let newSet = {
            val:tempList[i],
            next:tempSet,
        };
        tempSet = newSet;
    }
    console.log(tempSet);
    return tempSet;
};
