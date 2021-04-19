let n = 7; 
let train = [[1,2],[2,3],[3,4],[4,6],[3,5],[5,7]]; 
let passenger = [2,1,3,2,3,4,3];

let d = {}; // passenger 정보 (필요없을듯)
let e = {}; // 간선 정보

const bfs = (x,c) => {
    c[x] = d[x];
    let q = [];
    q.push(x);
    
    while(q.length>0){
        let y = q.shift();
        for(let i =0; i <e[y].length; i++){  
            // 만약 DAG 같은 경우 방향성이라 length가 안먹힐 수 있으니 위에서 예외처리 혹은 []을 삽입
            let z = e[y][i];
            if(!c[z]){
                q.push(z);
                c[z] = c[y] + d[z];
            }
        }
    }
}

function solution(n, passenger, train) {
    let answer = [];
    let idx = 0;
    let max = 0;
  
    for(let i=0; i<passenger.length; i++){ // (필요없을듯)
        d[i+1] = passenger[i];
    }
    const c = new Array(n+1).fill(0);
    
    for(let i=0; i<train.length; i++){
        let x = train[i][0];
        let y = train[i][1];
        if(e[x]){
            e[x].push(y);
        }else{
            e[x] = [y];
        }
        if(e[y]){
            e[y].push(x);
        }else{
            e[y] = [x];
        }
       
    }
    
    bfs(1,c);
    for(let i = 0; i<c.length; i++){
        if(max <= c[i]){
            max = c[i];
            idx = i+1;
        }
    }
    answer = [max,idx];
    return answer;
}

let ans = solution(n, passenger, train);
console.log(ans);