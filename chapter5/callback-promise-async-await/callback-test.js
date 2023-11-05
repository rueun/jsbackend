const DB = [];
// 회원 가입 API 함수
function register(user) { // 콜백이 3중으로 중첩된 함수
    return saveDB(user, function (user) { // 콜백
        return sendEmail(user, function (user) { // 콜백
            return getResult(user); // 콜백
        });
    });
}

function saveDB(user, callBack) {
    DB.push(user);
    console.log(`save ${user.name} to DB`);
    return callBack(user);
}

function sendEmail(user, callBack) {
    console.log(`email to ${user.email}`);
    return callBack(user);
}

function getResult(user) {
    return `success register ${user.name}`;
}

const result = register({email: "ejshin@test.com", password: "1234", name: "은정"});
console.log(result);