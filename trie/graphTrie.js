function solution(words) {
    let tries = {}
    let answer = 0;
    words.forEach(word => {
        let currTrie = tries; 
        for(let i = 0; i < word.length; i++){
            if(currTrie[word[i]]){
                currTrie[word[i]][0] += 1;
            } else {
                currTrie[word[i]] = [1, {}];
            }
            currTrie = currTrie[word[i]][1];
        }
    });
    words.forEach(word => {
        let currTrie = tries; 
        for(let i = 0; i < word.length; i++){
            answer++;
            if(currTrie[word[i]][0]===1){
                break;
            } 
            currTrie = currTrie[word[i]][1];
        }
    })
    return answer;
}