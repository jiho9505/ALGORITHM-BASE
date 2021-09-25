    [배열 초기화]
    const arr = new Array(n); // 다 undefined 상태
    const arr = Array.from({length: 5}, () => 0);
    const c = new Array(n+1).fill(0);
    const graphs = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0)); // 2차원 배열 선언
    let newBoard = JSON.parse(JSON.stringify( myBoard )) // 배열복사
    => 배열복사는 이렇게 할 필요없이 [...array] 이런 식으로 할 것!

    [object]
    Object.keys(objS).length // objS(object) length 구하는 법

    [sort]
    기본적으로 .sort 만 쓰면 숫자들만 있어도 문자열 처럼 정렬한다.
    ex> [1,5,3,10] => [1,10,3,5]
    따라서 기본 숫자 정렬도 array.sort((a,b) => a-b) 와 같이 오름차순 정렬 선언
    array.sort((a,b) => b-a) // 내림차순
    array.sort((a,b) => { return a[1]-b[1] }) // 두번째인자기준 오름차순
    (다른 인자들은 예외처리 안해주면 들어온 순서대로 sort)
    array.sort((a,b) => {return a[1] === b[1] ? a[0] - b[0] : a[1]-b[1] })
    // 위와 같지만 같을때 첫번째 인자 asc

    [array]
    months.splice(1, 0, 'Feb');
    // index 1에서 0개 지우고 'Feb' 추가
    myFish.splice(3, 1);
    // index 3에서 1개 지우기
    fruits.join();
    // default가 ',' 공백없이 붙게하려면 .join('');

    [regex]
    let regexAllCase = new RegExp(pattern, "gi"); // pattern이 유동적일때 사용
    str.search( ) // 값 발견시 0이상 return 없으면 -1
    indexOf도 마찬가지
    str.match() // 매치부분 배열로 나옴 (regex에서 +시 뭉텅이로!)

    [String function]
    .toString(); // 일부 string화 x
    parseInt(); // 일부 가능
    .toLowerCase() // 한개도 선택가능
    .toUpperCase()

    string.replace('바꿀문자', '새로운문자') : 바꿀문자를 새로운 문자로 변환해 준다.
    string.slice(n1, n2) : 문자열의 n1부터 n2-1번 인덱스까지의 문자열 반환

    - string.concat('str') : string + str의 값을 반환
    - includes
    - indexOf
    - string.charAt(number) : 인덱스가 number인 문자 반환, 없으면 undefined

    let b = 'A'.charCodeAt() + 1 // num 등장
    String.fromCharCode(num) // num을 이용해 문자 get
    65~90 97~122 / 대 소 아스키

    [Tip]

    forEach, map 같은 순회 메소드보다 순수 for문이 훨씬 빨랐습니다.

    const temp = [...array]; // array 복사

    // 이거보다
    object[key] = [...value, newValue];

    // 이게 훨씬 빠름 (value가 배열이여야 가능)
    object[key].push(newValue);

    Math.floor() // 내림 ex) 1.5 => 1 _이진탐색시 유용_
    Math.max / min 사용 가능
    isNaN(x) // is Not a Number면 true

    n*m 일 때,
    90도 회전 : B[i][j] = A[n-1-j][i]
    270도 회전 : B[i][j] = A[j][m-1-i]
    * 헷갈리면 직접 그려보면서 해결

    map / reduce / sort / for 등 return 여부 & 받아야할 변수 여부 [조심!]
