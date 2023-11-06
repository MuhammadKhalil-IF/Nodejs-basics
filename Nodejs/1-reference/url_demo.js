const url=require('url');
console.log(url);
let id=5000;
let status= active;
const UrlObj=new URL('http://myWebsite.com/hello.html?${id}& ${status }');
console.log(UrlObj.href);



console.log(UrlObj.searchParams)

