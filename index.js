const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

// function handleClick() {
//   const hasClass = title.classList.contains(CLICKED_CLASS); // title의 class가 CLICKED_CLASS를 포함하고 있으면 true.
//   if (hasClass) {
//     title.classList.remove(CLICKED_CLASS);
//   } else {
//     title.classList.add(CLICKED_CLASS);
//   }
// }
// 이 모든걸 줄여서 toggle 함수가 알아서 해줌^^!

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}
init();
