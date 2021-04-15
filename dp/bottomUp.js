function solution() {
    let n = 50; // 50번째 피보나치 수를 계산
    let d = new Array(n+1);
    // 첫 번째 피보나치 수와 두 번째 피보나치 수는 1
    d[1] = 1;
    d[2] = 1;
    

    // 피보나치 함수(Fibonacci Function) 반복문으로 구현(보텀업 다이나믹 프로그래밍)
    for (let i = 3; i <= n; i++) {
        d[i] = d[i - 1] + d[i - 2];
    }
    console.log(d[n]);
}

solution();