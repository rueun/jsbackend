const axios = require("axios"); // axios 임포트

async function getTop20Movies() {
    const url = "https://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json";
    try {
        // 네트워크에서 데이터를 받아오므로 await 로 기다림
        const result = await axios.get(url);
        const { data } = result; // 결과값(result)에 data 프로퍼티를 읽어옴.

        // 데이터 또는 articleList 가 없을 때 예외 처리
        if(!data.articleList || data.articleList.size == 0) { // 크기가 0이면 에러
            throw new Error("데이터가 없습니다.");
        }

        // 영화 리스트를 제목과 순위 정보로 분리
        const movieInfos = data.articleList.map((article, idx) => { 
            return {title: article.title, rank: idx + 1};
        });
    
        // 영화 데이터 출력
        for (const movieInfo of movieInfos) { 
            console.log(`[${movieInfo.rank}위] ${movieInfo.title}`);
        }


    } catch(err) {
        console.log("<<에러 발생>>");
        console.error(err);
    }
}

getTop20Movies();
