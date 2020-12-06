const { URL } = require('url');

const myURL = new URL('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%95%88%EB%85%95');
console.log('searchParams:', myURL.searchParams);
console.log('searchParams.getAll():', myURL.searchParams.getAll('category'));
console.log('searchParams.get():', myURL.searchParams.get('limit'));
console.log('searchParams.has():', myURL.searchParams.has('fbm'));

console.log('searchParams.key():', myURL.searchParams.keys());
console.log('searchParams.values:', myURL.searchParams.values());

myURL.searchParams.append('filter','es3');
myURL.searchParams.append('filter','es5');
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.append('filter','es6');
console.log(myURL.searchParams.getAll('filter'));

console.log('searchParams.tostring():', myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString();
