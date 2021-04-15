const map = [  // 미로
    [0,0,0,1,0],
    [1,0,0,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,0,1,0]
]

const N = map.length;
const M = map[0].length;
const c = Array.from({ length: N }, () => Array(M).fill(0)); // 방문표시

const dx = [ 1, 0, -1, 0 ]; // 하 우 상 좌 
const dy = [ 0, 1, 0, -1 ];

const BFS = (x, y) => {

	c[x][y] = 1; // 방문표시

	let q = []; // 큐 생성
	q.push([x,y]); // 시작점 넣기

	while (q.length>0) // 큐에 데이터가 없을때까지
	{
        let pos = q.shift();
		let x = pos[0];
		let y = pos[1];
		
		if(c[N-1][M-1]) break;
		 
		for (let i = 0; i < 4; i++) 
		{
			let next_x = x + dx[i];
			let next_y = y + dy[i];

			if (0 <= next_x && next_x < N && 0 <= next_y && next_y < M) // 미로의 범위
			{
				// 길이 존재하고 이전에 방문했던적이 없는 경우
				if (map[next_x][next_y] === 0 && c[next_x][next_y] === 0) // '1' 조심 상황에 따라.. 
				{
					c[next_x][next_y] = c[x][y] + 1;
					q.push([next_x,next_y]); // 큐에 데이터 밀어넣기
				}

			}

		}
	}
	
	return c[N-1][M-1];

}

function solution() {
    let answer = BFS(0,0) - 1; // 1을 빼줘야한다!!
    console.log(answer);
}

solution();