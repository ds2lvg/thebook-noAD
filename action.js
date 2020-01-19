// 광고 가리기
(function hideDom() {
 arguments[0].forEach(dom => {
  if(dom.length === undefined) dom.style.display="none";
  else dom.forEach(v => v.style.display="none");
 });
})([
  document.querySelector(".google-auto-placed"),
  document.querySelectorAll(".thebook-section--center")[0],
  document.querySelectorAll(".mdl-layout__header-row")[1],
  document.querySelectorAll(".mdl-grid")[2],
  document.querySelectorAll(".mdl-grid")[5],
  document.querySelector(".google-auto-placed"),
  document.querySelectorAll(".thebook-vsp"),
]);

// 메뉴 상위로 이동
const menu = document.querySelectorAll('.thebook-section--center')[3].cloneNode();