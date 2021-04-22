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
    const graph = [[1,2],[1,5],[2,3],[3,4],[4,6],[5,6],[6,7]];
    
    let parent = new Array(n+1);
    
    // 부모 테이블상에서, 부모를 자기 자신으로 초기화
    for(let i = 1; i<= n; i++){
        parent[i] = i;
    }
        
    let cycle = false; // 사이클 발생 여부

    for(let i = 0; i< e; i++){
        let a = graph[i][0];
        let b = graph[i][1];
        // 사이클이 발생한 경우 종료
        if(find_parent(parent, a) === find_parent(parent, b)){
            cycle = true;
            break;
        }else{ // 사이클이 발생하지 않았다면 합집합(Union) 연산 수행
            union_parent(parent, a, b)
        }
    }

    if(cycle)
        console.log("사이클이 발생했습니다.")
    else
        console.log("사이클이 발생하지 않았습니다.")
}

solution();
