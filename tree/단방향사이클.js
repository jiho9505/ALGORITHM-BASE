let visit = [];
let check = [];
let ans = [];

const dfs = (i) => {

	if (visit[i]) 
		return i;
	if (check[i]) 
		return 0;
	visit[i] = 1;
	check[i] = 1;
	let next = dfs(v[i]);
	visit[i] = 0;
	if (next > 0) {
		ans[i] = 1;
		if (next != i) 
			return next;
	}
	return 0; 
}

function solution() {
    let edges = [[1,2],[2,3],[3,4],[4,6],[3,5],[5,7]]; // a와 b 연결표시
    let e = {};
    edges.forEach(edge => {
        let x = edge[0];
        let y = edge[1];
        
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
    })
    
}

let answer = solution();
console.log(answer);
/*
    단방향에서 사이클 발생여부는 너무 쉽고
    위 코드는 어느 정점들이 사이클인지 기록해준다.
*/