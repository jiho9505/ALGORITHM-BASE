let arr = [];
let input = ['a','b','c','d'];

const DFS = (start, depth) => {
    if(depth === 3){ // 3은 문제에 따라 다르다
        let str = "";
        for(let j = 0; j<arr.length; j++){
            let y = arr[j];
            str += input[y];
        }
        console.log(str);
        return;
    }
    for(let i = start; i < input.length; i++){ 
        arr.push(i);
        DFS(i+1,depth+1);
        arr.pop();    
    }
}

DFS(0,0);