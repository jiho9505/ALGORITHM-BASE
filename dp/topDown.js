let d = new Array(11);
function fibo(x) {
    if (x == 1 || x == 2) {
        return 1;
    }
    if (d[x]) return d[x];
    return d[x] = fibo(x - 1) + fibo(x - 2);
}

function solution() {
    console.log(fibo(10));
}

solution();