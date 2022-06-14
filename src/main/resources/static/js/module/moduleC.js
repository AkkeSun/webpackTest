
// 하나하나 따로 export 해도 된다 (이경우엔 export default 가 아니다)
function clickFunc1() {
    alert('hello click1');
}

function clickFunc2() {
    alert('hello click');
}

export {clickFunc1, clickFunc2}

