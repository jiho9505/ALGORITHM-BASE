/*
priority_queue<pair<int, int>> pq;
	pq.push({ 1,2 });
	pq.push({ 2,2 });
	pq.push({ 2,3 });
	pq.push({ 2,1 });
	pq.push({ 1,1 });

	while (!pq.empty())
	{
		cout << pq.top().first << pq.top().second << '\n';
		pq.pop();
	}

C++은 기본적으로 max Heap!
pair.first 값이 큰 순, 같으면 pair.second가 큰 순으로 정렬된다. 결과값은

(2,3)

(2,2)

(2,1)

(1,2)

(1,1)

- pair도 마찬가지로 반대로 정렬할 수도 있다. ( -를 붙히거나 다른 방법이 있다 )

*/