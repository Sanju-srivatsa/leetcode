/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
       if (nums === null || nums.length === 0) {
        return -1;
    }
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let middle = left + parseInt((right - left) / 2);
        if (nums[middle] > nums[right]) {
            left = middle + 1;
        }
        else {
            right = middle;
        }
    }
    const pivot = left;
    left = 0;
    right = nums.length - 1;
    if (target >= nums[pivot] && target <= nums[right]) {
        left = pivot;
    } else {
        right = pivot;
    }
    while (left <= right) {
        let middle = left + parseInt((right - left) / 2);
        if (nums[middle] === target) {
            return middle;
        } else if (target < nums[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1; 
};
