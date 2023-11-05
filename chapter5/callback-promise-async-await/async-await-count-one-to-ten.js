function waitOneSecond(msg) { // 1초 대기하고 메시지 출력
    return new Promise((resolve, _) => {
        setTimeout(() => resolve(`${msg}`), 1000);
    });
}

async function countOneToTen() {
    for (let x of [...Array(10).keys()]) { // [...Array(10).keys()] = [0,1,2,3,4,5,6,7,8,9]
        let result = await waitOneSecond(`${x+1}초 대기 중...`); // waitOneSecond -> Promise
        console.log(result);
    }

    console.log("완료");
}

countOneToTen();