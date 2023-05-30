const title_elm = document.getElementById("title");

title_elm.addEventListener("mouseover", e => {
    e.target.value = "I'm Choi!"
});
title_elm.addEventListener("mouseout", e => {
    e.target.value = "Who Is He?"
});