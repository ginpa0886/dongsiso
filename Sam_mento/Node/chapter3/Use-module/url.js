const url = require('url');

const { URL } = url;
const myURL = new URL('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%95%88%EB%85%95');
console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));
console.log('----------------------------------------');

const parsedUrl = url.parse('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%95%88%EB%85%95');
console.log('url.parse():', parsedUrl);
console.log('url.format():', url.format(parsedUrl));