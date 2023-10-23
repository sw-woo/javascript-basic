const { odd, even } = require("./base1");
const checkOddOrEven = require("./base2");

function checkStringOddOrEven(str) {
	if (str.length % 2) {
		return odd; //홀수 입니다.
	} else {
		return even; //짝수입니다.
	}
}
// base2 참조 객체
oddOrEven = checkOddOrEven(4);
console.log(`숫자에 대해 홀수짝수를 출력해보자", ${oddOrEven}`);

//문자열 홀짝 분석
console.log(
	"문자열값을 전달해 문자열길이를 홀짝 분석해보자.",
	checkStringOddOrEven("this is test all ")
);
