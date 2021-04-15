function solution() {
    
    const input = [3,2,5,5,2,1,3,4,2,3];
    let n = input.length;
    let intervalSum = 0;
    let end = 0;
    let target = 5;
    let count = 0;

    for (let start = 0; start < n; start++) {
        
        while(intervalSum < target && end < n){
            intervalSum += input[end];
            end++;
        }

        if(intervalSum === target){
            count++;
        }
        
        intervalSum -= input[start];
    }
    console.log(count);
}

solution();

/*
    보통 생각했을 때 이중for문을 돌려야될때 그리고 이건 좀 비효율적이다 싶을때
    쓸 수 있는 알고리즘.
    Map과 같이 자주 쓰이기도 한다.
*/