let d = {};
let n = 7; // 노드 개수
let indegree = Array.from({length: n+1}, () => 0);


const topologySort = () => {
    let q = [];
    let result = [];

    for(let i = 1; i <= n; i++){
        if(!indegree[i]) q.push(i);
    }

    // 큐가 빌 때까지 반복
    for(let j = 1; j <= n; j++) {
        if(q.length === 0){
            console.log("occured cycle")
            return;
        }
        
        // 큐에서 원소 꺼내기
        let now = q.shift();
        result.push(now);
        
        if(j === n){ // 마지막 노드는 d[now]가 없으므로 length에서 Error 발생.
            break;
        }

        // 해당 원소와 연결된 노드들의 진입차수에서 1 빼기
        for (let i = 0; i < d[now].length; i++) {
            indegree[d[now][i]] -= 1;
            // 새롭게 진입차수가 0이 되는 노드를 큐에 삽입
            if (indegree[d[now][i]] === 0) {
                q.push(d[now][i]);
            }
        }
    }

    // 위상 정렬을 수행한 결과 출력
    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
}

function solution() {
    
    const graph = [[1,2],[1,5],[2,3],[3,4],[4,6],[5,6],[6,7]];
    // 만약 세번째 인자로 cost 있을 시 [1,2,10]이면 {1: [2,10]} 이런식으로 넣어주면 될듯?
    for (let i = 0; i < graph.length; i++) {
        let a = graph[i][0];
        let b = graph[i][1];
        
        if(d[a]){ // 정점 A에서 B로 이동 가능
            d[a].push(b);
        }else{
            d[a] = [b];
        } 
        
        indegree[b] += 1; // 진입 차수를 1 증가
    }
    
    topologySort();
}

solution();

/*
    단방향 / 사이클 X / 순서 강요 문제
    ex> 일부 순위만 주어지고 순위 구성하라던지 | 순서 정해진 대로 하라는 문제
*/