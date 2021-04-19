/*
    그래프트리로 대체할수 있는 듯 
    (left와 right는 object key의 array에 들어간 순서대로 나오기때문에 식별가능)
    예를 들어 right child만 있을 경우 [-1,5] 이런식으로 null인 부분 -1로 대체 가능
    
    중위순회 : 각 레벨의 너비 그리고 결과를 통해 트리그래프 구성 가능
              start와 end를 두고 가운데를 root => 계속 재귀 (left,right) => start와 end 같아질때까지
    ex > 완전이진트리 : https://www.acmicpc.net/problem/9934
    ex > 트리의 높이와 너비 : https://www.acmicpc.net/problem/2250 => 중위순회/bfs/map

*/

/*
    2250 중위 순회 구현
*/
 
const edges = [
    [1, 2, 3],
    [2, 4, 5],
    [3, 6, 7],
    [4, 8 ,-1],
    [5, 9 ,10],
    [6 ,11, 12],
    [7 ,13, -1],
    [8, -1 ,-1],
    [9, 14, 15],
    [10, -1, -1],
    [11, 16, -1],
    [12, -1, -1],
    [13, 17, -1],
    [14, -1, -1],
    [15, 18 ,-1],
    [16, -1 ,-1],
    [17 ,-1 ,19],
    [18 ,-1 ,-1],
    [19, -1 ,-1]
    ]; 
let answer = [];
let e = {}; // 간선 정보

const inOrder = (start) => { // 중위순회
    let left = e[start][0];
    let right = e[start][1];

    if(left === -1 && right === -1){
        answer.push(start);
        return;
    }

    if(left !== -1){
        inOrder(left);
    }
    answer.push(start);
    if(right !== -1){
        inOrder(right);
    }

    return;
}

function solution() {
    
    for(let i=0; i<edges.length; i++){
        let node = edges[i][0];
        let left = edges[i][1];
        let right = edges[i][2];
        
        e[node] = [left,right];
    }
    
    inOrder(1); // 1부터 시작한다는 보장 없으면 위상정렬마냥 start 찾아야할듯
    return answer;
}

let ans = solution();
console.log(ans);