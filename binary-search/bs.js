const binarySearch = (arr,start,end,target) => {
    while (start <= end) {
      let mid = (start + end) / 2;
      mid = Math.floor(mid);
      if (arr[mid] === target) return mid;
      else if (arr[mid] > target) end = mid-1; 
      else start = mid+1;
    }
    return -1;
}

function solution() {
    const arr = [1,5,4,3,2,1,6,7,8,10];
    let start = 0;
    let end = arr.length-1 // 문제마다 end 값 설정 다르다.
    let target = 5; // 배열에서 5의 index를 구하는 것
    
    arr.sort((a,b) => a-b);
    console.log(arr.sort((a,b) => a-b))
    let ans = binarySearch(arr,start,end,target);
    return ans;
}

let answer = solution();
console.log(answer);
  
