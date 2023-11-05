
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://rueun0302:UovX2umLr9SkPcQc@cluster0.pa8ugmz.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() { // async가 있으므로 비동기 처리 함수
    await client.connect();
    const adminDB = client.db('test').admin(); // admin DB 인스턴스
    const listDatabases = await adminDB.listDatabases(); // 데이터베이스 정보 가져오기
    console.log(listDatabases);
    return "OK";
}

run()
.then(console.log)
.catch(console.error)
.finally(() => client.close());