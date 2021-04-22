// 특정 원소가 속한 집합을 찾기
function find_parent(parent, x){
    // 루트 노드가 아니라면, 루트 노드를 찾을 때까지 재귀적으로 호출
    if (parent[x] !== x){
        parent[x] = find_parent(parent, parent[x])
    }
    return parent[x]
}
    
// 두 원소가 속한 집합을 합치기
function union_parent(parent, a, b){
    a = find_parent(parent, a)
    b = find_parent(parent, b)
    if (a < b)
        parent[b] = a
    else
        parent[a] = b
}

function solution() {
    let n = 7; // 노드 개수
    let e = 7; // 간선 개수
    const graph = [[6,7,3],[1,5,2],[2,3,8],[3,4,10],[4,6,6],[5,6,1],[1,2,3]];
    // 세번째 인자는 cost
    let total = 0;
    let parent = new Array(n+1);
 
    graph.sort((a,b) => a[2]-b[2]);

    // 부모 테이블상에서, 부모를 자기 자신으로 초기화
    for(let i = 1; i<= n; i++){
        parent[i] = i;
    }

    for(let i = 0; i< e; i++){
        let cost = graph[i][2];
        let a = graph[i][0];
        let b = graph[i][1];
        // 사이클이 발생한 경우 종료
        if(find_parent(parent, a) === find_parent(parent, b)){
            continue;
        }else{ // 사이클이 발생하지 않았다면 합집합(Union) 연산 수행
            union_parent(parent, a, b)
            total += cost;
        }

    }
    console.log(total);
}

solution();
