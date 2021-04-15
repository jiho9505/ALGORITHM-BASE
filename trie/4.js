class Node {
    constructor(){
        this.end = false; //해당 노드에서 끝나는 문자열이 있는지 여부
        this.child = {} //자식
    }
}

 class Trie {
     constructor(){
        this.root = new Node();
     }

     insert(string){
        let currentNode = this.root; //루트노드를 시작으로 탐색하면서 삽입한다
    
        for(let i = 0; i <string.length ; i++) {
            
            const currentChar = string[i];

            //만일, 해당 키를 가진 자식이 없다면 새 노드를 만들어준다.
            if(currentNode.child[currentChar] === undefined){
                currentNode.child[currentChar] = new Node();
            }

            currentNode = currentNode.child[currentChar]; // 자식 노드로 이동한다.
        }
        currentNode.end = true //해당 노드에서 끝나는 단어가 있음을 알린다
     }

     search(string) {
        let count = 1;
        let currentNode = this.root; //역시나 시작은 루트
        for(let i = 0; i <string.length ; i++) {
            
            const currentChar = string[i]; 
            
            if(i>0){
                if(Object.keys(currentNode.child).length === 1 && !currentNode.end){

                }
                else{
                    count++;
                }              
            }

            currentNode = currentNode.child[currentChar]; // 있으면 노드 이동
            
        }

        return count;
     }
 }

 const myTrie = new Trie(); // value는 여기서 사실 필요없음.

 myTrie.insert("hell");
 myTrie.insert("hello");
 myTrie.insert("heaven");
 myTrie.insert("gae");

 let x = myTrie.search("hell");
 let y = myTrie.search("hello");
 let z = myTrie.search("heaven");
 let k = myTrie.search("gae");

 console.log(x,y,z,k);

 /*
     백준 5670번 휴대폰 자판 플래티넘4
     https://www.acmicpc.net/problem/5670
     자동완성과 유사하지만 여기서 포인트는 자식노드가 1개 , 해당 노드가 End인지 아닌지가 핵심!
 */