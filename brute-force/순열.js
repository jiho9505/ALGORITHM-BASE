let arr = [];
let input = ['a','b','c','d'];
let c = new Array(15);
// let c = Array.from({length: 5}, () => 0);
// 0으로 초기화 할 수 있는 법
const DFS = (depth) => {
    if(depth === 3){ // 3은 문제에 따라 다르다
        let str = "";
        for(let j = 0; j<arr.length; j++){
            let y = arr[j];
            str += input[y];
        }
        console.log(str);
        return;
    }
    for(let i = 0; i < input.length; i++){
        if(!c[i]){
            arr.push(i);
            c[i] = 1;
            DFS(depth+1);
            c[i] = 0;
            arr.pop(); 
        } 
    }
}

DFS(0);