class Node {
    constructor(value = ''){
        this.value = value; //현재 경로까지의 누적값
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
                currentNode.child[currentChar] = new Node(currentNode.value + currentChar);
            }

            currentNode = currentNode.child[currentChar]; // 자식 노드로 이동한다.
        }
        currentNode.end = true //해당 노드에서 끝나는 단어가 있음을 알린다
     }

     search(newNode) {
        let currentNode = newNode; //역시나 시작은 루트
     
        if(Object.keys(currentNode.child).length>0){   // obj length 구할 때 사용
          for(let key in currentNode.child){
            this.search(currentNode.child[key]);
          }
        }else{
          count++;
          return;
        }
      
     }
 }

 let count = 0;
 const myTrie = new Trie();

 myTrie.insert("hell");
 myTrie.insert("hep");
 myTrie.insert("hel");

 myTrie.search(myTrie.root);
 console.log(count);

 /*
     백준의 전화번호 목록 문제 : 접두사 유무 판단문제로 전체 문자열 개수와 리프 노드의 개수를 비교해주었다.
     그리고 DFS 탐색 이용.
 */