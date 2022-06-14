
// 한 모듈에 여러 내용을 export 하려면 객채 형태로 하면 된다
export default {
    testFunc : () => {
        document.getElementById("mod2").innerText= "hello";
    },
     myData : () => {
        return 'hello MyData';
    }
}
