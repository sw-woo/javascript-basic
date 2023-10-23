const { add, even, test } = require("./base1");

//숫자를 전달받아 홀수/짝수 여부를 문자열로 반환받는 함수
function checkOddOrEven(num) {
	if (num % 2 === 0) {
		console.log("짝수입니다.");
		return true;
	} else {
		console.log("홀수입니다.");
		return false;
	}
}
// checkOddOrEven(1);

module.exports = checkOddOrEven;
