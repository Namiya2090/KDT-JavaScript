// body 요소의 첫 번째 자식요소
const domHeading = document.body.firstElementChild;

console.log(document.nodeName);
console.log(document.body.nodeName);
console.log(domHeading.nodeName);
console.log(domHeading.textContent);
console.log(domHeading.firstChild.nodeName);

// body 요소의 두 번째 자식요소
const domNotice = document.body.children[2];

console.log(domNotice.nodeName);
const domNoticeHeading = domNotice.firstElementChild;
console.log(domNoticeHeading.nodeName);
console.log(domNoticeHeading.textContent);
console.log(domNotice.children[1].textContent);
