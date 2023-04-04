// cookie는 문자열로 되어 있기 떄문에 다른 값도 함께 문자열로 포함되어 있다.
// 따라서 cookie 문자열에서 access_token 값 만을 빼는 함수가 필요해졌기 때문에 만듦.

/** "token=value" 를 {token:"value"}로 바꾸는 함수 */
export const cookieStringToObject = (cookieString: string | undefined) => {
  const cookies: { [key: string]: string } = {};

  if (cookieString) {
    // "token = value"
    const itemString = cookieString?.split(/\s*;\s*/);
    itemString.forEach(pairs => {
      // ["token", "value"]
      const pair = pairs.split(/\s*=\s/);
      cookies[pair[0]] = pair.splice(1).join('=');
    });
  }

  return cookies;
};

/** string에서 number만 return하는 함수 */
export const getNumber = (string: string) => {
  const numbers = string.match(/\d/g)?.join('');

  if (numbers) return Number(numbers);
  return 0;
};
