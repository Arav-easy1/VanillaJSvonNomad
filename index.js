// const title = document.querySelector("#title");   // 노드의 첫번째 자식을 반환함. #id로 찾기 .class로 찾기
const title = document.querySelector("#title");
title.innerHTML = "Hi! From JS";
title.style.color = 'red';
document.title = "I own you now";