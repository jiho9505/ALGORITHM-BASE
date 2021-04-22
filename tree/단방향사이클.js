let visit = [];
let check = [];
let ans = new Array(9); // node 개수 7개 가정
let e = {};

const dfs = (i) => {
    
	if (visit[i]) 
		return i;
	if (check[i]) 
		return 0;
	visit[i] = 1;
	check[i] = 1;
    if(!e[i]) { // 끝점 처리
        return 0;
    }
    console.log(i);
    for(let j = 0; j<e[i].length; j++){
        let next = dfs(e[i][j]);
        visit[i] = 0;
        if (next > 0) {
            ans[i] = 1;
            if (next != i) 
                return next;
        }
        return 0; 
    }
    
    
}

function solution() {
    let edges = [[1,2],[2,3],[3,4],[4,6],[6,7],[7,4],[4,5],[5,8]]; // a와 b 연결표시
    
    edges.forEach(edge => {
        let x = edge[0];
        let y = edge[1];
        
        if(e[x]){
            e[x].push(y);
        }else{
            e[x] = [y];
        }
    })

    dfs(1); // return 값이 있더라도 그 값이 필요없으면 변수에 안담아도 된다!
    
}

let answer = solution();
console.log(answer);
/*
    단방향에서 사이클 발생여부는 너무 쉽고
    위 코드는 어느 정점들이 사이클인지 기록해준다.
*/