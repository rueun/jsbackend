function goodPromise(val) {
    // Promise 생성 후 반환
    return new Promise((resolve, reject) => {
        resolve(val);
    });
}

goodPromise("세상에")
// Promise 에서 resolve 이후에는 then 호출 가능
.then((val) => {
    return val + " 이런";
})
.then((val) => {
    return val + " 코드는";
})
.then((val) => {
    return val + " 없습니다.";
})
.then((val) => {
    console.log(val);
})
.catch((err)=> { // Promise 에서 reject 가 호출되었을 경우 실행
    console.log(err);
})