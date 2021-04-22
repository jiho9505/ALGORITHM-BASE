class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {
        data <= this.data ? this._toLeft(data) : this._toRight(data);
        // 현재 값보다 작으면 왼쪽에 넣고, 크면 오른쪽에 넣는다.
    }

    _toLeft(data) {
        this.left ? this.left.insert(data) : this.left = new Node(data);
        // 빈 공간을 찾을 때 까지 insert 호출, null 이면 노드 생성해서 이어주기
    }

    _toRight(data) {
        this.right ? this.right.insert(data) : this.right = new Node(data);
        // 마찬가지로 빈 공간을 찾을 때 까지 insert 호출, null 이면 노드 생성해서 이어주기
    }

    contains(data) {
        if(this.data === data) return this; // 같으면 바로 리턴
        return data <= this.data ? this._findLeft(data) : this._findRight(data); 
        // 값을 비교해서 작으면 왼쪽에서 찾고, 크면 오른쪽에서 찾는다.
    }

    _findLeft(data) {
        return this.left ? this.left.contains(data) : null;
        // left 가 있으면 탐색을 위해 왼쪽 아래로 다시 contains 재귀 호출, 없으면 null return
    }

    _findRight(data) {
        return this.right ? this.right.contains(data) : null;
        // 마찬가지로 right 가 있으면 탐색을 위해 오른쪽 아래로 다시 contains 재귀 호출, 없으면 null return
    }

}

const preOrder = (tree) => {
    if(tree.left === null && tree.right === null){
        console.log(tree.data);
        return;
    }
    console.log(tree.data);
    if(tree.left !== null){
        preOrder(tree.left);
    }
    if(tree.right !== null){
        preOrder(tree.right);
    }
    
    
}

const postOrder = (tree) => {
    if(tree.left === null && tree.right === null){
        console.log(tree.data);
        return;
    }
    if(tree.left !== null){
        postOrder(tree.left);
    }
    if(tree.right !== null){
        postOrder(tree.right);
    }
    
    console.log(tree.data);
};

let bst = new Node(5);
bst.insert(3);
bst.insert(6);
bst.insert(8);
bst.insert(1);
bst.insert(2);
bst.insert(7);
bst.insert(9);
bst.insert(0);

// preOrder(bst);
postOrder(bst);