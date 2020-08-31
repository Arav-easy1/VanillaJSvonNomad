const title = document.querySelector("#title");

function handleClick(){
    title.style.color = "blue";
}

// handleResize() 이렇게 하면 지금 바로 호출하게됨, 따라서 특정 이벤트에서 쓸때는 handleResize라고 쳐야함.
title.addEventListener("click", handleClick);  