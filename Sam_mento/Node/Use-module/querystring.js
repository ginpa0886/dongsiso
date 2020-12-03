
const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EB%B0%B0%EA%B3%A0%ED%94%94&oquery=%EC%A1%B0%EA%B4%91%EC%9D%BC&tqi=U8AM9lp0J1ZssSkl2AossssssJl-162065');
const query = querystring.parse(parsedUrl.query);
console.log('querystring.parse()', query);
console.log('querystring.stringify():', querystring.stringify(query));