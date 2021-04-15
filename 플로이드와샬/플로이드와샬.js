const INF = Infinity;

const floydWarshall = function(dist) {
    const len = dist.length;

    for(let i=0; i<len; i++){
        for(let j=0; j<len; j++){
            for(let k=0; k<len; k++){
                if(dist[j][k] > dist[j][i] + dist[i][k])
                    dist[j][k] = dist[j][i] + dist[i][k];
            }
        }
    }
}

const main = (function(){
    const graph = [
        [0, 5, INF, 8],
        [7, 0, 9, INF],
        [2, INF, 0, 4],
        [INF, INF, 3, 0]
    ]; 
    // 비용들을 담고 있는 그래프임
    // 실제 문제에선 const graphs = Array.from({ length: n}, () => Array(n).fill(INF)); 
    // n*n 배열은 INF 초기화 후 자기 자신은 0, 그리고 연결성들 표시 

    floydWarshall(graph);

    for(let i=0; i<graph.length; i++){
        console.log(graph[i])
    }
}());


/*
    모든 정점에서 모든 정점 거리를 구할 때
    ex> 성적, 순위 (일부 정보가 없을 때) & 최소 비용
*/