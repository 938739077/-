var findMedianSortedArrays = function(nums1, nums2) {
    let MIDDLE = (nums1.length + nums2.length);
    let flag = 0;
    let s1 = 0;
    let s2 = 0;
    let MIDDLENUM = [];
    while (flag < MIDDLE) {
        if(nums1[s1]!==undefined && nums2[s2]!==undefined){
            (nums1[s1]>nums2[s2])?MIDDLENUM.push(nums2[s2]):MIDDLENUM.push(nums1[s1]);
            (nums1[s1]>nums2[s2])?s2++:s1++;
            flag++;
        }else if(nums1[s1]!==undefined){
            MIDDLENUM.push(nums1[s1]);
            s1++;
            flag++;
        }else if(nums2[s2]!==undefined){
            MIDDLENUM.push(nums2[s2]);
            s2++;
            flag++;
        }
    }
    let len = MIDDLENUM.length;
    console.log(MIDDLENUM);
    if(len % 2 === 0){
        return (MIDDLENUM[(len/2)-1] + MIDDLENUM[len/2])/2;
    }else {
        return MIDDLENUM[Math.floor(len/2)];
    }
};