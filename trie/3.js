class Node {
    constructor(value = 1){
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
                currentNode.child[currentChar] = new Node(1);
            }else{
                currentNode.child[currentChar].value += 1;
            }

            currentNode = currentNode.child[currentChar]; // 자식 노드로 이동한다.
        }
        currentNode.end = true //해당 노드에서 끝나는 단어가 있음을 알린다
     }

     search(string) {
        let count = 0;
        let currentNode = this.root; //역시나 시작은 루트
        for(let i = 0; i <string.length ; i++) {
            count++;
            const currentChar = string[i]; 
            
            currentNode = currentNode.child[currentChar]; // 있으면 노드 이동
            
            if(currentNode.value === 1){
                break;
            }
        }
        return count;
     }
 }

 const myTrie = new Trie();

 myTrie.insert("go");
 myTrie.insert("gone");
 myTrie.insert("guild");

 let x = myTrie.search("go");
 let y = myTrie.search("gone");
 let z = myTrie.search("guild");
 console.log(x,y,z);

 /*
     카카오 자동완성문제
     각 노드에 value를 등장한만큼 + 해줄것
     끝까지 가거나 혹은 1일때
 */