const odd = "홀수 입니다.";

const even = "짝수 입니다.";

function test() {
	console.log("테스트 함수가 호출 되었습니다.");
}
//객체 형태로 노출을 합니다. 객체명과 속성명이 동일할시 생략이 가능합니다.
module.exports = {
	odd,
	even,
	test,
};
