// 지정된 길이만큼 좌측에 특정문자열 채우기
// @param str {string} 문자열
// @param length {number} 길이
// @param char {string} 채울 문자
export const lpad = (str : string, length : number, char: string) => {
    let resultVal = "";
    for(let i = str.length; i < length; i++){
        if(char) resultVal += char;
        else resultVal += "0";
    }

    resultVal += str;
    return resultVal;
}