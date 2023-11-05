function myWork(work) {
    return new Promise((resolve, reject) => {
        resolve(work.toUpperCase());
    });
}

function playGame(work) {
    return new Promise((resolve, reject) => {
        if(work === "DONE") {
            resolve('GO PLAY GAME');
        } else {
            reject(new Error("DON'T"));
        }
    })
}

// Bad Ex
// 프로미스를 중첩해서 사용
// 가독성 매우 안좋음
myWork('done')
.then(function (result) {
    playGame(result)
    .then(function (val) {
        console.log(val);
    })
    .catch((err) => {
        console.error(err);
    });
})

// Good Ex
// 결과를 then 으로 넘김
// 프로미스는 resolve 의 실행결과를 then 으로 넘길 수 있음
myWork('done')
.then(playGame)
.then(console.log);