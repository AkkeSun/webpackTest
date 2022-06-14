
// export default import 형식
import moduleA from './module/moduleA';
import moduleB from './module/moduleB';
// export import 형식
import {clickFunc1, clickFunc2} from './module/moduleC';
// css 로더
import css from "../css/index.css";


// 화면이 로드된 후 자동실행
window.addEventListener('DOMContentLoaded', function()
{
    // moduleA 는 그 자체가 모듈이고 (export default) 하나의 함수이므로
    moduleA();

    // moduleA 는 그 자체가 모듈이고 (export default) 객채의 형식이므로
    moduleB.testFunc();
});


function myData () {
    return moduleB.myData();
}

// 전역 객채로 모듈을 사용하기 위해 export 합니다
export {clickFunc1, clickFunc2, myData}
