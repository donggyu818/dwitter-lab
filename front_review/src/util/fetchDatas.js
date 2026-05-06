/*
    GET 방식으로 데이터 fetch
*/
export const getFetchData = async(path) => {
    const baseUrl = 'http://localhost:9000';
    const url = `${baseUrl}${path}`;
    const response = await fetch(url, {method: "GET"});     // 기본이 get 이기에 {method: "GET"} 생략 가능.
    return await response.json();
}

/*
    POST 방식으로 데이터 fetch
*/
export const postFetchData = async(path, data) => {
    const baseUrl = 'http://localhost:9000';
    const url = `${baseUrl}${path}`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify({"data" : data})     // 타입이 서로 달라서 인식 못함. 변환해야 함.
    });
    return await response.json();

}